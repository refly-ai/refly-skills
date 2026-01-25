#!/usr/bin/env node

/**
 * Generate skills/index.json from all skill.json files
 *
 * Usage: node scripts/generate-index.js
 */

const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, '..', 'skills');
const outputPath = path.join(skillsDir, 'index.json');

function collectSkills() {
  const skills = [];

  // Read all directories in skills/
  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.')) continue;

    const skillJsonPath = path.join(skillsDir, entry.name, 'skill.json');

    if (fs.existsSync(skillJsonPath)) {
      try {
        const content = fs.readFileSync(skillJsonPath, 'utf-8');
        const skill = JSON.parse(content);
        skills.push({
          name: skill.name,
          displayName: skill.displayName || skill.name,
          description: skill.description,
          version: skill.version,
          skillId: skill.skillId,
          author: skill.author,
          tags: skill.tags || [],
          triggers: skill.triggers || [],
          installCommand: skill.installCommand,
          reflyUrl: skill.reflyUrl,
          path: `skills/${entry.name}`,
        });
        console.log(`Found skill: ${skill.name}`);
      } catch (err) {
        console.error(`Error reading ${skillJsonPath}: ${err.message}`);
      }
    }
  }

  return skills;
}

function main() {
  console.log('Generating skills index...\n');

  const skills = collectSkills();

  const index = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    count: skills.length,
    skills: skills.sort((a, b) => a.name.localeCompare(b.name)),
  };

  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));

  console.log(`\nGenerated ${outputPath} with ${skills.length} skills`);
}

main();
