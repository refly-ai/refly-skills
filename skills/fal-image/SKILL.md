---
name: fal-image
description: "Generate AI images using Fal.ai Flux models. Use when you need to: (1) create images from text prompts, (2) transform existing images with AI, or (3) generate photorealistic or artistic images quickly."
version: 1.0.0
skillId: skp-jxj7q39dzqppywoes536ht67
workflowId: c-we6qb7ch1cfpc47jvkidqidb
installationId: skpi-g7ydq91v0sdvpm3t53h961vg
category: file-generation
---

# Fal Image

Generate AI images using Fal.ai Flux models. Use when you need to: (1) create images from text prompts, (2) transform existing images with AI, or (3) generate photorealistic or artistic images quickly.

## Input

Provide input as JSON:

```json
{
  "prompt": "Text description of the image you want to generate (e.g., 'a serene mountain landscape at sunset with vibrant colors')",
  "reference_image": "<file-reference>",
  "image_size": "Image dimensions (e.g., 'square', 'landscape_16_9', 'portrait_9_16', or custom like '1024x768')",
  "num_images": "Number of images to generate (1-4)"
}
```

## Execution (Pattern A: File Generation)

### Step 1: Run the Skill and Get Run ID

```bash
RESULT=$(refly skill run --id skpi-g7ydq91v0sdvpm3t53h961vg --input '{
  "prompt": "a serene mountain landscape at sunset with vibrant colors",
  "image_size": "landscape_16_9",
  "num_images": "1"
}')
RUN_ID=$(echo "$RESULT" | jq -r '.payload.workflowExecutions[0].id')
# RUN_ID is we-xxx format, use this for workflow commands
```

### Step 2: Open Workflow in Browser and Wait for Completion

```bash
open "https://refly.ai/workflow/c-we6qb7ch1cfpc47jvkidqidb"
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
