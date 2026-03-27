# 01_Core — Think Different PersonalOS

**Versión:** 6.1  
**Última actualización:** 2026-03-27  
**Estado:** ✅ Activo

---

## 📂 Estructura

```
01_Core/
├── README.md                    # Este archivo
├── AGENTS.md                    # Instrucciones del agente principal
├── CLAUDE.md                    # Configuración Claude Code
├── Requirements.txt             # Dependencias Python
├── 01_Rules/                    # Reglas del sistema (22 archivos .mdc)
├── 02_Evals/                    # Evaluaciones de sesiones
├── 03_Agents/                   # Agentes especializados
│   ├── 01_Dream_Team/          # Agentes del Dream Team (5)
│   └── 02_Specialists_Compound/ # Especialistas Code Review (26)
├── 04_Integrations/            # Integraciones externas
│   └── 02_Granola/             # Integración Granola
├── 05_Mcp/                     # Configuración MCP
│   ├── opencode.json           # Config OpenCode (18 agentes)
│   ├── mcp.json                # MCP servers legacy
│   ├── settings.local.json     # Settings locales
│   ├── server.py               # Servidor MCP
│   └── 00_Config_Mcp/          # Documentación MCPs
├── templates/                   # Plantillas
└── 09_Server/                   # Servidor backend
    ├── Engram/                  # Skills de Engram
    ├── mcp/                     # Server MCP
    ├── requirements.txt         # Dependencias
    └── templates/               # Templates
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

### MCPs Activos (27 servers)

| Categoría | MCPs |
|-----------|------|
| 🧠 Memoria | engram, aim-memory-bank, notebooklm |
| 🔍 Búsqueda | context7, exa |
| 📝 Notas | Notion, mcp-obsidian, obsidian-api |
| 🌐 Browser | Playwright |
| 🤖 AI & Código | github, task-master-ai, zai-mcp-server |
| 📊 Datos | supabase, Amplitude, supadata |
| 🔄 Workflow | n8n-mcp, Linear |
| 📐 Diseño | excalidraw-yctimlin, pencil |
| 🎯 Productivity | fireflies, Linear |
| 🛠️ Varios | filesystem, eagle-mcp, TestSprite |

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

---

## 🔄 Actualización Reciente (2026-03-27)

- ✅ Integrados 8 agentes SDD (sdd-init a sdd-archive)
- ✅ Integrados 5 agentes CE (ce-work, ce-review, ce-plan, ce-ideate, ce-brainstorm)
- ✅ Total: 18 agentes activos en opencode.json

---

*Think Different PersonalOS v6.1 — Conectado y operando*
