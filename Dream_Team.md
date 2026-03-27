# 🏆 Dream Team — Arquitectura del Sistema PersonalOS

> **La analogía completa del equipo que ejecuta todo**

---

## 🎯 ESTRUCTURA DEL EQUIPO

```
┌─────────────────────────────────────────────────────────────────┐
│                     🎯 WINTER IS COMING (El Bar)               │
│                     Goals, Backlog, Memoria                     │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                     📋 WORKFLOWS (El Director)                  │
│                     26 workflows que orchestratan todo          │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                     🤖 AGENTS (El Dream Team)                   │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│  │Product Build│ │ Data Eng    │ │ Marketing   │ ...            │
│  └─────────────┘ └─────────────┘ └─────────────┘                │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                 🛠️ KIT DE HERRAMIENTAS                          │
│  Skills (160+) │ MCPs (27) │ Commands │ Hooks (6) │ Rules (22)  │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                     📊 EVALS (Evaluaciones)                     │
│                     Métricas del equipo                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎭 ROLES DEL EQUIPO

### 📋 El Director — Workflows
Orquestan las jugadas. Definen el flujo de trabajo completo.

| Workflow | Función |
|----------|---------|
| Iron Man Gen | Generación de código |
| Spider Brainstorm | Lluvia de ideas |
| Professor X Plan | Planificación estratégica |
| Vision Review | Revisión de calidad |
| Thor Work | Ejecución de tareas |
| Hulk Compound | Documentación de learnings |

### 🤖 Los Jugadores — Dream Team (Agents)

| Jugador | Posición | Kit de Skills Principal |
|---------|----------|------------------------|
| **Product Builder** | Delantero | PRD, Planning, React, TypeScript |
| **Data_Engineer** | Centrocampista | Python, Supabase, CSV, Analytics |
| **Marketing_Tech** | Extremo | Marketing, SEO, Firecrawl |
| **Design_Ops** | Lateral | Diseño, Vercel, Playwright |
| **Platform_Engineer** | Portero | DevOps, System Master, MCP Client |

### 🛠️ El Kit — Skills, MCPs, Commands, Hooks, Rules

| Herramienta | Cantidad | Función |
|-------------|----------|---------|
| **Skills** | 160+ | Patrones y workflows específicos |
| **MCPs** | 27 | Herramientas externas (GitHub, Supabase, etc.) |
| **Commands** | - | Comandos slash (/sdd, /ce, etc.) |
| **Hooks** | 6 | Puntos de ejecución automática |
| **Rules** | 22 | Reglas del juego (qué hacer/no hacer) |

### 📊 El Árbitro — Evals
Evalúa el rendimiento del equipo. Mide calidad y eficiencia.

---

## 🔄 FLUJO DE TRABAJO

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   USUARIO   │────▶│  WORKFLOW   │────▶│    AGENT    │
│  (Entrena)  │     │ (Director)  │     │ (Jugador)   │
└─────────────┘     └─────────────┘     └─────────────┘
                           │                    │
                           ▼                    ▼
                    ┌─────────────┐     ┌─────────────┐
                    │   RULES     │     │    SKILLS   │
                    │ (Reglas)    │     │ (Kit)       │
                    └─────────────┘     └─────────────┘
                                            │
                                            ▼
                                     ┌─────────────┐
                                     │    HOOKS    │
                                     │ (Árbitro)   │
                                     └─────────────┘
                                            │
                                            ▼
                                     ┌─────────────┐
                                     │    EVALS    │
                                     │ (Scorecard) │
                                     └─────────────┘
```

---

## 📍 UBICACIONES FÍSICAS

| Componente | Ubicación |
|------------|-----------|
| Winter is Coming | `00_Winter_is_Coming/` |
| Workflows | `01_Core/00_Workflows/` |
| Agents | `01_Core/03_Agents/` |
| Skills | `01_Core/03_Skills/` |
| MCPs | `01_Core/05_Mcp/opencode.json` |
| Rules | `01_Core/01_Rules/` |
| Hooks | `01_Core/07_Hooks/` |
| Evals | `01_Core/02_Evals/` |

---

## 📊 ESTADO DEL EQUIPO

| Componente | Estado | Cantidad |
|------------|--------|----------|
| Workflows (Director) | ✅ | 26 archivos |
| Agents (Dream Team) | ✅ | 12 agents + 2 equipos |
| Skills (Kit) | ✅ | 160+ skills |
| MCPs (Equipamiento) | ✅ | 27 configurados |
| Rules (Reglas) | ✅ | 22 rules |
| Hooks (Árbitro) | ✅ | 6 categorías |
| Evals | ✅ | 1 evaluación |

---

## 🚀 METODOLOGÍA 4 FANTÁSTICOS

> **Patrón de ejecución paralela + auditoría para tareas multi-carpeta**

### El Flujo

```
┌─────────────────────────────────────────────────────────────────┐
│                    1️⃣ AGENTE TRABAJO (Swarm)                    │
│   Múltiples agentes paralelos, cada uno con UNA carpeta        │
│   └─ Objetivo: Procesar carpeta por carpeta rápido             │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    2️⃣ AUDITOR (Verificador)                     │
│   Revisa Plan vs Real - detecta qué falta                       │
│   └─ Objetivo: Calidad post-ejecución                           │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    3️⃣ ENGRAM (Memoria)                          │
│   Guarda progreso, decisiones, descubrimientos                   │
│   └─ Objetivo: Persistencia cross-session                       │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    4️⃣ DREAM_TEAM (Docs)                         │
│   Actualiza metodología documentada                             │
│   └─ Objetivo: Knowledge compound                                │
└─────────────────────────────────────────────────────────────────┘
```

### Cuándo usar

- Cuando hay **3+ carpetas** para procesar
- Cuando la tarea es **repetitiva** (migrar rutas, buscar patrones, etc.)
- Cuando necesitamos **auditoría** (Plan vs Real)

### Ejemplo real: Migración de Rutas v6.1

| Paso | Acción | Resultado |
|------|--------|-----------|
| 1 | Agentes paralelos (3) | 3 carpetas en paralelo |
| 2 | Auditor | Encontró 10+ rutas más |
| 3 | Engram | Progreso guardado |
| 4 | Dream_Team | Metodología actualizada ✅ |

### Reglas

1. **Contexto completo + tarea** = El orchestrator da TODO el contexto al agente
2. **Una carpeta por agente** = Sin conflictos
3. **Auditor siempre** = No confiamos, verificamos
4. **Engram SIEMPRE** = Antes de compactar

---

*Think Different PersonalOS v6.1 — Dream Team Architecture + 4 Fantásticos*
