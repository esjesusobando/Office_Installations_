---
name: meilisearch
description: > Triggers on: Meilisearch, search, full-text search.
  Meilisearch patterns - Typo-tolerant search engine for inventory.
  Trigger: When implementing search, filters, or autocomplete.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## Client Setup

```typescript
// lib/meilisearch.ts
import { MeiliSearch } from 'meilisearch';

export const meili = new MeiliSearch({
  host: process.env.MEILI_HOST || 'http://localhost:7700',
  apiKey: process.env.MEILI_KEY || 'masterKey',
});

export const productsIndex = meili.index('products');
```

## Index Configuration (AOLI Products)

```typescript
// setup-index.ts
import { meili } from './lib/meilisearch';

async function setupProductsIndex() {
  // Create index
  await meili.createIndex('products', { primaryKey: 'id' });
  
  const index = meili.index('products');
  
  // Configure searchable attributes
  await index.updateSearchableAttributes([
    'title',
    'description',
    'category',
    'sku',
  ]);
  
  // Configure filterable attributes
  await index.updateFilterableAttributes([
    'category',
    'condition',
    'price',
    'available',
  ]);
  
  // Configure sortable attributes
  await index.updateSortableAttributes([
    'price',
    'createdAt',
  ]);
  
  // Configure typo tolerance
  await index.updateTypoTolerance({
    enabled: true,
    minWordSizeForTypos: {
      oneTypo: 4,
      twoTypos: 8,
    },
  });
  
  // Set ranking rules
  await index.updateRankingRules([
    'words',
    'typo',
    'proximity',
    'attribute',
    'sort',
    'exactness',
  ]);
  
  console.log('Products index configured!');
}

setupProductsIndex();
```

## Search API (Next.js)

```typescript
// app/api/search/route.ts
import { meili } from '@/lib/meilisearch';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';
  const category = searchParams.get('category');
  const condition = searchParams.get('condition');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  
  const filters: string[] = [];
  
  if (category) filters.push(`category = "${category}"`);
  if (condition) filters.push(`condition = "${condition}"`);
  if (minPrice) filters.push(`price >= ${minPrice}`);
  if (maxPrice) filters.push(`price <= ${maxPrice}`);
  
  const results = await meili.index('products').search(q, {
    filter: filters.length > 0 ? filters.join(' AND ') : undefined,
    sort: ['price:asc'],
    limit: 20,
    attributesToHighlight: ['title', 'description'],
  });
  
  return NextResponse.json(results);
}
```

## Autocomplete Component

```typescript
// components/SearchAutocomplete.tsx
'use client';

import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export function SearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setResults([]);
      return;
    }
    
    fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.hits);
        setIsOpen(true);
      });
  }, [debouncedQuery]);
  
  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search inventory..."
        className="w-full px-4 py-2 border rounded-lg"
      />
      
      {isOpen && results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-lg mt-1">
          {results.map(product => (
            <li key={product.id} className="p-2 hover:bg-gray-100 cursor-pointer">
              <a href={`/inventory/${product.id}`}>
                <span className="font-medium">{product.title}</span>
                <span className="text-gray-500 ml-2">${product.price}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## Webhook Sync (from Payload)

```typescript
// payload.config.ts hooks
import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload';

const MEILI_HOST = process.env.MEILI_HOST;
const MEILI_KEY = process.env.MEILI_KEY;

export const syncToMeilisearch: CollectionAfterChangeHook = async ({
  doc,
  operation,
}) => {
  if (operation === 'create' || operation === 'update') {
    const response = await fetch(`${MEILI_HOST}/indexes/products/documents`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MEILI_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{
        id: doc.id,
        title: doc.title,
        description: doc.description,
        category: doc.category,
        price: doc.price,
        condition: doc.condition,
        available: doc.available,
        createdAt: doc.createdAt,
      }]),
    });
    
    if (!response.ok) {
      console.error('Meilisearch sync failed:', await response.text());
    }
  }
};

export const removeFromMeilisearch: CollectionAfterDeleteHook = async ({
  doc,
}) => {
  await fetch(`${MEILI_HOST}/indexes/products/documents/${doc.id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${MEILI_KEY}`,
    },
  });
};
```

## Keywords

meilisearch, search, full-text, typo-tolerant, autocomplete, filters, instant-search

## Esencia Original

> **Propósito:** Búsqueda typo-tolerant para inventario de productos
> **Flujo:** Payload hooks → Meilisearch → Frontend search API

## ⚠️ Gotchas (Errores Comunes a Evitar)

- **[ERROR]**: Search returns empty results
  - **Por qué**: Index no tiene atributos configurados
  - **Solución**: Ejecutar `updateSearchableAttributes` al crear index

- **[ERROR]**: Filter not working
  - **Por qué**: Atributo no está en `filterableAttributes`
  - **Solución**: Agregar a `filterableAttributes` via `updateFilterableAttributes`

- **[ERROR]**: Partial matches not working
  - **Por qué**: Typo tolerance deshabilitado o palabras muy cortas
  - **Solución**: Configurar `minWordSizeForTypos` en `updateTypoTolerance`

- **[ERROR]**: Search too slow
  - **Por qué**: Falta configuración de ranking o index grande
  - **Solución**: Usar `attributesToRetrieve` para limitar campos en respuesta

## 💾 State Persistence

Guardar en:
- `03_Knowledge/` — Documentación
- `04_Operations/` — Estado activo