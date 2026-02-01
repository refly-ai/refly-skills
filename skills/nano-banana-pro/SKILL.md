---
name: nano-banana-pro
description: "Generate or edit images via Gemini 3 Pro Image (Nano Banana Pro). Use when you need to: (1) generate images from text descriptions, (2) edit existing images with AI, (3) compose multiple images into one scene. Supports 1K/2K/4K resolutions and up to 14 input images for composition."
category: file-generation
tags:
  - image
  - ai
  - gemini
  - generation
  - editing
version: 1.0.0
skillId: skp-ud4d5kijwrf8k18muzmhwv9y
workflowId: c-g6emwcpi1wpalsz6j4gyi3d9
installationId: skpi-h9kpmts9ho1kl9l1sohaloeu
triggers:
  - generate image
  - edit image
  - AI image generation
  - Gemini image
  - 图片生成
  - AI绘图
  - 编辑图片
  - 文生图
  - 图生图
---

# Nano Banana Pro

Generate or edit images via Gemini 3 Pro Image (Nano Banana Pro). Use when you need to: (1) generate images from text descriptions, (2) edit existing images with AI, (3) compose multiple images into one scene. Supports 1K/2K/4K resolutions and up to 14 input images for composition.

## Input

Provide input as JSON:

```json
{
  "prompt描述": "图片生成或编辑的详细描述，例如：一只可爱的猫咪在花园里玩耍",
  "输出文件名": "生成图片的文件名（不含扩展名），例如：cute_cat",
  "分辨率": "图片分辨率选择：1K、2K 或 4K（默认1K）",
  "输入图片": "<file-reference>"
}
```

## Execution (Pattern A: File Generation)

### Step 1: Run the Skill and Get Run ID

```bash
RESULT=$(refly skill run --id skpi-h9kpmts9ho1kl9l1sohaloeu --input '{
  "prompt描述": "一只可爱的猫咪在花园里玩耍",
  "输出文件名": "cute_cat",
  "分辨率": "2K"
}')
RUN_ID=$(echo "$RESULT" | jq -r '.payload.workflowExecutions[0].id')
# RUN_ID is we-xxx format (e.g., we-abc123), use this for workflow commands
```

### Step 2: Open Workflow in Browser and Wait for Completion

```bash
open "https://refly.ai/workflow/c-g6emwcpi1wpalsz6j4gyi3d9"
# Use RUN_ID (we-xxx), not installationId or skillId
refly workflow status "$RUN_ID" --watch --interval 30000
```

### Step 3: Download and Show Result

```bash
# Get files from this run (use RUN_ID)
FILES=$(refly workflow toolcalls "$RUN_ID" --files --latest | jq -r '.payload.files[]')

# Download and open each file
echo "$FILES" | jq -c '.' | while read -r file; do
  FILE_ID=$(echo "$file" | jq -r '.fileId')
  FILE_NAME=$(echo "$file" | jq -r '.name')
  if [ -n "$FILE_ID" ] && [ "$FILE_ID" != "null" ]; then
    OUTPUT_PATH="$HOME/Desktop/${FILE_NAME}"
    refly file download "$FILE_ID" -o "$OUTPUT_PATH"
    open "$OUTPUT_PATH"
  fi
done
```

## Expected Output

- **Type**: Image
- **Format**: .png/.jpg image file (1K/2K/4K resolution)
- **Location**: `~/Desktop/`
- **Action**: Opens automatically to show user

## Rules

Follow base skill workflow: `~/.claude/skills/refly/SKILL.md`
