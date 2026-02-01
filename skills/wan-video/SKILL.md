---
name: wan-video
description: "Generate AI videos using Alibaba Wan 2.6 video models. Use when you need to: (1) create videos from text descriptions, (2) animate static images into videos, or (3) transform and enhance existing videos with AI style transfer."
version: 1.0.0
skillId: skp-jm9hu0hnfh76iidfqbtubvrf
workflowId: c-m5xfkpdxe4rdwjaha71kx3z4
installationId: skpi-x144phjklvf12gqkqftc7ysa
category: file-generation
---

# Wan Video

Generate AI videos using Alibaba Wan 2.6 video models. Use when you need to: (1) create videos from text descriptions, (2) animate static images into videos, or (3) transform and enhance existing videos with AI style transfer.

## Input

Provide input as JSON:

```json
{
  "generation_mode": "Video generation mode: text-to-video, image-to-video, or video-to-video",
  "text_prompt": "Text description for video generation (supports Chinese and English). Describe the scene, actions, style, and mood you want in the video.",
  "input_image": "<file-reference>",
  "input_video": "<file-reference>",
  "video_duration": "Desired video duration in seconds (5-15 seconds supported)",
  "aspect_ratio": "Video aspect ratio: 16:9 (landscape), 9:16 (portrait), or 1:1 (square)",
  "resolution": "Output video resolution: 720p or 1080p"
}
```

## Execution (Pattern A: File Generation)

### Step 1: Run the Skill and Get Run ID

```bash
RESULT=$(refly skill run --id skpi-x144phjklvf12gqkqftc7ysa --input '{
  "video_prompt": "Ocean waves crashing on a rocky shore",
  "duration": "5",
  "aspect_ratio": "16:9"
}')
RUN_ID=$(echo "$RESULT" | jq -r '.payload.workflowExecutions[0].id')
# RUN_ID is we-xxx format, use this for workflow commands
```

### Step 2: Open Workflow in Browser and Wait for Completion

```bash
open "https://refly.ai/workflow/c-m5xfkpdxe4rdwjaha71kx3z4"
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
