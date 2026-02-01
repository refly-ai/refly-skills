---
name: seedream-image
description: "Generate AI images using ByteDance Seedream 4.5. Use when you need to: (1) create images from text descriptions, (2) transform images with style transfer, or (3) generate high-quality artistic or realistic images."
version: 1.0.0
skillId: skp-pa4laqd42cze8sxl9r8dp416
workflowId: c-i51ssnvhcjdou7l0h3ote7d9
installationId: skpi-m56jo9am75xgijga62hd7t8g
category: file-generation
---

# Seedream Image

Generate AI images using ByteDance Seedream 4.5. Use when you need to: (1) create images from text descriptions, (2) transform images with style transfer, or (3) generate high-quality artistic or realistic images.

## Input

Provide input as JSON:

```json
{
  "prompt": "Text description of the image you want to generate (supports Chinese and English)",
  "negative_prompt": "What you don't want in the image (optional)",
  "reference_image": "<file-reference>",
  "aspect_ratio": "Image aspect ratio (e.g., 16:9, 1:1, 9:16, 4:3)",
  "style_preset": "Style preference for the generated image (e.g., realistic, artistic, anime, cinematic)"
}
```

## Execution (Pattern A: File Generation)

### Step 1: Run the Skill and Get Run ID

```bash
RESULT=$(refly skill run --id skpi-m56jo9am75xgijga62hd7t8g --input '{
  "prompt": "A beautiful mountain landscape at sunset",
  "aspect_ratio": "16:9",
  "style_preset": "realistic"
}')
RUN_ID=$(echo "$RESULT" | jq -r '.payload.workflowExecutions[0].id')
# RUN_ID is we-xxx format, use this for workflow commands
```

### Step 2: Open Workflow in Browser and Wait for Completion

```bash
open "https://refly.ai/workflow/c-i51ssnvhcjdou7l0h3ote7d9"
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

- **Type**: Image
- **Format**: .png/.jpg image file
- **Location**: `~/Desktop/`
- **Action**: Opens automatically to show user

## Rules

Follow base skill workflow: `~/.claude/skills/refly/SKILL.md`
