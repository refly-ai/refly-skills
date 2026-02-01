---
name: perplexity
description: "AI-powered search and chat with Perplexity. Use when you need to: (1) get AI responses with real-time web search, (2) perform batch research queries, or (3) answer questions with up-to-date information."
version: 1.0.0
skillId: skp-rkmnjbtpxxpidhck89q60yvt
workflowId: c-xz42o3itzw4bdnnhoovb16dv
installationId: skpi-sww12wxvy9zbfr1wwx35gybm
category: text-data
---

# Perplexity

AI-powered search and chat with Perplexity. Use when you need to: (1) get AI responses with real-time web search, (2) perform batch research queries, or (3) answer questions with up-to-date information.

## Input

Provide input as JSON:

```json
{
  "query": "Search query or chat message for single query processing",
  "queries": "Array of queries for batch search (comma-separated or JSON array format)"
}
```

## Execution (Pattern B: Text/Data)

### Step 1: Run the Skill and Get Run ID

```bash
RESULT=$(refly skill run --id skpi-sww12wxvy9zbfr1wwx35gybm --input '{
  "query": "What are the latest AI trends in 2024?"
}')
RUN_ID=$(echo "$RESULT" | jq -r '.payload.workflowExecutions[0].id')
# RUN_ID is we-xxx format, use this for workflow commands
```

### Step 2: Open Workflow in Browser and Wait for Completion

```bash
open "https://refly.ai/workflow/c-xz42o3itzw4bdnnhoovb16dv"
refly workflow status "$RUN_ID" --watch --interval 30000
```

### Step 3: Extract Text Content

```bash
# Get text content from toolcalls
CONTENT=$(refly workflow toolcalls "$RUN_ID" --files --latest | jq -r '.payload.nodes[].content')
echo "$CONTENT"
```

## Expected Output

- **Type**: Text content
- **Format**: AI-generated response with real-time web search results and citations
- **Action**: Display content to user

## Rules

Follow base skill workflow: `~/.claude/skills/refly/SKILL.md`
