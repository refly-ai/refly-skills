---
name: test-ownership-skill
description: Test skill for testing workflow ownership fix. Use when testing skill installation and workflow cloning functionality to verify that workflow variables are properly copied during installation process.
skillId: skp-y89i4pu9p6qdwnpmvsysuqdq
workflowId: see-workflow-mapping
version: 1.0.0
---

# test-ownership-skill

Test skill for testing workflow ownership fix. Use when testing skill installation and workflow cloning functionality to verify that workflow variables are properly copied during installation process.

## Installation

```bash
refly skill install skp-y89i4pu9p6qdwnpmvsysuqdq
```

## Usage

After installation, run the skill using your installation ID:

```bash
refly skill run <installationId> --input '{}'
```

The installation ID is returned when you run `refly skill install`.
