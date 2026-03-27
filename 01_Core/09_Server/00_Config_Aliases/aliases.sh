# Alias para Think Different AI
# Agregar al final de ~/.bashrc o ejecutar: source 01_Core/09_Server/00_Config_Aliases/aliases.sh

# ===========================================
# HUB SCRIPTS (08_Scripts_Os/)
# ===========================================
alias gr='python 08_Scripts_Os/01_Auditor_Hub.py'
alias audit='python 08_Scripts_Os/01_Auditor_Hub.py'
alias git-hub='python 08_Scripts_Os/02_Git_Hub.py'
alias aipm='python 08_Scripts_Os/03_AIPM_Hub.py'
alias ritual='python 08_Scripts_Os/04_Ritual_Hub.py'
alias validate='python 08_Scripts_Os/05_Validator_Hub.py'
alias tools='python 08_Scripts_Os/06_Tool_Hub.py'
alias integration='python 08_Scripts_Os/07_Integration_Hub.py'
alias workflows='python 08_Scripts_Os/08_Workflow_Hub.py'
alias data='python 08_Scripts_Os/09_Data_Hub.py'
alias general='python 08_Scripts_Os/10_General_Hub.py'

# ===========================================
# SYSTEM GUARDIAN (System Guardian)
# ===========================================
alias gr-dry='python 08_Scripts_Os/01_Auditor_Hub.py --dry-run'
alias gr-apply='python 08_Scripts_Os/01_Auditor_Hub.py --apply'
alias gr-agents='python 08_Scripts_Os/01_Auditor_Hub.py --agents'

# ===========================================
# GIT & PULL REQUESTS
# ===========================================
# ce-pr: Crear Pull Request
ce-pr() {
    if ! gh auth status &>/dev/null; then
        echo "ERROR: No estas autenticado en gh CLI"
        echo "Ejecuta: gh auth login"
        return 1
    fi
    cd 08_Scripts_Os && python -c "
from 02_Git_Hub import GitHub
print('PR creation via GitHub integration')
"
}

# ce-pr-check: Verificar estado de PR
ce-pr-check() {
    if ! gh auth status &>/dev/null; then
        echo "ERROR: No estas autenticado en gh CLI"
        echo "Ejecuta: gh auth login"
        return 1
    fi
    gh pr list --state=open --author=@me
}

# ce-pr-url: Mostrar URL para crear PR manualmente
ce-pr-url() {
    CURRENT_BRANCH=$(git branch --show-current)
    echo "Crear PR manualmente:"
    echo "  https://github.com/OWNER/REPO/pull/new/$CURRENT_BRANCH"
    echo ""
    echo "Alternativa con gh CLI:"
    echo "  gh pr create --title 'feat: description'"
}

# ===========================================
# HELP
# ===========================================
alias ce-help='echo "Think Different Commands:"
echo ""
echo "HUB Scripts:"
echo "  gr, audit      - System Auditor"
echo "  git-hub        - Git operations"
echo "  aipm           - AI Performance Monitoring"
echo "  ritual         - Session rituals"
echo "  validate       - Code validation"
echo "  tools          - Tool management"
echo "  integration    - MCP integrations"
echo "  workflows      - Workflow automation"
echo "  data           - Data processing"
echo "  general        - General utilities"
echo ""
echo "System Guardian:"
echo "  gr-dry         - Dry run validation"
echo "  gr-apply       - Apply fixes"
echo "  gr-agents      - Run agent review"
echo ""
echo "PR Commands:"
echo "  ce-pr          - Create PR (requires gh auth)"
echo "  ce-pr-check    - List open PRs"
echo "  ce-pr-url      - Show PR creation URL"'
