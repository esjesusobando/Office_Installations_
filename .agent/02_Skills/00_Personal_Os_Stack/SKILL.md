---
name: personal-os-stack
description: "Core skills del Think Different PersonalOS - Goals, Backlog, Tasks, SDD, System Guardian. Triggers on: goals, backlog, tasks, sdd workflow, system guardian, personal os, productividad."
---

# Personal OS Stack

Skills fundamentales del Think Different PersonalOS.

## Skills Incluidas

| # | Skill | Descripción |
|---|-------|-------------|
| 01 | Personal OS | Sistema principal de productividad |
| 02 | SDD Workflow | Metodología de desarrollo estructurado |
| 03 | System Guardian | Validación automática |
| 04 | Backlog Processing | Flujo completo de backlog |

## Estructura

```
00_Personal_Os_Stack/
├── 01_Personal_Os.md
├── 02_SDD_Workflow.md
├── 03_System_Guardian.md
├── 04_Backlog_Processing.md
└── SKILL.md (este archivo)
```

---

## Esencia Original

> **Metaskill**: Sistema central de productividad y gestión del flujo de trabajo del PersonalOS.

**Por qué existe esta skill:**
- El usuario necesita un sistema centralizado para gestionar metas, backlog y tareas
- Sin SDD (Spec-Driven Development), las features se construyen sin estructura
- El System Guardian asegura que el sistema mantenga sus estándares

**Caso de uso principal:**
1. Usuario define metas en GOALS.md
2. Backlog se prioriza en BACKLOG.md
3. SDD guia el desarrollo estructurado
4. System Guardian valida la calidad

---

## ⚠️ Gotchas

### ERROR 1: Goals sin estructura
- **Por qué**: Sin estructura, las metas son difíciles de medir y seguir
- **Solución**: Usar formato SMART: Specific, Measurable, Achievable, Relevant, Time-bound

### ERROR 2: Backlog sin priorizar
- **Por qué**: Sin prioridad, se trabaja en lo urgente pero no en lo importante
- **Solución**: Siempre usar formato: PRIORITY | STATUS | IMPACT | EFFORT

### ERROR 3: SDD sin seguir
- **Por qué**: Sin Spec-Driven Development, el código no tiene dirección
- **Solución**: Siempre seguir el flujo: explore → propose → spec → design → tasks → apply → verify → archive

### ERROR 4: Cambios sin validar
- **Por qué**: Sin System Guardian, errores pasan desapercibidos
- **Solución**: Ejecutar el ritual de validación antes de cada commit
