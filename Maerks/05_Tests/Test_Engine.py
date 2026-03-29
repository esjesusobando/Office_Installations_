#!/usr/bin/env python3
"""
🧪 Test_Engine.py - Tests Básicos del Motor de Automejora
===========================================================
Tests para verificar que los módulos del engine funcionan correctamente.

Ejecutar: python -m pytest Maerks/05_Tests/Test_Engine.py -v
"""

import sys
import json
import tempfile
from pathlib import Path
from typing import Dict, Any

# Add engine path to sys.path - go up from Maerks/05_Tests to root, then to Engine
TESTS_DIR = Path(__file__).parent  # Maerks/05_Tests
MAERKS_DIR = TESTS_DIR.parent  # Maerks
ROOT_DIR = MAERKS_DIR.parent  # Root
ENGINE_PATH = ROOT_DIR / "04_Operations" / "01_Auto_Improvement" / "01_Engine"
sys.path.insert(0, str(ENGINE_PATH))

import pytest


# ============================================================================
# FIXTURES
# ============================================================================


@pytest.fixture
def temp_project(tmp_path):
    """Create a temporary project structure for testing"""
    # Create basic structure
    (tmp_path / "08_Scripts_Os").mkdir()
    (tmp_path / "01_Core").mkdir()
    (tmp_path / "04_Operations").mkdir()

    # Create a test script
    test_script = tmp_path / "08_Scripts_Os" / "01_Test_Script.py"
    test_script.write_text("""
#!/usr/bin/env python3
'''Test script'''

def main():
    print("Hello")

if __name__ == "__main__":
    main()
""")

    return tmp_path


@pytest.fixture
def sample_issue():
    """Sample issue for testing"""
    return {
        "type": "broken_import",
        "severity": "high",
        "file": "08_Scripts_Os/test.py",
        "description": "Import obsoleto encontrado: Legacy_Backup",
        "pattern": "Legacy_Backup",
        "auto_fixable": True,
        "suggestion": "Actualizar a nueva estructura",
    }


# ============================================================================
# TESTS: DETECTOR
# ============================================================================


class TestDetector:
    """Tests for the Detector module"""

    def test_detector_initialization(self, temp_project):
        """Test that Detector initializes correctly"""
        from detector import Detector

        detector = Detector(temp_project)

        assert detector.project_root == temp_project
        assert detector.issues == []
        assert "orphan_files" in detector.detection_rules
        assert "broken_imports" in detector.detection_rules

    def test_scan_critical_returns_list(self, temp_project):
        """Test that scan_critical returns a list"""
        from detector import Detector

        detector = Detector(temp_project)
        issues = detector.scan_critical()

        assert isinstance(issues, list)

    def test_scan_all_returns_list(self, temp_project):
        """Test that scan_all returns a list"""
        from detector import Detector

        detector = Detector(temp_project)
        issues = detector.scan_all()

        assert isinstance(issues, list)

    def test_detector_finds_naming_issues(self, temp_project):
        """Test that detector finds naming inconsistencies"""
        from detector import Detector

        # Create a file without prefix
        bad_file = temp_project / "08_Scripts_Os" / "BadName.py"
        bad_file.write_text("# Test")

        detector = Detector(temp_project)
        issues = detector.scan_all()

        naming_issues = [i for i in issues if i["type"] == "naming_inconsistency"]
        assert len(naming_issues) > 0


# ============================================================================
# TESTS: ANALYZER
# ============================================================================


class TestAnalyzer:
    """Tests for the Analyzer module"""

    def test_analyzer_initialization(self, temp_project):
        """Test that Analyzer initializes correctly"""
        from analyzer import Analyzer

        analyzer = Analyzer(temp_project)

        assert analyzer.project_root == temp_project
        assert "broken_import" in analyzer.root_cause_patterns
        assert "orphan_file" in analyzer.root_cause_patterns

    def test_quick_analyze_returns_dict(self, temp_project, sample_issue):
        """Test that quick_analyze returns a dictionary"""
        from analyzer import Analyzer

        analyzer = Analyzer(temp_project)
        analysis = analyzer.quick_analyze(sample_issue)

        assert isinstance(analysis, dict)
        assert "root_cause" in analysis
        assert "impact" in analysis
        assert "auto_fixable" in analysis

    def test_analyze_adds_priority_score(self, temp_project, sample_issue):
        """Test that analyze adds priority score"""
        from analyzer import Analyzer

        analyzer = Analyzer(temp_project)
        analysis = analyzer.analyze(sample_issue)

        assert "priority_score" in analysis
        assert isinstance(analysis["priority_score"], (int, float))
        assert 0 <= analysis["priority_score"] <= 100

    def test_batch_analyze(self, temp_project):
        """Test batch analysis of multiple issues"""
        from analyzer import Analyzer

        issues = [
            {"type": "broken_import", "file": "test1.py"},
            {"type": "orphan_file", "file": "test2.py"},
            {"type": "missing_docstring", "file": "test3.py"},
        ]

        analyzer = Analyzer(temp_project)
        results = analyzer.batch_analyze(issues)

        assert len(results) == 3
        assert all(isinstance(r, dict) for r in results)

    def test_get_fix_plan(self, temp_project, sample_issue):
        """Test fix plan generation"""
        from analyzer import Analyzer

        analyzer = Analyzer(temp_project)
        analysis = analyzer.analyze(sample_issue)
        fix_plan = analyzer.get_fix_plan(analysis)

        assert "action" in fix_plan
        assert "tier" in fix_plan
        assert "auto_fixable" in fix_plan


# ============================================================================
# TESTS: EXECUTOR
# ============================================================================


class TestExecutor:
    """Tests for the Executor module"""

    def test_executor_initialization(self, temp_project):
        """Test that Executor initializes correctly"""
        from executor import Executor

        executor = Executor(temp_project, dry_run=True)

        assert executor.project_root == temp_project
        assert executor.dry_run is True
        assert executor.fixes_applied == []

    def test_simulate_fix_returns_success(self, temp_project, sample_issue):
        """Test that dry-run returns simulated success"""
        from executor import Executor

        executor = Executor(temp_project, dry_run=True)
        result = executor.apply_fix(sample_issue)

        assert result["success"] is True
        assert result.get("simulated") is True

    def test_validate_returns_bool(self, temp_project):
        """Test that validate returns boolean"""
        from executor import Executor

        executor = Executor(temp_project)

        assert executor.validate({"success": True}) is True
        assert executor.validate({"success": False}) is False

    def test_get_fixes_summary(self, temp_project):
        """Test fixes summary generation"""
        from executor import Executor

        executor = Executor(temp_project)
        summary = executor.get_fixes_summary()

        assert "total" in summary
        assert "successful" in summary
        assert "failed" in summary


# ============================================================================
# TESTS: LEARNER
# ============================================================================


class TestLearner:
    """Tests for the Learner module"""

    def test_learner_initialization(self, temp_project):
        """Test that Learner initializes correctly"""
        # Create auto_improve dir structure
        auto_improve_dir = temp_project / "04_Operations" / "01_Auto_Improvement"
        auto_improve_dir.mkdir(parents=True)

        from learner import Learner

        learner = Learner(auto_improve_dir)

        assert learner.auto_improve_dir == auto_improve_dir
        assert "patterns" in learner.knowledge
        assert "rules" in learner.rules

    def test_extract_pattern(self, temp_project):
        """Test pattern extraction from fix"""
        auto_improve_dir = temp_project / "04_Operations" / "01_Auto_Improvement"
        auto_improve_dir.mkdir(parents=True)

        from learner import Learner

        learner = Learner(auto_improve_dir)

        fix = {
            "analysis": {
                "type": "broken_import",
                "root_cause": "Legacy path",
                "suggested_solution": "Update path",
                "auto_fixable": True,
            }
        }

        pattern = learner._extract_pattern(fix)

        assert pattern is not None
        assert pattern["type"] == "broken_import"
        assert pattern["auto_fixable"] is True

    def test_get_knowledge_summary(self, temp_project):
        """Test knowledge summary generation"""
        auto_improve_dir = temp_project / "04_Operations" / "01_Auto_Improvement"
        auto_improve_dir.mkdir(parents=True)

        from learner import Learner

        learner = Learner(auto_improve_dir)
        summary = learner.get_knowledge_summary()

        assert "patterns_count" in summary
        assert "rules_count" in summary
        assert isinstance(summary["patterns_count"], int)


# ============================================================================
# TESTS: INTEGRATION
# ============================================================================


class TestIntegration:
    """Integration tests for the complete engine"""

    def test_full_cycle(self, temp_project):
        """Test a complete detection-analysis-fix cycle"""
        from detector import Detector
        from analyzer import Analyzer
        from executor import Executor

        # Step 1: Detect
        detector = Detector(temp_project)
        issues = detector.scan_all()

        # Step 2: Analyze
        analyzer = Analyzer(temp_project)
        analyzed = analyzer.batch_analyze(issues)

        # Step 3: Simulate fix
        executor = Executor(temp_project, dry_run=True)
        for analysis in analyzed[:3]:  # Limit to 3
            result = executor.apply_fix(analysis)
            assert "success" in result

        # Verify summary
        summary = executor.get_fixes_summary()
        assert summary["total"] >= 0

    def test_learner_with_cycle_data(self, temp_project):
        """Test learner with cycle data"""
        auto_improve_dir = temp_project / "04_Operations" / "01_Auto_Improvement"
        auto_improve_dir.mkdir(parents=True, exist_ok=True)

        from learner import Learner

        learner = Learner(auto_improve_dir)

        cycle_data = {
            "issues": [
                {"type": "broken_import", "auto_fixable": True},
                {"type": "orphan_file", "auto_fixable": True},
            ],
            "analyzed": [],
            "fixed": [
                {
                    "analysis": {
                        "type": "broken_import",
                        "root_cause": "Legacy path",
                        "suggested_solution": "Update",
                        "auto_fixable": True,
                    },
                    "success": True,
                }
            ],
        }

        learnings = learner.learn_from_cycle(cycle_data)

        assert isinstance(learnings, list)


# ============================================================================
# MAIN
# ============================================================================

if __name__ == "__main__":
    # Run pytest with verbose output
    pytest.main([__file__, "-v", "--tb=short"])
