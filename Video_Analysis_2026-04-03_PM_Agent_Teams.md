# 🎬 ANÁLISIS ESTRUCTURADO: PM + EQUIPO DE AGENTES SOTA
> [!IMPORTANT]
> **Video:** "Un Product Manager y un equipo de Agentes ¿Qué podría salir mal?"  
> **Invitado:** Ariel Contreras (Podcast "O Corres O Te Encaramas")  
> **Nivel:** SOTA (State-of-the-Art) | **Fecha de Análisis:** 2026-04-03

---

## 🚀 0. RESUMEN EJECUTIVO (Executive Summary)
Este episodio del podcast lleva el workflow de **Product Management con IA** a nivel SOTA. Ariel Contreras revela su setup real: un equipo orquestado de agentes AI dentro de **Claude Code** que reemplaza equipos enteros de discovery, tech, design y documentación.

El core SOTA es el **Context Engineering + Git como fuente única de verdad**: toda la información (PRDs, hipótesis, datos de usuarios, código) vive en un repo que los agentes leen automáticamente. Se utilizan slash commands personalizados, agentes "orquestadores" y la técnica de **Back Pressure** (validación humana + reglas estrictas) para controlar alucinaciones.

**Puntos Clave:**
- **Git como SSOT**: Single source of truth para todo el contexto.
- **Orquestación Multi-Agente**: Uso de back pressure SOTA.
- **Let it Fail**: Metodología de aprendizaje rápido mediante el error y el refinamiento de prompts sistémicos.
- **Blurring Roles**: El PM genera código y PRs; los ingenieros adoptan mindset de producto.

---

## 🧠 1. PROMPTS UTILIZADOS (EN / ES) - CONSOLIDACIÓN 30 CLAVE
> [!TIP]
> Estos prompts están diseñados para ser copiados y pegados directamente en Claude Code o Cursor para obtener resultados de nivel Senior/Staff.

| # | English Prompt | Español Prompt |
| :-- | :--- | :--- |
| **1** | "Act as discovery agent: analyze this problem using full Git context and generate quantified user interviews..." | "Actúa como agente de discovery: analiza este problema usando todo el contexto de Git y genera entrevistas..." |
| **2** | "Review the entire repository and create a technical spec including architecture, dependencies and back pressure..." | "Revisa todo el repositorio y crea un spec técnico con arquitectura, dependencias y validación de back pressure." |
| **3** | "Orchestrate the full team: assign tasks to discovery, tech and design agents and coordinate outputs..." | "Orquesta todo el equipo: asigna tareas a agentes de discovery, tech y design y coordina outputs con gates..." |
| **4** | "Create slash command /discovery that takes a Markdown problem statement and outputs a quantified brief." | "Crea slash command /discovery que tome un statement de problema en Markdown y genere un brief cuantificado." |
| **5** | "Apply back pressure: validate this output against user needs, business goals and Git truth..." | "Aplica back pressure: valida este output contra necesidades de usuario, objetivos de negocio y verdad de Git." |
| **6-10** | **Context Engineering**: "Provide full context from folder structure, README and Git history before answering..." | "Provee contexto completo de la estructura de carpetas, README e historial de Git antes de responder..." |
| **11-15** | **Slash Commands**: `/spec`, `/prototype`, `/validate`, `/orchestrate`, `/data-analysis` | `/spec`, `/prototipo`, `/validar`, `/orquestar`, `/analisis-datos` |
| **16-20** | **Multi-Agent Orchestration**: "Act as orchestrator: break this PM task into sub-agents and execute sequentially." | "Actúa como orquestador: divide esta tarea de PM en sub-agentes y ejecútalos de forma secuencial." |
| **21-25** | **Back Pressure + Let it Fail**: "Let it Fail on this task, then add the missing instruction to the system prompt." | "Deja que esta tarea falle (Let it Fail), luego añade la instrucción faltante al system prompt." |
| **26-30** | **Data & Visual Integration**: "Process this CSV of cancellations with Python and generate graph visualization." | "Procesa este CSV de cancelaciones con Python y genera una visualización de grafos." |

---

## 🛠️ 2. HERRAMIENTAS SELECCIONADAS
- **Claude Code**: Herramienta principal para orquestación y context engineering. [claude.ai/code](https://claude.ai/code)
- **Git**: Fuente única de verdad (SSOT). [git-scm.com](https://git-scm.com)
- **Figma + MCP**: Integración para design tokens y generación de componentes.
- **Cursor**: Alternativa para deep dive en código. [cursor.sh](https://cursor.sh)
- **yt-dlp**: Extracción de metadata de videos/podcasts.
- **Deep Graph**: Visualización de repositorios complejos.

---

## 📋 3. WORKFLOW SOTA (Paso a Paso)
1.  **Context Exploration**: Analizar el repo completo (business data, PRDs, hipótesis).
2.  **Role Definition**: Crear discovery, tech, design + orchestrator con back pressure.
3.  **Slash Commands Creation**: `/discovery`, `/spec`, `/prototype`, `/validate`.
4.  **Back Pressure Orchestration**: Validación humana en cada gate de decisión.
5.  **Git Documentation**: Todo cambio se registra como commits y PRs automáticos.
6.  **Data Generation**: Análisis de CSVs y visualizaciones gráficas.
7.  **Let it Fail Iteration**: Mejora continua basada en fallos intencionales.

---

## 🎬 4. DEMOS PRACTICADAS
- **Demo 1**: Configuración SOTA con Git y README maestro.
- **Demo 2**: Slash command `/discovery` (Input → Brief cuantificado).
- **Demo 3**: Generación automática de Spec Técnico + Riesgos.
- **Demo 4**: Orquestación multi-agente en tiempo real.
- **Demo 5**: Análisis determinístico de cancelaciones (CSV + Python).

---

## 🧪 5. SKILLS, HOOKS Y SCRIPTS
- **Skill (XML)**: Orquestación inteligente con auto-mejora.
- **Script (Python)**: Automatización de `yt-dlp` y orquestación vía CLI.
- **Hook (PowerShell)**: Lanzamiento automático del stack PM SOTA al iniciar sesión.

---
*Think Different PersonalOS v6.1 | SOTA Standard*