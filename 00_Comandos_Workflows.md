# PersonalOS v6.1 - Comandos y Workflows

## 📋 Comandos Disponibles

### Backlog Triage (pb / eb)
| Comando | Alias | Descripción |
|--------|-------|-------------|
| `python 08_Scripts_Os/Ritual_Fixed/09_Backlog_Triage.py` | **pb** | Preview - ver tareas sin crear |
| `python 08_Scripts_Os/Ritual_Fixed/09_Backlog_Triage.py --execute` | **eb** | Execute - crear tareas y limpiar backlog |

### Morning Standup
| Comando | Alias | Descripción |
|--------|-------|-------------|
| `python 08_Scripts_Os/Ritual_Fixed/14_Morning_Standup.py` | - | Full standup |
| `python 08_Scripts_Os/Ritual_Fixed/14_Morning_Standup.py --tasks` | - | Solo tareas |
| `python 08_Scripts_Os/Ritual_Fixed/14_Morning_Standup.py --goals` | - | Solo goals |

### Weekly Review
| Comando | Alias | Descripción |
|--------|-------|-------------|
| `python 08_Scripts_Os/Ritual_Fixed/15_Weekly_Review.py` | - | Full review (4 pasos) |
| `python 08_Scripts_Os/Ritual_Fixed/15_Weekly_Review.py --quick` | - | Quick (5 min) |
| `python 08_Scripts_Os/Ritual_Fixed/15_Weekly_Review.py --step 1` | - | Completed |
| `python 08_Scripts_Os/Ritual_Fixed/15_Weekly_Review.py --step 2` | - | Goals |
| `python 08_Scripts_Os/Ritual_Fixed/15_Weekly_Review.py --step 3` | - | Blockers |
| `python 08_Scripts_Os/Ritual_Fixed/15_Weekly_Review.py --step 4` | - | Plan next |

### Content Generation (✍️)
| Comando | Alias | Descripción |
|--------|-------|-------------|
| `python 08_Scripts_Os/Ritual_Fixed/18_Generacion_Contenido.py` | - | Modo interactivo |
| `python 08_Scripts_Os/Ritual_Fixed/18_Generacion_Contenido.py --blog --topic "X"` | - | Blog post |
| `python 08_Scripts_Os/Ritual_Fixed/18_Generacion_Contenido.py --linkedin --topic "X"` | - | LinkedIn |
| `python 08_Scripts_Os/Ritual_Fixed/18_Generacion_Contenido.py --email --topic "X"` | - | Email |
| `python 08_Scripts_Os/Ritual_Fixed/18_Generacion_Contenido.py --twitter --topic "X"` | - | Twitter thread |

---

## 📖 Origen / Referencia

Basado en: `05_Archive/10_Repos_Gentleman/personal-os-main/examples/workflows/`

| Workflow Original | Script Actual |
|------------------|---------------|
| morning-standup.md | 14_Morning_Standup.py |
| weekly-review.md | 15_Weekly_Review.py |
| backlog-processing.md | 09_Backlog_Triage.py |
| content-generation.md | 18_Generacion_Contenido.py | ✅ Actualizado |

---

## 🔧 Aliases (agregados a ~/.bashrc)

```bash
alias pb="python 08_Scripts_Os/Ritual_Fixed/09_Backlog_Triage.py"
alias eb="python 08_Scripts_Os/Ritual_Fixed/09_Backlog_Triage.py --execute"
```

---

## ✅ Estado de Documentación

| Repo Original | Script Actual | Estado |
|--------------|---------------|--------|
| morning-standup.md | 14_Morning_Standup.py | ✅ Actualizado |
| weekly-review.md | 15_Weekly_Review.py | ✅ Actualizado |
| backlog-processing.md | 09_Backlog_Triage.py | ✅ Actualizado |
| content-generation.md | 18_Generacion_Contenido.py | ✅ Actualizado |

### Scripts en Ritual_Fixed/:
- 08_Ritual_Cierre.py
- 09_Backlog_Triage.py ✅
- 11_Sync_Notes.py
- 12_Update_Links.py
- 13_Validate_Stack.py
- 14_Morning_Standup.py ✅
- 15_Weekly_Review.py ✅
- 16_Clean_System.py
- 17_Ritual_Dominical.py
- 19_Generate_Progress.py
- 50_System_Health_Monitor.py
- 57_Repo_Sync_Auditor.py

---

*Generado: 2026-03-29*
