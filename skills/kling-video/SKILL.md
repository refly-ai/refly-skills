---
name: kling-video
description: "Generate AI videos using Kling video generation models. Use when you need to: (1) create videos from text prompts, (2) animate images into videos, (3) transform existing videos with AI, or (4) create AI avatar videos with speech."
tags:
  - ai-video
  - media-generation
version: 1.0.0
skillId: skp-d8eft4uduju18mhdv19pnpeb
workflowId: c-p3ydudm0cbdu13cmqodjqwhu
installationId: skpi-rzakvguz9m7memgp3o6dokta
triggers:
  - kling video
  - text to video
  - image to video
  - video generation
  - ai avatar
category: file-generation
---

# Kling Video

Generate AI videos using Kling video generation models. Use when you need to: (1) create videos from text prompts, (2) animate images into videos, (3) transform existing videos with AI, or (4) create AI avatar videos with speech.

## Input

Provide input as JSON:

```json
{
  "video_prompt": "Text description for the video you want to generate (e.g., 'A cat walking in a futuristic city at sunset')",
  "image_url": "Optional: URL of an image to use as the starting frame for image-to-video generation",
  "video_url": "Optional: URL of a video to transform with video-to-video generation",
  "model_version": "Kling model to use: 'o1' for advanced reasoning or 'v2.6' for premium visuals",
  "duration": "Video duration in seconds (5-10s supported)",
  "aspect_ratio": "Video aspect ratio: '16:9' (landscape), '9:16' (portrait), or '1:1' (square)"
}
```

## Execution (Pattern A: File Generation)

### Step 1: Run the Skill and Get Run ID

```bash
RESULT=$(refly skill run --id skpi-rzakvguz9m7memgp3o6dokta --input '{
  "video_prompt": "A cat walking through a futuristic city at sunset",
  "duration": "5",
  "aspect_ratio": "16:9"
}')
RUN_ID=$(echo "$RESULT" | jq -r '.payload.workflowExecutions[0].id')
# RUN_ID is we-xxx format, use this for workflow commands
```

### Step 2: Open Workflow in Browser and Wait for Completion

```bash
open "https://refly.ai/workflow/c-p3ydudm0cbdu13cmqodjqwhu"
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
