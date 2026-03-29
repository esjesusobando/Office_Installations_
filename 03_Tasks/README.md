# 03_Tasks — Sistema de Tareas

**Versión:** 6.1
**Última actualización:** 2026-03-29
**Estado:** ✅ Activo

---

## 📂 Estructura (Workspace)

```
Think_Different/
├── 00_Winter_is_Coming/    # Goals, Backlog, Memoria (ESTRATÉGICO)
├── 01_Core/               # Motor: Skills, Agents, MCPs, Workflows 💾
├── 02_Knowledge/          # Documentación, Research, Notas 📚
├── 03_Tasks/             # Tareas activas (YAML frontmatter) ✅
├── 04_Operations/        # Operaciones: Memory, Brain, Notes
├── 05_Archive/           # Legacy archivado
├── 06_Playground/       # Pruebas y experimentos
├── 07_Projects/         # Proyectos activos
├── 08_Scripts_Os/       # Scripts operativos
└── Maerks/             # Tests legacy, planes
```

---

## 📂 Estructura 03_Tasks

```
03_Tasks/
├── README.md                         # Este archivo
├── .gitkeep                         # Preserva la carpeta en git
├── 00_Templates/                   # Plantillas de tareas
│   ├── 00_Task_Template_Skeleton.md
│   ├── 01_ai_task_template.md
│   ├── 02_Process_Note_Template.md
│   ├── 03_Task_Template_SOTA.md
│   ├── 04_Task_Template_Medio.md
│   ├── 05_Task_Template_Corto.md
│   └── Examples/
│       ├── TASK_SOTA_EJEMPLO.md
│       ├── TASK_MEDIO_EJEMPLO.md
│       ├── TASK_CORTO_EJEMPLO.md
│       └── TASK_CLASSIFIER_EXAMPLES/
├── 00_P0_Audience_Growth.md
├── 00_P0_System_Guardian_Testing_2026-03-20.md
├── 00_TEST_Content_Generation_Draft.md
├── 01_Tasks_Done/                 # Tareas completadas
├── 02-10_Consolidated_Tasks.md   # Tareas consolidadas
├── 03_P1_Verificar_MCPs.md
├── 04_P1_Actualizar_Documentacion_Sistema.md
├── 05_P1_Actualizar_Estructura_Carpetas.md
├── 06_P1_Validar_Numeracion_Sistema.md
├── 07_P1_Validar_Plugin_Marketplace.md
├── 08_P1_Validar_Installer_PersonalOS.md
├── 09_P1_Unificar_AGENTS_Fuente_Verdad.md
├── 10_P1_Documentar_Sistema_OS_Completo.md
└── P2_*/                         # Tareas P2 varias
```
03_Tasks/
├── README.md                    # Este archivo
├── .gitkeep                     # Preserva la carpeta en git
├── 00_Templates/                # Plantillas de tareas
│   ├── README.md
│   ├── 00_Task_Template_Skeleton.md
│   ├── 01_ai_task_template.md
│   ├── 02_Process_Note_Template.md
│   ├── 03_Task_Template_SOTA.md
│   ├── 04_Task_Template_Medio.md
│   ├── 05_Task_Template_Corto.md
│   └── Examples/
│       ├── TASK_SOTA_EJEMPLO.md
│       ├── TASK_MEDIO_EJEMPLO.md
│       ├── TASK_CORTO_EJEMPLO.md
│       └── TASK_CLASSIFIER_EXAMPLES/
├── 00_P0_System_Guardian_Testing_2026-03-20.md
├── 00_P0_Audience_Growth.md
├── 01_P0_Completar_Setup_PersonalOS.md
├── 02_P1_Crear_Primera_Tarea_Real.md
├── 03_P1_Revisar_Goals_Q2_2026.md
├── 04_P2_Investigar_Tendencias_AI_Agents.md
├── 05_P2_Escribir_Memo_Estrategia.md
├── 06_P1_Probar_Morning_Standup.md
├── 07_P1_Probar_Backlog_Processing.md
├── 08_P2_Probar_Content_Generation.md
├── 09_P2_Probar_Weekly_Review.md
├── 10_P1_Verificar_MCPs.md
└── 11_TEST_Content_Generation_Draft.md
```

---

## 🎯 Sistema de Prioridades

| Prioridad | Significado | Límite |
|----------|-------------|--------|
| **P0** | Hacer hoy | max 3 |
| **P1** | Esta semana | max 7 |
| **P2** | Programado | - |
| **P3** | Algún día | - |

### Estados de Tarea

| Estado | Significado |
|--------|-------------|
| `n` | not started |
| `s` | started |
| `b` | blocked |
| `d` | done |

### Categorías

| Categoría | Descripción |
|-----------|-------------|
| `technical` | build, fix, configure |
| `outreach` | communicate, meet |
| `research` | learn, analyze |
| `writing` | draft, document |
| `admin` | operations, finance, logistics |
| `personal` | health, routines |
| `other` | everything else |

---

## 📝 Formato de Tarea

```yaml
---
title: [Nombre de tarea accionable]
category: [technical|outreach|research|writing|admin|personal|other]
priority: [P0|P1|P2|P3]
status: [n|s|b|d]

created_date: [YYYY-MM-DD]
due_date: [YYYY-MM-DD]  # opcional
estimated_time: [minutos]  # opcional

resource_refs:
  - 02_Knowledge/example.md
---

# [Nombre de tarea]

## Context

Vincular con goals y referenciar material.

## Next Actions

- [ ] Paso uno
- [ ] Paso dos

## Progress Log

- YYYY-MM-DD: Notas, bloqueos, decisiones.
```

---

## 🔄 Flujo de Trabajo

```
1. Agregar notas a BACKLOG.md (00_Winter_is_Coming/)
2. Decir "process my backlog" al AI
3. AI crea tareas en 03_Tasks/
4. Tareas se vinculan con GOALS.md
5. AI sugiere qué trabajar según prioridades
```

---

## 📚 Recursos

- [Templates](./00_Templates/README.md) — Plantillas disponibles
- [Ejemplos](./00_Templates/Examples/) — Ejemplos de tareas

---

> ⚠️ **Esta carpeta está gitignored** — Tus tareas bleiben privadas y locales.

---

*Think Different PersonalOS v6.1 — Tareas activas*
