"""
🔍 DETECTOR - Módulo de Detección de Issues
=============================================
Detecta problemas, deuda técnica y desviaciones en el sistema.

Tipos de detección:
- Archivos huérfanos
- Imports rotos
- Duplicados
- Inconsistencias de naming
- Scripts que fallan
- Deuda técnica
"""

import os
import json
from pathlib import Path
from typing import List, Dict, Any


class Detector:
    """Motor de detección de issues del sistema"""

    def __init__(self, project_root: Path):
        self.project_root = project_root
        self.issues = []

        # Detection rules
        self.detection_rules = {
            "orphan_files": {
                "enabled": True,
                "description": "Archivos sin referencias",
                "severity": "medium",
            },
            "broken_imports": {
                "enabled": True,
                "description": "Imports que fallan",
                "severity": "high",
            },
            "naming_inconsistencies": {
                "enabled": True,
                "description": "Nombres inconsistentes",
                "severity": "low",
            },
            "duplicate_scripts": {
                "enabled": True,
                "description": "Scripts duplicados",
                "severity": "medium",
            },
            "missing_docstrings": {
                "enabled": True,
                "description": "Funciones sin docstring",
                "severity": "low",
            },
            "large_files": {
                "enabled": True,
                "description": "Archivos demasiado grandes",
                "severity": "low",
            },
        }

    def scan_critical(self) -> List[Dict[str, Any]]:
        """Scan rápido - solo issues críticos"""
        issues = []

        print("   🔍 Escaneando issues críticos...")

        # Check broken imports
        issues.extend(self._check_broken_imports())

        # Check critical naming issues
        issues.extend(self._check_naming_critical())

        self.issues = issues
        return issues

    def scan_all(self) -> List[Dict[str, Any]]:
        """Scan completo - todos los tipos de issues"""
        issues = []

        print("   🔍 Escaneando todos los tipos de issues...")

        # Run all detectors
        issues.extend(self._check_orphan_files())
        issues.extend(self._check_broken_imports())
        issues.extend(self._check_naming_inconsistencies())
        issues.extend(self._check_duplicate_scripts())
        issues.extend(self._check_missing_docstrings())
        issues.extend(self._check_large_files())

        self.issues = issues
        return issues

    def _check_orphan_files(self) -> List[Dict[str, Any]]:
        """Detectar archivos huérfanos (sin referencias)"""
        issues = []

        # Scan scripts directory
        scripts_dir = self.project_root / "08_Scripts_Os"
        if not scripts_dir.exists():
            return issues

        # Get all Python files
        py_files = list(scripts_dir.glob("**/*.py"))

        # Simple orphan detection: files with no clear references
        # This is a simplified version - could be enhanced
        for py_file in py_files:
            if py_file.name.startswith("_"):
                continue

            # Check if file is referenced in other files
            content = py_file.read_text(errors="ignore")

            # Skip if it's a hub or main script
            if "_Hub.py" in py_file.name:
                continue

            # Check for minimal content
            if len(content) < 200:
                issues.append(
                    {
                        "type": "orphan_file",
                        "severity": "low",
                        "file": str(py_file.relative_to(self.project_root)),
                        "description": f"Archivo muy pequeño: {py_file.name}",
                        "auto_fixable": True,
                        "suggestion": "Mover a carpeta de archive o eliminar",
                    }
                )

        return issues

    def _check_broken_imports(self) -> List[Dict[str, Any]]:
        """Detectar imports rotos o obsoletos"""
        issues = []

        scripts_dir = self.project_root / "08_Scripts_Os"
        if not scripts_dir.exists():
            return issues

        # Common broken import patterns
        broken_patterns = [
            "from Legacy_Backup",
            "import Legacy_Backup",
            "04_Engine",
            "from 04_",
            "from 05_",
        ]

        for py_file in scripts_dir.glob("**/*.py"):
            if py_file.name.startswith("_"):
                continue

            try:
                content = py_file.read_text(errors="ignore")
            except:
                continue

            for pattern in broken_patterns:
                if pattern in content:
                    issues.append(
                        {
                            "type": "broken_import",
                            "severity": "high",
                            "file": str(py_file.relative_to(self.project_root)),
                            "description": f"Import obsoleto encontrado: {pattern}",
                            "pattern": pattern,
                            "auto_fixable": True,
                            "suggestion": "Actualizar a nueva estructura",
                        }
                    )

        return issues

    def _check_naming_critical(self) -> List[Dict[str, Any]]:
        """Verificar naming conventions críticos"""
        return self._check_naming_inconsistencies()

    def _check_naming_inconsistencies(self) -> List[Dict[str, Any]]:
        """Detectar inconsistencias de naming"""
        issues = []

        # Expected patterns
        naming_rules = {
            "py": r"^\d{2}_[A-Z][a-zA-Z0-9_]*\.py$",
            "md": r"^\d{2}_[A-Za-z0-9_\-\s]*\.md$",
        }

        import re

        # Check scripts directory
        for dir_name in ["08_Scripts_Os", "01_Core", "04_Operations"]:
            dir_path = self.project_root / dir_name
            if not dir_path.exists():
                continue

            for ext, pattern in naming_rules.items():
                for file_path in dir_path.glob(f"**/*.{ext}"):
                    if file_path.name.startswith("_") or file_path.name.startswith("."):
                        continue

                    # Skip if matches pattern
                    if not re.match(pattern, file_path.name):
                        # Check if it has a number prefix at all
                        if not re.match(r"^\d{2}_", file_path.name):
                            issues.append(
                                {
                                    "type": "naming_inconsistency",
                                    "severity": "low",
                                    "file": str(
                                        file_path.relative_to(self.project_root)
                                    ),
                                    "description": f"Archivo sin prefijo numérico: {file_path.name}",
                                    "auto_fixable": False,
                                    "suggestion": "Agregar prefijo XX_Nombre.ext",
                                }
                            )

        return issues

    def _check_duplicate_scripts(self) -> List[Dict[str, Any]]:
        """Detectar scripts duplicados (simplificado)"""
        issues = []

        # This is a simplified version
        # In production, would use file hashing or similarity detection

        scripts_dir = self.project_root / "08_Scripts_Os"
        if not scripts_dir.exists():
            return issues

        # Check for exact duplicate names in different locations
        file_names = {}
        for py_file in scripts_dir.glob("**/*.py"):
            name = py_file.stem  # filename without extension
            if name not in file_names:
                file_names[name] = []
            file_names[name].append(py_file)

        # Report duplicates
        for name, paths in file_names.items():
            if len(paths) > 1:
                issues.append(
                    {
                        "type": "duplicate_script",
                        "severity": "medium",
                        "files": [str(p.relative_to(self.project_root)) for p in paths],
                        "description": f"Script duplicado: {name}",
                        "auto_fixable": False,
                        "suggestion": "Consolidar o mantener uno solo",
                    }
                )

        return issues

    def _check_missing_docstrings(self) -> List[Dict[str, Any]]:
        """Detectar funciones sin docstrings"""
        issues = []

        scripts_dir = self.project_root / "08_Scripts_Os"
        if not scripts_dir.exists():
            return issues

        import re

        for py_file in scripts_dir.glob("**/*.py"):
            if py_file.name.startswith("_"):
                continue

            try:
                content = py_file.read_text(errors="ignore")
            except:
                continue

            # Look for functions without docstrings
            # Simple pattern: def without """ after
            lines = content.split("\n")
            in_function = False
            function_name = None

            for i, line in enumerate(lines):
                if line.strip().startswith("def ") and "(" in line:
                    in_function = True
                    function_name = line.strip()

                    # Check next few lines for docstring
                    has_docstring = False
                    for j in range(i + 1, min(i + 4, len(lines))):
                        if '"""' in lines[j] or "'''" in lines[j]:
                            has_docstring = True
                            break

                    if not has_docstring and function_name:
                        # Only report for important functions
                        if "def run_" in function_name or "def main" in function_name:
                            issues.append(
                                {
                                    "type": "missing_docstring",
                                    "severity": "low",
                                    "file": str(py_file.relative_to(self.project_root)),
                                    "function": function_name,
                                    "description": f"Función sin docstring: {function_name}",
                                    "auto_fixable": True,
                                    "suggestion": "Agregar docstring",
                                }
                            )

            # Limit to prevent too many issues
            if len(issues) > 20:
                break

        return issues

    def _check_large_files(self) -> List[Dict[str, Any]]:
        """Detectar archivos demasiado grandes"""
        issues = []

        threshold_lines = 500

        for dir_name in ["08_Scripts_Os", "01_Core"]:
            dir_path = self.project_root / dir_name
            if not dir_path.exists():
                continue

            for py_file in dir_path.glob("**/*.py"):
                try:
                    lines = len(py_file.read_text(errors="ignore").split("\n"))
                except:
                    continue

                if lines > threshold_lines:
                    issues.append(
                        {
                            "type": "large_file",
                            "severity": "low",
                            "file": str(py_file.relative_to(self.project_root)),
                            "description": f"Archivo grande: {lines} líneas",
                            "lines": lines,
                            "auto_fixable": False,
                            "suggestion": f"Considerar separar en módulos (>{threshold_lines} líneas)",
                        }
                    )

        return issues
