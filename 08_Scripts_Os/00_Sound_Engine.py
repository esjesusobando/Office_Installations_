#!/usr/bin/env python3
"""Tarea completada - Sonido de exito
Usage: python 08_Scripts_Os/00_Sound_Engine.py
"""
import winsound

def play_task_complete():
    """Melodia: C-E-G (do mi sol) - sonido de tarea completada"""
    winsound.Beep(523, 100)   # C5 - DO
    winsound.Beep(659, 100)   # E5 - MI
    winsound.Beep(784, 150)   # G5 - SOL

if __name__ == "__main__":
    play_task_complete()
    print("Tarea completada!")
