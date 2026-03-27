# 01_Core — Think Different PersonalOS

**Versión:** 6.1  
**Última actualización:** 2026-03-27  
**Estado:** ✅ Activo

---

## 📂 Estructura

```
01_Core/
├── README.md                    # Este archivo
├── Requirements.txt             # Dependencias Python
├── templates/                   # Plantillas
│   ├── AGENTS.md
│   ├── config.yaml
│   └── gitignore
├── 00_Workflows/              # Workflows (23 archivos)
│   ├── README.md
│   ├── 01_Iron_Man_Gen.md
│   ├── 02_Professor_X_Plan.md
│   ├── 03_Vision_Review.md
│   ├── 04_Thor_Work.md
│   ├── 05_Hulk_Compound.md
│   ├── 06_AntMan_Lfg_Lite.md
│   ├── 07_Doc_Strange_Lfg.md
│   ├── 08_Validar_Reglas.md
│   ├── 09_Frontend_Premium.md
│   ├── 10_AI_Task_Template.md
│   ├── 11_Ritual_Cierre_Protocol.md
│   ├── 12_Context_Recovery.md
│   ├── 13_System_Health_Audit.md
│   ├── 14_Captura_Rapida.md
│   ├── 15_Deep_Work_Session.md
│   ├── 16_Ship_It.md
│   ├── 17_Anthropic_Harness.md
│   ├── 18_Multi_Agent_Roles.md
│   ├── 19_Redaccion_de_Docs.md
│   ├── 20_Backlog_Processing.md
│   ├── 21_Content_Generation.md
│   ├── 22_Morning_Standup.md
│   ├── 23_Weekly_Review.md
│   └── classify_task.md
├── 01_Rules/                    # Reglas del sistema (22+ archivos .mdc)
│   ├── README.md
│   ├── RULES_INDEX.md
│   └── [22 archivos .mdc]
├── 02_Evals/                    # Evaluaciones de sesiones
│   ├── README.md
│   └── 01_EV_Claude_Opus_03_26.md
├── 03_Agents/                   # Agentes especializados
│   ├── README.md
│   ├── __Agent_Template.md
│   ├── 00_Orchestrator.md
│   ├── 01_Scope_Rule_Architect.md
│   ├── 02_TDD_Test_First.md
│   ├── 03_React_Test_Implementer.md
│   ├── 04_React_Mentor.md
│   ├── 05_Security_Auditor.md
│   ├── 06_Git_Workflow_Manager.md
│   ├── 07_Accessibility_Auditor.md
│   ├── 08_PRD_Dashboard_Template.md
│   ├── 09_Design_SOP_Document.md
│   ├── 10_Workflow_Orchestrator.md
│   ├── 11_AIPM_Judge.md
│   ├── 12_LFG_Autonomous_Engine.md
│   ├── 01_Dream_Team/
│   │   ├── 01_Product_Builder.md
│   │   ├── 02_Data_Engineer.md
│   │   ├── 03_Marketing_Tech.md
│   │   ├── 04_Design_Ops.md
│   │   └── 05_Platform_Engineer.md
│   └── 02_Specialists_Compound/
│       ├── Agent-Native-Reviewer.md
│       ├── Ankane-Readme-Writer.md
│       ├── Architecture-Strategist.md
│       ├── Best-Practices-Researcher.md
│       ├── Code-Simplicity-Reviewer.md
│       ├── Data-Integrity-Guardian.md
│       ├── Data-Migration-Expert.md
│       ├── Deployment-Verification-Agent.md
│       ├── Design-Implementation-Reviewer.md
│       ├── Design-Iterator.md
│       ├── Dhh-Rails-Reviewer.md
│       ├── Figma-Design-Sync.md
│       ├── Framework-Docs-Researcher.md
│       ├── Git-History-Analyzer.md
│       ├── Julik-Frontend-Races-Reviewer.md
│       ├── Kieran-Python-Reviewer.md
│       ├── Kieran-Rails-Reviewer.md
│       ├── Kieran-Typescript-Reviewer.md
│       ├── Learnings-Researcher.md
│       ├── Pattern-Recognition-Specialist.md
│       ├── Performance-Oracle.md
│       ├── Repo-research-Analyst.md
│       └── Security-Sentinel.md
├── 03_Skills/                   # Skills locales
│   ├── README.md
│   └── 14_Anthropic_Harness/
│       ├── README.md
│       ├── 03_Sprint_Contract/
│       ├── 04_Auto_Mode_Security/
│       ├── 05_Pass_At_Metrics/
│       ├── 06_Eval_Awareness/
│       ├── 07_Feature_List_JSON/
│       └── 08_Graders_Framework/
├── 04_Integrations/            # Integraciones externas
│   ├── README.md
│   └── 02_Granola/
│       └── skills/meeting-sync/
├── 05_Mcp/                     # Configuración MCP
│   ├── README.md
│   ├── opencode.json           # Config OpenCode (18 agentes)
│   ├── mcp.json                # MCP servers legacy
│   ├── settings.local.json     # Settings locales
│   ├── skills-lock.json
│   ├── server.py               # Servidor MCP
│   └── 00_Config_Mcp/          # Documentación MCPs
│       ├── README.md
│       ├── tree.txt
│       └── mcp-tools/
│           ├── 01_core/       # context7, engram, github
│           ├── 02_knowledge/  # obsidian, notion, aim-memory
│           ├── 03_development/  # playwright, docker, chrome-devtools
│           ├── 04_research/    # firecrawl, exa
│           ├── 05_visual/      # excalidraw
│           └── 06_productivity/ # linear, fireflies
├── 06_Commands/                # Comandos CLI
├── 07_Hooks/                   # Hooks del sistema
├── 08_Plugings/               # Plugins
└── 09_Server/                   # Servidor backend
    ├── README.md
    ├── requirements.txt
    ├── Engram/                # Skills de Engram
    ├── mcp/
    │   └── Server.py
    └── templates/
        ├── AGENTS.md
        ├── config.yaml
        └── gitignore
```

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

### Workflows (23 archivos)

Iron Man Gen, Morning Standup, Backlog Processing, Content Generation, etc.

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
- [Agents README](./03_Agents/README.md) — Todos los agentes
- [Integrations README](./04_Integrations/README.md) — Integraciones
- [Workflows README](./00_Workflows/README.md) — 23 workflows

---

## 🔄 Actualización Reciente (2026-03-27)

- ✅ Integrados 8 agentes SDD (sdd-init a sdd-archive)
- ✅ Integrados 5 agentes CE (ce-work, ce-review, ce-plan, ce-ideate, ce-brainstorm)
- ✅ Total: 18 agentes activos en opencode.json
- ✅ README.md actualizado con estructura completa

---

*Think Different PersonalOS v6.1 — Conectado y operando*
