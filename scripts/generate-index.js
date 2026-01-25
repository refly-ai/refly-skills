#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate index.json from all skill.json files in the skills directory
 */
function generateIndex() {
  const skillsDir = path.join(__dirname, '../skills');
  const indexPath = path.join(skillsDir, 'index.json');

  // Ensure skills directory exists
  if (!fs.existsSync(skillsDir)) {
    console.error('Error: skills directory not found');
    process.exit(1);
  }

  const skills = [];
  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });

  // Iterate through each directory in skills/
  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const skillPath = path.join(skillsDir, entry.name);
    const skillJsonPath = path.join(skillPath, 'skill.json');

    // Check if skill.json exists
    if (!fs.existsSync(skillJsonPath)) {
      console.warn(`Warning: skill.json not found in ${entry.name}, skipping...`);
      continue;
    }

    try {
      // Read and parse skill.json
      const skillData = JSON.parse(fs.readFileSync(skillJsonPath, 'utf8'));
      
      // Validate required fields
      if (!skillData.name) {
        console.warn(`Warning: Missing 'name' field in ${entry.name}/skill.json, skipping...`);
        continue;
      }

      // Add skill to index
      skills.push({
        name: skillData.name,
        version: skillData.version || '1.0.0',
        description: skillData.description || '',
        author: skillData.author || '',
        tags: skillData.tags || [],
        repository: skillData.repository || '',
        path: `skills/${entry.name}`
      });

      console.log(`✓ Added skill: ${skillData.name}`);
    } catch (error) {
      console.error(`Error processing ${entry.name}/skill.json:`, error.message);
    }
  }

  // Sort skills alphabetically by name
  skills.sort((a, b) => a.name.localeCompare(b.name));

  // Create index object
  const index = {
    version: '1.0.0',
    generated: new Date().toISOString(),
    count: skills.length,
    skills: skills
  };

  // Write index.json
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + '\n');
  console.log(`\n✓ Successfully generated index.json with ${skills.length} skill(s)`);
  console.log(`  Location: ${indexPath}`);
}

// Run the script
if (require.main === module) {
  generateIndex();
}

module.exports = { generateIndex };
