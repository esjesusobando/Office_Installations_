---
name: compound-engineering
description: "Compound Engineering - Captura y reutiliza conocimiento del equipo. Triggers: compound, knowledge capture, lessons learned, document solution, capturar conocimiento."
version: 1.0.0
---

# Compound Engineering

## Propósito

Sistema de capitalización de conocimiento - documenta soluciones para que el equipo no repita trabajo.

## Cuándo Usar

- "compound"
- "capturar conocimiento"
- "documentar solución"
- "lessons learned"
- Al resolver un problema difícil

## Flujo

1. **Detectar**: Problema resuelto recientemente
2. **Documentar**: Escribir la solución
3. **Categorizar**: Guardar en 04_Operations/06_Solutions/
4. **Vincular**: Relacionar con issues existentes

## Categorías de Soluciones

- build-errors/
- test-failures/
- performance-issues/
- database-issues/
- security-issues/

## Scripts

- 62_Tool_Shed.py: Selector de MCPs por contexto

---

## Esencia Original

> **Metaskill**: Sistema de capitalización de conocimiento - documenta soluciones para que el equipo no repita trabajo.

**Por qué existe esta skill:**
- El equipo resuelve problemas valiosos pero no los documenta
- Cuando alguien enfrenta el mismo problema, debe descubrir la solución desde cero
- El conocimiento se pierde cuando los miembros del equipo cambian de proyecto

**Caso de uso principal:**
1. Un miembro del equipo resuelve un problema difícil
2. Se usa esta skill para documentar la solución con contexto
3. La solución se guarda en `04_Operations/06_Solutions/`
4. Otros miembros del equipo pueden encontrar y reutilizar el conocimiento

---

## ⚠️ Gotchas

### ERROR 1: Documentar sin contexto
- **Por qué**: Sin el contexto del problema original, la solución no tiene sentido
- **Solución**: Incluir siempre: (1) Error original, (2) Por qué falló lo intentado, (3) Cómo se llegó a la solución

### ERROR 2: Soluciones genéricas
- **Por qué**: "No cometas errores" no aporta valor - es demasiado obvio
- **Solución**: Ser específico: "El API de GitHub requiere token con scope 'repo' para acceder a privados"

### ERROR 3: No categorizar correctamente
- **Por qué**: Sin categoría, las soluciones son difíciles de encontrar después
- **Solución**: Usar las categorías predefinidas: build-errors, test-failures, performance-issues, database-issues, security-issues

### ERROR 4: No vincular a issues
- **Por qué**: Una solución sin contexto de cuándo aplicarla es inútil
- **Solución**: всегда incluir referencia al issue/PR donde se encontró el problema

---

*Skill Version: 1.0.0*
