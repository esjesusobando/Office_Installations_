/**
 * sound-on-complete
 * Play sound after each tool execution completes
 * 
 * Hooks into OpenCode session.idle event - fires when AI finishes a cycle
 * (when all tools have completed and AI is waiting for user)
 */

import { spawn } from "node:child_process"
import type { Plugin } from "@opencode-ai/plugin"

function playSound(): void {
	try {
		// Run Python sound in background (non-blocking)
		spawn("python", ["-c", "import winsound; winsound.Beep(523,80); winsound.Beep(659,80); winsound.Beep(784,120)"], {
			detached: true,
			stdio: "ignore",
		}).unref()
	} catch (e) {
		// Silent fail
	}
}

// Track if AI was thinking before idle
let wasThinking = false
let toolCallCount = 0

export const SoundOnCompletePlugin: Plugin = async () => {
	return {
		// Track when tool starts (AI is working)
		"tool.execute.before": async (input: { tool: string; sessionID: string; callID: string }) => {
			wasThinking = true
			toolCallCount++
		},
		
		// Listen to events for session state changes
		event: async ({ event }) => {
			const runtimeEvent = event as { type: string; properties?: Record<string, unknown> }
			
			// session.idle fires when AI finishes a thinking cycle
			// This is when tools have completed and AI is waiting
			if (runtimeEvent.type === "session.idle" && wasThinking && toolCallCount > 0) {
				// AI was working and now is idle = tools completed = task done!
				playSound()
				wasThinking = false
				toolCallCount = 0
			}
			
			// Also handle session.status with idle type
			if (runtimeEvent.type === "session.status") {
				const status = runtimeEvent.properties?.status as { type?: string } | undefined
				if (status?.type === "idle" && wasThinking && toolCallCount > 0) {
					playSound()
					wasThinking = false
					toolCallCount = 0
				}
			}
		},
	}
}

export default SoundOnCompletePlugin