# 04_Operations — Memoria y Procesos

**Versión:** 6.1  
**Última actualización:** 2026-03-27  
**Estado:** ✅ Activo

---

## 📂 Estructura

```
04_Operations/
├── README.md                    # Este archivo
├── 01_Context_Memory/           # Memoria de contexto (sesiones)
│   ├── README.md
│   ├── _jsons/                  # JSONs de validación
│   ├── CTX_AUTO_Intelligence_*.md
│   ├── CTX_00*.md              # Sesiones 001-003
│   └── [Archivos de contexto]
├── 02_Knowledge_Brain/         # Base de conocimiento técnico
│   ├── README.md
│   ├── 01_Inventario_Total.md
│   ├── 00_Library_PDFs/        # PDFs de referencia (14 archivos)
│   └── [Notas de investigación]
├── 03_Process_Notes/           # Notas de sesiones
│   ├── README.md
│   └── [21 notas de sesión]
└── 04_Memory_Brain/            # Mapeos y análisis
    ├── README.md
    ├── 00_Active/             # Memoria activa
    ├── 01_Mapeos/            # Mapas del sistema
    ├── 02_Code_Reviews/       # Revisiones de código
    └── 03_Archive_Memory/    # Archivo por fecha
        └── 2026-03-21/
        └── 2026-03-24/
```

---

## 🎯 Propósito

Esta carpeta contiene el **cerebro operativo** del sistema - memoria a largo plazo, notas de sesiones, y mapeos:

| Subcarpeta | Contenido |
|-----------|-----------|
| `01_Context_Memory/` | CTX de sesiones, JSONs de validación |
| `02_Knowledge_Brain/` | Research, PDFs, conocimiento técnico |
| `03_Process_Notes/` | Notas de sesiones (21 archivos) |
| `04_Memory_Brain/` | Mapas, code reviews, archivo |

---

## 📊 Estadísticas

| Área | Cantidad |
|------|----------|
| Context Memories | ~12 archivos |
| Notas de Sesión | 21 archivos |
| PDFs de Referencia | 14 archivos |
| Code Reviews | Varios |
| Mapeos | Activos + Archivo |

---

## 🔄 Integración con Engram

El sistema usa Engram (MCP) para memoria persistente. Los archivos en esta carpeta son backups locales.

```bash
# Buscar en memoria
engram search [query]

# Guardar memoria
engram save [title] [content]
```

---

*Think Different PersonalOS v6.1 — Cerebro operativo*