#!/usr/bin/env python3
"""
94_Ritual_Hub.py — Hub centralizador de Rituales y Standups
Reutiliza scripts de rituales: 08, 09, 14, 15, 17
"""

import argparse
import os
import io
import subprocess


# === PROTOCOLO DE RUTA DINÁMICA (v6.1) ===
_current = Path(__file__).resolve()
_root = next((p for p in _current.parents if (p / "01_Core").exists()), None)
if _root:
    sys.path.insert(0, str(_root / "08_Scripts_Os"))
from config_paths import *

# === COLOR SETUP ===
try:
    from colorama import init, Fore, Style
    init(autoreset=True)
except ImportError:
    class Fore: GREEN = YELLOW = RED = CYAN = MAGENTA = BLUE = ""
    class Style: RESET_ALL = ""

# Fix Windows console encoding
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")


def print_banner():
    banner = rf"""
{Fore.YELLOW}    ###########################################################################
    #                                                                         #
    #      _____ _____ _______ _    _   _      __                             #
    #     |  __ \_   _|__   __| |  | | | |    / /                             #
    #     | |__) || |    | |  | |  | | | |   / /                              #
    #     |  _  / | |    | |  | |  | | | |  / /                               #
    #     | | \ \| |_   | |  | |__| | | | / /                                #
    #     |_|  \_\_____| |_|   \____/  |_|/_/                                 #
    #                                                                         #
    #                       R I T U A L   H U B                               #
    #                       P E R S O N A L   O S                             #
    ###########################################################################{Style.RESET_ALL}
"""
    print(banner)


def dynamic_speak(text):
    """Interfaz de Voz SOTA v2.2"""
    print(f"{Fore.MAGENTA}🔊 [VOICE]: {text}{Style.RESET_ALL}")
    if sys.platform == "win32":
        try:
            cmd = f"PowerShell -Command \"Add-Type -AssemblyName System.Speech; (New-Object System.Speech.Synthesis.SpeechSynthesizer).Speak('{text}')\""
            subprocess.Popen(
                cmd, shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
            )
        except:
            pass


def run_script(script_name):
    # Los scripts de Rituales están en 01_Ritual
    script_path = ENGINE_DIR / "01_Ritual" / script_name
    if not script_path.exists():
        print(f"{Fore.RED}[ERROR] Script no encontrado: {script_path}{Style.RESET_ALL}")
        return

    print(f"{Fore.YELLOW}[RUNNING] Ejecutando: {script_name}...{Style.RESET_ALL}")
    subprocess.run([sys.executable, str(script_path)])


def main():
    print_banner()
    parser = argparse.ArgumentParser(
        description="Hub centralizador de Rituales y Standups."
    )
    subparsers = parser.add_subparsers(dest="command", help="Comandos de Rituales")

    # Definir subcomandos
    subparsers.add_parser(
        "cierre", help="Ritual de cierre (reutiliza 08_Ritual_Cierre.py)"
    )
    subparsers.add_parser(
        "triage", help="Triage de backlog (reutiliza 09_Backlog_Triage.py)"
    )
    subparsers.add_parser(
        "standup", help="Morning standup (reutiliza 14_Morning_Standup.py)"
    )
    subparsers.add_parser(
        "weekly", help="Revisión semanal (reutiliza 15_Weekly_Review.py)"
    )
    subparsers.add_parser(
        "dominical", help="Ritual dominical (reutiliza 17_Ritual_Dominical.py)"
    )

    args = parser.parse_args()

    # Mapeo de comandos
    cmd_map = {
        "cierre": "08_Ritual_Cierre.py",
        "triage": "09_Backlog_Triage.py",
        "standup": "14_Morning_Standup.py",
        "weekly": "15_Weekly_Review.py",
        "dominical": "17_Ritual_Dominical.py",
    }

    if args.command in cmd_map:
        dynamic_speak(f"Ejecutando ritual: {args.command}")
        run_script(cmd_map[args.command])
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
