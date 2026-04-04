---
name: skill-creator
description: "Crea nuevas skills para el agente siguiendo estándares Anthropic. Triggers: create skill, nueva skill, skill creator, hacer skill."
version: 1.0.0
---

# Skill Creator

## Propósito

Crear nuevas skills para el ecosistema PersonalOS siguiendo estándares Anthropic SOTA.

## Cuándo Usar

- "create skill"
- "nueva skill"
- "skill creator"
- Al necesitar una nueva habilidad para el agente

## Estándares

### YAML Frontmatter
```yaml
---
name: skill-name
description: "Descripcion con triggers"
version: 1.0.0
---
```

### Estructura Requerida
- name: lowercase, gerund
- description: triggers semánticos
- Gotchas: 3+ errores comunes
- Esencia Original: propósito de la skill

## Estructura de Skill

```
skill-folder/
├── SKILL.md           # Required
├── references/        # Optional (docs > 200 líneas)
├── scripts/          # Optional
└── assets/          # Optional
```

---

## Esencia Original

> **Metaskill**: Sistema para crear nuevas skills siguiendo estándares Anthropic SOTA v5.1.

**Por qué existe esta skill:**
- Sin estándares, cada skill tiene formato diferente y es difícil de mantener
- El agente necesita saber cuándo activar cada skill (triggers)
- Las skills sin gotchas repiten los mismos errores una y otra vez

**Caso de uso principal:**
1. Usuario necesita una nueva habilidad para el agente
2. Se usa esta skill para generar el template y estándares
3. La skill se crea siguiendo el formato Anthropic
4. Se audita con Skill Auditor antes de integrar

---

## ⚠️ Gotchas

### ERROR 1: Name con mayúsculas
- **Por qué**: Rompe YAML parsing en algunos sistemas y no sigue convención
- **Solución**: Usar siempre lowercase: `skill-name`, no `SkillName` ni `skill_name`

### ERROR 2: Description sin triggers
- **Por qué**: Sin triggers, el modelo no sabe cuándo activar la skill
- **Solución**: Incluir siempre `triggers on:` seguido de palabras clave específicas

### ERROR 3: SKILL.md mayor a 200 líneas
- **Por qué**: Satura el context window, peor rendimiento del modelo
- **Solución**: Mover documentación extensa a `references/` folder

### ERROR 4: Gotchas genéricos
- **Por qué**: "No cometas errores" no aporta valor
- **Solución**: Ser específico: "Sin yt-dlp instalado, la extracción de metadata falla"

---

*Skill Version: 1.0.0*
