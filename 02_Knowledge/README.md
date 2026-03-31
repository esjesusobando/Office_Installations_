# 02_Knowledge — Base de Conocimiento

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
├── 03_Tasks/             # Tareas activas (YAML frontmatter)
├── 04_Operations/        # Operaciones: Memory, Brain, Notes
├── 05_Archive/           # Legacy archivado
├── 06_Playground/       # Pruebas y experimentos
├── 07_Projects/         # Proyectos activos
├── 08_Scripts_Os/       # Scripts operativos
└── Maerks/             # Tests legacy, planes
```

---

## 📂 Estructura 02_Knowledge

```
02_Knowledge/
├── README.md                         # Este archivo
├── .gitkeep                         # Preserva la carpeta en git
├── 00_Examples_Personal_Os/       # Ejemplos del PersonalOS
│   ├── Example_Files/
│   │   ├── 01_BACKLOG_Example.md
│   │   ├── 02_Example_Knowledge.md
│   │   └── 03_Example_Task.md
│   ├── Tutorials/
│   │   ├── 01_Build_Your_Personal_Os.md
│   │   ├── 02_Markdown_and_Structure.md
│   │   ├── 03_Mcp_Server_Implementation.md
│   │   ├── 04_Memory.md
│   │   ├── 05_Session_Evals.md
│   │   ├── 06_Subagents.md
│   │   ├── 07_Tool_Calling.md
│   │   └── 08_Voice_Training.md
│   └── Workflows/
│       ├── 01_Backlog_Processing.md
│       ├── 02_Morning_Standup.md
│       ├── 03_Content_Generation.md
│       └── 04_Weekly_Review.md
├── 01_Research_Os/                 # Investigación del OS
│   ├── Skills_TOP_Rankings.md
│   └── Claude_AI_Announcements_2026.md
├── 02_Perfiles_Team/              # Perfiles del equipo
├── 03_Writing_Content/            # Contenido escrito
│   ├── 00_Zinking_Tone.md
│   ├── 01_Reflexiones_Insights_Diseno.md
│   └── 02_El_Diseno_Invisible.md
├── 04_Docs/                       # Documentos varios
│   ├── README.md                     # Índice de documentación
│   ├── OS_Integration_Audit_v6.1.md  # Auditoría del OS (94%)
│   ├── 99_ATL/                        # SDD Registry
│   │   └── skill-registry.md
│   └── Skill_Creator_v2_Analysis.md  # Análisis de skill creator
```

---

## 🎯 Propósito

Almacena **documentación de referencia, investigación, specs, notas de reuniones** y cualquier información persistente que las tareas necesiten.

> ⚠️ **Esta carpeta está gitignored** — Tus notas bleiben privadas y locales.

---

## 📚 Contenido

| Tipo | Ejemplos |
|------|----------|
| Specs & briefs | Requisitos de proyecto, specs de features |
| Meeting notes | Decisiones, action items, asistentes |
| Research | Análisis de mercado, hallazgos técnicos |
| Process docs | How-tos, checklists, runbooks |
| References | Links, contactos, credenciales (encriptadas) |

---

## 🔗 Vinculación desde Tareas

Referenciar documentos en tus archivos de tareas:

```yaml
resource_refs:
  - 02_Knowledge/project-spec.md
  - 02_Knowledge/meeting-notes-2026-03-27.md
```

---

## 📚 Recursos

- [Tutorials](./00_Examples_Personal_Os/Tutorials/README.md) — Guías paso a paso
- [Workflows](./00_Examples_Personal_Os/Workflows/README.md) — Flujos de trabajo
- [Example Files](./00_Examples_Personal_Os/Example_Files/) — Archivos de ejemplo

---

*Think Different PersonalOS v6.1 — Conocimiento activo*
