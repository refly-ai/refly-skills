---
name: specsit-field-enrichment
description: SpecSit 缺失字段批量补全工具。Use when: (1) batch enrich missing fields in SpecSit analysis, (2) search Chinese property/legal info, (3) output structured JSON for API integration.
skillId: skp-ir1a944p482nl225j7k7i8gx
workflowId: see-workflow-mapping
triggers:
  - specsit补全
  - 字段补全
  - specsit-enrichment
tags:
  - specsit
  - enrichment
  - china-property
version: 1.0.0
---

# specsit-field-enrichment

SpecSit 缺失字段批量补全工具。Use when: (1) batch enrich missing fields in SpecSit analysis, (2) search Chinese property/legal info, (3) output structured JSON for API integration.

## Installation

```bash
refly skill install skp-ir1a944p482nl225j7k7i8gx
```

## Usage

After installation, run the skill using your installation ID:

```bash
refly skill run <installationId> --input '{}'
```

The installation ID is returned when you run `refly skill install`.
