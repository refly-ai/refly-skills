---
name: fal-video
description: "Generate AI videos using Fal.ai Seedance models. Use when you need to: (1) animate images into short videos, (2) create motion from still photos, or (3) generate high-quality video content from images."
version: 1.0.0
skillId: skp-g0dmn7p5oikkr2l4feh7jwy2
workflowId: c-ly9fy5c2gz4hrf1g2izv5bdj
installationId: skpi-aeg736kbicr5zzzwgiyn7me3
category: file-generation
---

# Fal Video

Generate AI videos using Fal.ai Seedance models. Use when you need to: (1) animate images into short videos, (2) create motion from still photos, or (3) generate high-quality video content from images.

## Input

Provide input as JSON:

```json
{
  "input_image": "<file-reference>",
  "motion_prompt": "Describe the motion or animation you want (e.g., 'camera slowly zooms in', 'character waves hand', 'leaves gently swaying in wind')",
  "video_duration": "Desired video duration in seconds (typically 3-10 seconds)"
}
```

## Execution (Pattern A: File Generation)

### Step 1: Run the Skill and Get Run ID

```bash
RESULT=$(refly skill run --id skpi-aeg736kbicr5zzzwgiyn7me3 --input '{
  "input_image": "https://example.com/image.jpg",
  "motion_prompt": "gentle camera zoom in"
}')
RUN_ID=$(echo "$RESULT" | jq -r '.payload.workflowExecutions[0].id')
# RUN_ID is we-xxx format, use this for workflow commands
```

### Step 2: Open Workflow in Browser and Wait for Completion

```bash
open "https://refly.ai/workflow/c-ly9fy5c2gz4hrf1g2izv5bdj"
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

- **Type**: Video
- **Format**: .mp4 video file
- **Location**: `~/Desktop/`
- **Action**: Opens automatically to show user

## Rules

Follow base skill workflow: `~/.claude/skills/refly/SKILL.md`
