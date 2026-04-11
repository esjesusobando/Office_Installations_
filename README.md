# Think Different PersonalOS v6.1

[![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-orange)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Version](https://img.shields.io/badge/Version-6.1-green)]()
[![Status](https://img.shields.io/badge/Status-100%25%20--%20Production%20Ready-blue)]()

> 🧠 **Sistema operativo personal potenciador con IA** - Múltiples agentes, skills SOTA, y automatización completa.

---

## 📊 Estado del Sistema (v6.1 - 2026-04-11)

| Métrica            | Valor       |
|:-------------------|:-----------:|
| **Overall Health** | **100%** ✅ |
| **Skills**         |    165+     |
| **Rules**          |     23      |
| **MCPs**           |   29 activos|
| **HUBs**           |     10      |
| **SDD Workflows**  |      9      |

---

## 📁 Estructura del Sistema (Confirmed)

```
Think_Different/
├── 00_Winter_is_Coming/     ✅ Goals, Backlog, AGENTS.md (ESTRATÉGICO)
├── 01_Core/                 ✅ Motor: Skills, Agents, MCPs, Rules 💾
├── 02_Knowledge/            ✅ Base de conocimiento, Docs, Research
├── 03_Tasks/                ✅ Tareas activas (vinc. SDD)
├── 04_Operations/           ✅ Notas, Cerebro, Automejora
├── 05_Archive/              ✅ Repos, Legacy (v6.1: 01-09)
├── 06_Playground/           ✅ Área de pruebas y experimentos
├── 07_Projects/             ✅ Proyectos externos activos
├── 08_Scripts_Os/           ✅ 10 HUBs operativos + 80 scripts
├── Maerks/                  ✅ Tests legacy, reporte de estado
└── .mcp.json                ✅ MCPs activos para Claude Code (29 servidores)
```

- --

## 🚀 Quick Start

```bash
# En tu AI assistant (OpenCode, Claude Code, etc.)

1. Leer AGENTS.md
2. Ejecutar engram_mem_context(limit: 10)
3. ¡Listo para trabajar!
```

- --

## 🛠️ Componentes Principales

### Skills System (160+)

| Categoría                   | Skills  | Propósito                                    |
|:----------------------------|:-------:|:---------------------------------------------|
| **00_Compound_Engineering** |    8    | Compound Engineering                         |
| **00_Personal_Os_Stack**    |  Core   | Stack del OS                                 |
| **00_Skill_Auditor**        | Auditor | Validación de skills                         |
| **01_Agent_Teams_Lite**     |    9    | SDD Workflows                                |
| **02-17**                   |  150+   | Especializadas (PM, Design, SEO, Data, etc.) |

### HUBs (08_Scripts_Os/)

| Hub             | Script                  | Propósito                   |
|:----------------|:------------------------|:----------------------------|
| **Auditor**     | `01_Auditor_Hub.py`     | Auditorías del sistema      |
| **Git**         | `02_Git_Hub.py`         | Operaciones Git             |
| **AIPM**        | `03_AIPM_Hub.py`        | AI Performance Monitoring   |
| **Ritual**      | `04_Ritual_Hub.py`      | Rituales de sesión          |
| **Validator**   | `05_Validator_Hub.py`   | Validación de código        |
| **Tool**        | `06_Tool_Hub.py`        | Gestión de herramientas     |
| **Integration** | `07_Integration_Hub.py` | Integraciones MCP           |
| **Workflow**    | `08_Workflow_Hub.py`    | Automatización de workflows |
| **Data**        | `09_Data_Hub.py`        | Procesamiento de datos      |
| **General**     | `10_General_Hub.py`     | Utilidades generales        |

### Validators

| Tool                       | Ubicación                        | Función                |
|:---------------------------|:---------------------------------|:-----------------------|
| **skill_validator.py**     | `08_Scripts_Os/03_Validator/` | Valida estructura SOTA |
| **skill_security_scan.py** | `08_Scripts_Os/03_Validator/` | Escaneo de seguridad   |

### MCPs (29 activos)

| Categoría         | Servidores                                                             |
|:------------------|:-----------------------------------------------------------------------|
| 🔍 Search          | exa, brave-search*, stackoverflow                                      |
| 🧠 Memory          | engram, aim-memory-bank, notebooklm                                    |
| 📝 Notes           | mcp-obsidian, obsidian-api, Notion                                     |
| 🌐 Browser         | Playwright, chrome-devtools, eagle-mcp                                 |
| 🤖 AI & Code       | context7, zai-mcp-server, github, task-master-ai, @magicuidesign/mcp  |
| 📊 Data            | supabase, supadata, sqlite*, postgres*                                 |
| 🔄 Workflow        | n8n-mcp, Linear, atlassian*, jira-extended*                            |
| 💬 Communication   | fireflies, slack*, google-workspace                                    |
| 📐 Design          | excalidraw-yctimlin, pencil                                            |
| 🛠️ DevOps         | docker, sentry*, filesystem                                            |
| 🚀 Deploy          | vercel, TestSprite                                                     |

> `*` = requiere credenciales reales. Presentes como templates en `01_Core/05_Mcp/01_Claude_Code/mcp.json`.

**Configs activas:**
- Claude Code → `.mcp.json` (raíz del proyecto)
- OpenCode → `~/.config/opencode/opencode.json`

- --

## 📋 Comandos SDD

Usa los comandos SDD para trabajo estructurado:

```
/sdd-init           # Inicializar contexto SDD

/sdd-explore        # Explorar tema

/sdd-propose        # Crear propuesta

/sdd-spec           # Especificación

/sdd-design         # Diseño técnico

/sdd-tasks          # Descomponer tareas

/sdd-apply          # Implementar

/sdd-verify         # Verificar

/sdd-archive        # Archivar

```

- --

## 🔧 Comandos CE (Compound Engineering)

```
/ce:ideate          # Generar ideas

/brainstorm         # Lluvia de ideas

/ce:plan            # Crear plan

/ce:work            # Ejecutar trabajo

/ce:review          # Revisar

/ce:compound        # Documentar conocimiento

```

- --

## ⚙️ GGA — Guardian Angel

Code review automático integrado:

```bash
.agent/05_GGA/bin/gga run      # Revisar archivos staged

.agent/05_GGA/bin/gga install  # Instalar pre-commit hook

```

### Reglas GGA

- TypeScript: `const`/`let` solo, no `var`
- React: Componentes funcionales, named exports

- --

## 📁 Convenciones de Nombres

| Tipo            | Patrón                | Ejemplo                      |
|:----------------|:----------------------|:-----------------------------|
| **Directorios** | `XX_Nombre/`          | `01_Core/`, `04_Operations/` |
| **Archivos**    | `XX_Nombre.ext`       | `01_Report_Status.md`        |
| **Scripts**     | `##_Nombre_Script.py` | `01_Auditor_Hub.py`          |
| **Skills**      | `SKILL.md`            | En cada skill                |

- --

## 📚 Documentación

| Documento                | Ubicación                                           |
|:-------------------------|:----------------------------------------------------|
| **AGENTS.md**            | `00_Winter_is_Coming/AGENTS.md`                     |
| **RULES_INDEX**          | `01_Core/01_Rules/RULES_INDEX.md`                   |
| **Skills README**        | `01_Core/03_Skills/README.md`                       |
| **Scripts INDEX**        | `08_Scripts_Os/SCRIPTS_INDEX.md`                    |
| **OS Integration Audit** | `02_Knowledge/04_Docs/OS_Integration_Audit_v6.1.md` |
| **Edge Cases**           | `02_Knowledge/04_Docs/OS_Edge_Cases_Analysis.md`    |

- --

## 🎯 Workflow Diario

1. **Inicio de sesión**: `engram_mem_context()` + leer GOALS.md
2. **Trabajo**: Usar SDD commands para tareas complejas
3. **Cierre**: `engram_mem_session_summary()`

- --

## 📄 Licencia

CC BY-NC-SA 4.0 - Uso no comercial permitido.

- --

* Think Different PersonalOS v6.1 — Production Ready ✅*
