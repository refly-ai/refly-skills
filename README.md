# Refly Skills Registry

Refly skill repository - A central registry for managing and discovering Refly AI skills.

## 📖 Introduction

This repository serves as a central registry for Refly AI skills. Each skill is a modular unit of functionality that can be used within the Refly AI ecosystem.

## 🏗️ Repository Structure

```
refly-ai/refly-skills/
├── README.md                    # Repository introduction and usage guide
├── skills/
│   ├── index.json               # Index of all skills (auto-generated)
│   └── <skill-name>/
│       ├── skill.json           # Skill metadata
│       └── README.md            # Auto-generated skill documentation
├── .github/
│   └── workflows/
│       └── validate.yml         # PR validation workflow
└── scripts/
    └── generate-index.js        # Script to generate index.json
```

## 🚀 How to Use

### Adding a New Skill

1. Create a new directory under `skills/` with your skill name:
   ```bash
   mkdir skills/<your-skill-name>
   ```

2. Create a `skill.json` file with the skill metadata:
   ```json
   {
     "name": "your-skill-name",
     "version": "1.0.0",
     "description": "Brief description of your skill",
     "author": "Your Name",
     "tags": ["tag1", "tag2"],
     "repository": "https://github.com/yourusername/your-repo"
   }
   ```

3. Create a `README.md` file with detailed documentation about your skill.

4. Run the index generation script:
   ```bash
   node scripts/generate-index.js
   ```

5. Submit a Pull Request with your changes.

### Updating an Existing Skill

1. Navigate to the skill directory: `skills/<skill-name>/`
2. Update the `skill.json` or `README.md` as needed
3. Run the index generation script
4. Submit a Pull Request

## 🔍 Finding Skills

Browse the `skills/` directory or check the `skills/index.json` file for a complete list of available skills.

## ✅ Validation

All Pull Requests are automatically validated using GitHub Actions to ensure:
- Valid JSON format in `skill.json` files
- Required metadata fields are present
- Proper directory structure

## 📝 License

See individual skill directories for their respective licenses.
