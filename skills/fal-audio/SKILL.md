---
name: fal-audio
description: "Generate AI speech audio using Fal.ai text-to-speech. Use when you need to: (1) convert text to natural speech for narration, (2) create professional voiceovers and announcements, or (3) generate single-speaker audio content with customizable voice settings."
version: 2.0.1
skillId: skp-rp9vuflwd7rbpz69qpes5b7q
workflowId: c-ghse1z0grq8s7rmp2loe1k3z
installationId: skpi-f2vbjqtn7q295d2ttuqve6uz
category: file-generation
triggers:
  - text to speech
  - tts
  - speech
  - narration
  - voiceover
  - fal audio
tags:
  - audio
  - ai
  - speech
  - tts
  - fal
---

# Fal Audio (Text-to-Speech)

Generate single-speaker audio using Fal.ai text-to-speech.

## Input Format

```json
{
  "text_content": "Your text to convert to speech",
  "voice_style": "professional male"
}
```

## Voice Setting (used internally)

```json
{
  "english_normalization": true,
  "pitch": 0,
  "speed": 0.95,
  "voice_id": "male-qn-qingse",
  "vol": 1
}
```

**Parameters:**
- `english_normalization`: Enable English text normalization
- `pitch`: Voice pitch (-10 to 10, 0 = neutral)
- `speed`: Speech speed (0.8-1.2, 0.95 = natural)
- `voice_id`: Voice preset ID
- `vol`: Volume level (0-1)

## Execution (Pattern A: File Generation)

### Step 1: Run the Skill and Get Run ID

```bash
RESULT=$(refly skill run --id skpi-f2vbjqtn7q295d2ttuqve6uz --input '{
  "text_content": "Welcome to Refly!",
  "voice_style": "professional male"
}')
RUN_ID=$(echo "$RESULT" | jq -r '.payload.workflowExecutions[0].id')
# RUN_ID is we-xxx format, use this for workflow commands
```

### Step 2: Open Workflow in Browser and Wait for Completion

```bash
open "https://refly.ai/workflow/c-ghse1z0grq8s7rmp2loe1k3z"
refly workflow status "$RUN_ID" --watch --interval 30000
```

### Step 3: Download and Show Result

```bash
# Get files from this run
FILES=$(refly workflow toolcalls "$RUN_ID" --files --latest | jq -r '.payload.files[]')

# Download and open each file
echo "$FILES" | jq -c '.' | while read -r file; do
  FILE_ID=$(echo "$file" | jq -r '.fileId')
  FILE_NAME=$(echo "$file" | jq -r '.name')
  if [ -n "$FILE_ID" ] && [ "$FILE_ID" != "null" ]; then
    refly file download "$FILE_ID" -o "$HOME/Desktop/${FILE_NAME}"
    open "$HOME/Desktop/${FILE_NAME}"
  fi
done
```

## Expected Output

- **Type**: Audio
- **Format**: .mp3
- **Location**: `~/Desktop/`
- **Action**: Opens automatically to show user

## Related Skills

- **fal-audio-podcast**: For multi-speaker podcast generation

## Rules

Follow base skill workflow: `~/.claude/skills/refly/SKILL.md`
