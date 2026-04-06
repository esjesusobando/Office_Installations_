# 03_Tasks — Sistema de Tareas

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
│   ├── README.md
│   ├── 00_Task_Template_Skeleton.md
│   ├── 01_ai_task_template.md
│   ├── 02_Process_Note_Template.md
│   ├── 03_Task_Template_SOTA.md
│   ├── 04_Task_Template_Medio.md
│   ├── 05_Task_Template_Corto.md
│   └── Examples/
├── 01_Tasks_Done/                 # Historial de tareas completadas
├── 02_Hillary_Inbox/               # Buzon de entrada de tareas generadas
├── 02-10_Consolidated_Tasks.md   # Tareas consolidadas
├── 00_P0_*.md                       # Tareas prioridad 0
├── 03-10_P1_*.md                    # Tareas prioridad 1
└── P2_*/                            # Tareas P2 varias
```

---

## 🎯 Sistema de Prioridades

| Prioridad  | Significado   | Límite   |
|------------|---------------|----------|
| **P0**     | Hacer hoy     | max 3    |
| **P1**     | Esta semana   | max 7    |
| **P2**     | Programado    |----------|
| **P3**     | Algún día     |----------|

### Estados de Tarea

| Estado   | Significado   |
|----------|---------------|
| `n`      | not started   |
| `s`      | started       |
| `b`      | blocked       |
| `d`      | done          |

### Categorías

| Categoría   | Descripción                    |
|-------------|--------------------------------|
| `technical` | build, fix, configure          |
| `outreach`  | communicate, meet              |
| `research`  | learn, analyze                 |
| `writing`   | draft, document                |
| `admin`     | operations, finance, logistics |
| `personal`  | health, routines               |
| `other`     | everything else                |

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
