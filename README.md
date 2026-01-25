# Refly Skill Registry

This repository serves as the official registry for [Refly](https://refly.ai) skills. Skills published through `refly skill publish` are submitted here via automated pull requests.

## What are Skills?

Skills are reusable workflow templates that extend Refly's capabilities. They can automate tasks, integrate with external services, and provide specialized functionality.

## Installing Skills

To install a skill from this registry:

```bash
refly skill install <skill-id>
```

## Browsing Skills

Each skill has its own directory under `skills/` containing:
- `skill.json` - Metadata about the skill
- `README.md` - Documentation and usage instructions

## Contributing a Skill

Skills are automatically submitted when you publish them via the Refly CLI:

```bash
refly skill publish <skill-id>
```

This creates a pull request to this repository. After review and approval by the Refly team, your skill will be available in the public registry.

## Skill Structure

Each skill directory contains:

```
skills/<skill-name>/
├── skill.json    # Skill metadata
└── README.md     # Documentation
```

### skill.json Schema

```json
{
  "name": "example-skill",
  "displayName": "Example Skill",
  "description": "What this skill does",
  "version": "1.0.0",
  "skillId": "sp-xxx",
  "author": {
    "uid": "u-xxx",
    "name": "Author Name"
  },
  "triggers": ["trigger phrase 1", "trigger phrase 2"],
  "tags": ["category1", "category2"],
  "installCommand": "refly skill install sp-xxx",
  "reflyUrl": "https://refly.ai/skill/sp-xxx"
}
```

## License

Skills in this registry are contributed by their respective authors. Please check individual skill directories for license information.
