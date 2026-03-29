# 01_Core — Think Different PersonalOS

**Versión:** 6.1
**Última actualización:** 2026-03-29
**Estado:** ✅ Activo | 💾 FUENTE DE VERDAD

---

## 📂 Estructura v6.1

```
01_Core/
├── README.md                    # Este archivo
├── 00_Comandos_Workflows.md    # Comandos y workflows disponibles
├── 01_Inventario_Total.md      # Inventario completo del OS
├── 02_Dream_Team.md           # Equipo de agentes
├── Requirements.txt             # Dependencias Python
├── 00_Workflows/              # 26+ workflows
├── 01_Rules/                    # 22+ reglas del sistema
├── 02_Evals/                    # Métricas y evaluaciones
├── 03_Skills/                   # 18 carpetas de skills (FUENTE DE VERDAD)
├── 04_Agents/                   # Agentes configurados
├── 05_Mcp/                     # 20+ MCPs configurados
├── 06_Integrations/            # Integraciones externas
├── 07_Hooks/                   # Hooks del sistema
├── 08_Plugins/                # Plugins
├── 09_Server/                  # Servidor backend
└── 10_Templates/               # Plantillas
```

---

## 🛠️ Herramientas Creadas (2026-03-29)

| Herramienta | Ubicación | Función |
|-------------|-----------|---------|
| **Tool Shed** | `08_Scripts_Os/Tool_Fixed/62_Tool_Shed.py` | Auto-detecta contexto y sugiere MCPs |
| **Skill Harmonizer** | `08_Scripts_Os/Tool_Fixed/63_Skill_Harmonizer.py` | Valida paridad de skills (20/20) |
| **Notifier** | `08_Scripts_Os/Tool_Fixed/00_Notifier.py` | Sonido al completar tareas |

### Scripts Reparados (Ritual_Fixed)
- 08, 11, 12, 13, 16, 17, 19, 50, 57 — todos funcionando ✅

---

## 🎯 Componentes Principales

### Agentes Configurados (18 total)

| Agente | Tipo | Propósito |
|--------|------|-----------|
| `gentleman` | Primary | Mentor Senior Architect |
| `dangerous-gentleman` | All | Permisos completos |
| `sdd-orchestrator` | All | SDD orchestrator |
| `sdd-init` | Subagent | Bootstrap SDD |
| `sdd-explore` | Subagent | Explorar código |
| `sdd-propose` | Subagent | Crear propuestas |
| `sdd-spec` | Subagent | Escribir specs |
| `sdd-design` | Subagent | Diseño técnico |
| `sdd-tasks` | Subagent | Descomponer tareas |
| `sdd-apply` | Subagent | Implementar |
| `sdd-verify` | Subagent | Verificar |
| `sdd-archive` | Subagent | Archivar |
| `ce-work` | Subagent | CE: Ejecutar planes |
| `ce-review` | Subagent | CE: Code review |
| `ce-plan` | Subagent | CE: Planificar |
| `ce-ideate` | Subagent | CE: Idear |
| `ce-brainstorm` | Subagent | CE: Brainstorming |

### Especialistas (26 en 02_Specialists_Compound)

Code review, arquitectura, seguridad, performance, etc.

### Skills (18 carpetas)

| Carpeta | Cantidad | Estado |
|---------|----------|--------|
| 00_Compound_Engineering | 8+ | ✅ |
| 00_Personal_Os_Stack | - | ✅ |
| 00_Skill_Auditor | 3+ | ✅ |
| 01_Agent_Teams_Lite | 11+ | ✅ |
| 02_Project_Manager | 9+ | ✅ |
| 03_Product_Manager | 9+ | ✅ |
| 04_Product_Design | 13+ | ✅ |
| 05_Vibe_Coding | 18+ | ✅ |
| 06_Testing | 18+ | ✅ |
| 07_DevOps | 13+ | ✅ |
| 08_Personal_Os | 9+ | ✅ |
| 09_Marketing | 11+ | ✅ |
| 10_Backup | 5+ | 📦 |
| 11_Doc_Processing | 4+ | ✅ |
| 12_N8N | 7+ | ✅ |
| 13_System_Master | 5+ | ✅ |
| 14_Anthropic_Harness | 9+ | ✅ |
| 15_Skill_Creator_Oficial | - | ✅ |
| 16_Silicon_Valley_Data_Analyst | - | ✅ |
| 17_SEO_SOTA_Master | - | ✅ |

### Workflows (26+ archivos)

Iron Man Gen, Spider Brainstorm, Professor X Plan, Thor Work, Hulk Compound, Morning Standup, Weekly Review, Backlog Processing, Content Generation, etc.

---

## 🔧 Configuración

### OpenCode

```bash
# Ubicación del config
01_Core/05_Mcp/opencode.json
```

### Ejecución MCP Server

```bash
# Servidor principal
python 01_Core/05_Mcp/server.py

# Servidor alternativo
python 01_Core/09_Server/mcp/Server.py
```

---

## 📚 Documentación

- [Rules Index](./01_Rules/RULES_INDEX.md) — 22 reglas del sistema
- [Dream Team](./02_Dream_Team.md) — Equipo de agentes
- [Comandos y Workflows](./00_Comandos_Workflows.md) — Scripts y herramientas
- [Agents README](./04_Agents/README.md) — Todos los agentes
- [Integrations README](./06_Integrations/README.md) — Integraciones
- [Workflows README](./00_Workflows/README.md) — 26+ workflows

---

## 🔄 Actualización Reciente (2026-03-29)

- ✅ Sincronizado .agent/ con 01_Core/ (backup estratégico)
- ✅ Tool Shed creado (auto-detecta contexto)
- ✅ Skill Harmonizer creado (valida 20/20 categorías)
- ✅ Notifier creado (sonido al completar tareas)
- ✅ 9 scripts reparados en Ritual_Fixed
- ✅ 9+ skills nuevos en 08_Personal_Os
- ✅ 3 SKILL.md faltantes agregados

---

## 💾 .agent — BACKUP ESTRATÉGICO

> **.agent/** es el backup de 01_Core/. La fuente de verdad es **01_Core/**.

| Contenido | Sincronizado desde |
|-----------|-------------------|
| `.agent/00_Rules/` | `01_Core/01_Rules/` |
| `.agent/01_Agents/` | `01_Core/04_Agents/` |
| `.agent/02_Skills/` | `01_Core/03_Skills/` |
| `.agent/03_Workflows/` | `01_Core/00_Workflows/` |

**Última sincronización:** 2026-03-29

---

*Think Different PersonalOS v6.1 — Conectado y operando*
