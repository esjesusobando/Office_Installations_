/**
 * sound-on-complete - Sound automation plugin for OpenCode
 * 
 * Plays sound when tools complete or session becomes idle.
 * Uses correct OpenCode plugin signature matching notify.ts pattern.
 */

import type { Plugin } from "@opencode-ai/plugin"
import type { Event } from "@opencode-ai/sdk"

interface ToolInput {
	tool: string
	sessionID: string
	callID: string
}

interface SessionEvent {
	type: string
	properties: Record<string, unknown>
}

/**
 * Play sound using PowerShell on Windows, afplay on macOS
 * Uses Bun.spawn for command execution (like notify.ts)
 */
function playSound(): void {
	const platform = process.platform
	
	let cmd: string[]
	
	if (platform === "win32") {
		// Windows: PowerShell [console]::Beep(frequency, duration)
		// 440Hz for 200ms = pleasant completion tone
		// Use double quotes to prevent bash interpreting [ as variable
		cmd = ["powershell", "-Command", "[console]::Beep(440, 200)"]
	} else if (platform === "darwin") {
		// macOS: afplay system beep
		cmd = ["afplay", "/System/Library/Sounds/Glass.aiff"]
	} else {
		// Linux: beep command or paplay
		cmd = ["paplay", "/usr/share/sounds/gnome/defaults/alerts/glass.ogg"]
	}
	
	// Use Bun.spawn like notify.ts does
	const proc = Bun.spawn(cmd, {
		stdout: "ignore",
		stderr: "ignore",
	})
	proc.unref()
}

export const SoundOnCompletePlugin: Plugin = async (ctx) => {
	const { client } = ctx
	
	console.log("[SOUND-PLUGIN] Initialized!")
	
	// Hook: fires after each tool completes
	const handleToolAfter = async (input: ToolInput) => {
		console.log("[SOUND] Tool after:", input.tool)
		playSound()
	}
	
	// Fallback: fires when session becomes idle
	const handleEvent = async ({ event }: { event: Event }) => {
		const runtimeEvent = event as SessionEvent
		
		if (runtimeEvent.type === "session.idle") {
			const sessionID = runtimeEvent.properties.sessionID
			console.log("[SOUND] Session idle:", sessionID)
			playSound()
		}
	}
	
	return {
		"tool.execute.after": handleToolAfter,
		event: handleEvent,
	}
}

export default SoundOnCompletePlugin
