# 04_Operations — Memoria y Procesos

**Versión:** 6.1
**Última actualización:** 2026-04-04
**Estado:** ✅ Activo

---

## 📂 Estructura (Workspace)

```
Think_Different/
├── 00_Winter_is_Coming/    # Goals, Backlog, Memoria (ESTRATÉGICO)
├── 01_Core/               # Motor: Skills, Agents, MCPs, Workflows 💾
├── 02_Knowledge/          # Documentación, Research, Notas 📚
├── 03_Tasks/             # Tareas activas (YAML frontmatter)
├── 04_Operations/        # Memoria y Procesos ✅
├── 05_Archive/           # Legacy archivado
├── 06_Playground/       # Pruebas y experimentos
├── 07_Projects/         # Proyectos activos
├── 08_Scripts_Os/       # Scripts operativos
└── Maerks/             # Tests legacy, planes
```

---

## 📂 Estructura 04_Operations

```
04_Operations/
├── README.md                         # Este archivo
├── EVOLUTION_LOG.md                 # Log de evolución del sistema
├── GOVERNANCE.md                    # Gobernanza
├── RUNBOOK.md                       # Manual de operaciones
├── 01_Auto_Improvement/            # Auto-mejora del sistema
├── 00_Context_Memory/               # Memoria de contexto (sesiones)
│   ├── _jsons/                     # JSONs de validación
│   ├── CTX_AUTO_Intelligence_*.md
│   └── CTX_00*.md
├── 01_Reports/                      # Reportes de estado (01)
├── 02_Knowledge_Brain/             # Base de conocimiento técnico
│   ├── 01_Inventario_Total.md
│   └── 00_Library_PDFs/           # PDFs de referencia
├── 02_Scripts/                      # Scripts de operaciones (02)
├── 03_Process_Notes/               # Notas de sesiones (~21 archivos)
├── 04_Memory_Brain/                 # Mapeos y análisis
│   ├── 00_Active/                 # Memoria activa
│   ├── 01_Mapeos/                 # Mapas del sistema
│   ├── 02_Code_Reviews/           # Revisiones de código
│   └── 03_Archive_Memory/         # Archivo por fecha
├── 05_Plans/                       # Planes
├── 06_Solutions/                   # Soluciones
├── 07_Installer/                    # Instalador
├── 08_Auditorias/                  # Auditorías
├── 09_Agent_Teams_Lite/            # Configuración de orquestadores
├── 10_Reports/                      # Reportes adicionales (10)
└── 11_Scripts/                      # Scripts adicionales (11)
```

---

## 🎯 Propósito

Esta carpeta contiene el **cerebro operativo** del sistema - memoria a largo plazo, notas de sesiones, y mapeos:

| Subcarpeta            | Contenido                            |
| --------------------- | ------------------------------------ |
| `00_Context_Memory/`  | CTX de sesiones, JSONs de validación |
| `02_Knowledge_Brain/` | Research, PDFs, conocimiento técnico |
| `03_Process_Notes/`   | Notas de sesiones (21 archivos)      |
| `04_Memory_Brain/`    | Mapas, code reviews, archivo         |
| `08_Auditorias/`      | Auditorías de sistema y calidad      |
| `09_Agent_Teams_Lite/`| Orquestación y lógica de agentes     |

---

## 📊 Estadísticas

| Área               | Cantidad          |
| ------------------ | ----------------- |
| Context Memories   | ~12 archivos      |
| Notas de Sesión    | 21 archivos       |
| PDFs de Referencia | 14 archivos       |
| Code Reviews       | Varios            |
| Mapeos             | Activos + Archivo |

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

_Think Different PersonalOS v6.1 — Cerebro operativo_
