---
name: backup-system
description: "Sistema de backup y recuperación del PersonalOS. Triggers: backup, restore, recover, respaldo, recuperar, sync backup."
version: 1.0.0
---

# Backup System

## Propósito

Gestión de backups y recuperación del sistema PersonalOS.

## Cuándo Usar

- "backup"
- "respaldar"
- "restore"
- "recuperar"
- Antes de cambios importantes

## Categorías

- 01_Local: Backups locales
- 02_Cloud: Backups en nube
- 03_Archive: Archivos históricos

## Scripts Relacionados

- Ritual de cierre incluye backup automático

---

## Esencia Original

> **Metaskill**: Sistema de backup y recuperación del PersonalOS para preservar el estado del sistema.

**Por qué existe esta skill:**
- Sin backups, un error puede destruir semanas de trabajo
- El sistema debe poder recuperarse de desastres (hardware, malware, errores humanos)
- Los cambios importantes deben tener punto de retorno

**Caso de uso principal:**
1. Usuario decide hacer cambios importantes al sistema
2. Antes de proceder, ejecuta el ritual de backup
3. Si algo sale mal, puede restaurar el estado anterior
4. Backups se categorizan: local (inmediato), cloud (seguridad), archive (histórico)

---

## ⚠️ Gotchas

### ERROR 1: Backup sin verificar
- **Por qué**: Un backup corrupto es peor que no tener backup - da falsa seguridad
- **Solución**: Siempre verificar el backup restaurándolo en un entorno de prueba

### ERROR 2: No incluir archivos ocultos
- **Por qué**: Archivos como .gitignore, .env, y configuraciones se pierden
- **Solución**: Usar flags como `-a` (archive) que incluye archivos ocultos

### ERROR 3: Backup solo local
- **Por qué**: Un disco dañado o robo afecta tanto original como backup
- **Solución**: Siempre tener al menos un backup en la nube (Cloud/Archive)

### ERROR 4: No automatizar
- **Por qué**: Backups manuales se olvidan, especialmente bajo presión
- **Solución**: Integrar en el ritual de cierre de sesión (ya configurado en el sistema)

---

*Skill Version: 1.0.0*
