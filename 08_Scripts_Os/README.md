# 08_Scripts_Os — Motor de Automatización

**Versión:** 6.1  
**Última actualizada:** 2026-03-27  
**Estado:** ✅ Activo

---

## 📂 Estructura

```
08_Scripts_Os/
├── README.md                    # Este archivo
├── SCRIPTS_INDEX.md             # Índice de scripts
├── config_paths.py             # Configuración de rutas
├── qmd.sh                      # Script QMD
├── testsprite_failover.sh      # Failover para TestSprite
├── 01_Auditor_Hub.py           # Auditor principal
├── 02_Git_Hub.py               # Operaciones Git
├── 03_AIPM_Hub.py              # AIPM logging
├── 04_Ritual_Hub.py            # Ritual de cierre
├── 05_Validator_Hub.py        # Validador
├── 06_Tool_Hub.py              # Herramientas
├── 07_Integration_Hub.py        # Integraciones
├── 08_Workflow_Hub.py          # Workflows
├── 09_Data_Hub.py             # Datos
├── 10_General_Hub.py           # General
├── 11_Anthropic_Harness/       # Anthropic patterns
├── Legacy_Backup/              # Scripts deprecated (60+)
└── Analytics_Output/          # Output de analíticas
```

---

## 🎯 Propósito

El **motor de automatización** del PersonalOS - scripts Python para operaciones, auditorías, workflows y más.

---

## 🔧 Scripts Principales

| Script | Función |
|--------|---------|
| `01_Auditor_Hub.py` | Auditor principal del sistema |
| `02_Git_Hub.py` | Operaciones Git automatizadas |
| `03_AIPM_Hub.py` | AIPM logging y tracking |
| `04_Ritual_Hub.py` | Ritual de cierre de sesión |
| `SCRIPTS_INDEX.md` | Índice completo de scripts |

---

## 📊 Estadísticas

| Área | Cantidad |
|------|----------|
| Scripts principales | 10 |
| Scripts en Legacy_Backup | 60+ |
| Scripts totales | 70+ |

---

## 🔄 Uso

```bash
# Ejecutar auditor
python 08_Scripts_Os/01_Auditor_Hub.py

# Ritual de cierre
python 08_Scripts_Os/04_Ritual_Hub.py

# Git operations
python 08_Scripts_Os/02_Git_Hub.py
```

---

## 📚 Recursos

- [SCRIPTS_INDEX.md](./SCRIPTS_INDEX.md) — Índice completo
- [Legacy_Backup](./Legacy_Backup/) — Scripts deprecated

---

*Think Different PersonalOS v6.1 — Motor operativo*