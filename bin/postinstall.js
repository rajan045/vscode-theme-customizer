#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VSCODE_DIR = '.vscode';
const SETTINGS_FILE = 'settings.json';

/**
 * Get the user's project directory where npm install was run
 */
function getUserProjectDirectory() {
    // INIT_CWD is set by npm to the directory where npm was originally run
    return process.env.INIT_CWD || process.cwd();
}

/**
 * Create .vscode directory if it doesn't exist
 */
function ensureVSCodeDirectory(projectDir) {
    const vscodePath = path.join(projectDir, VSCODE_DIR);
    if (!fs.existsSync(vscodePath)) {
        fs.mkdirSync(vscodePath, { recursive: true });
        console.log(`✅ Created ${VSCODE_DIR} directory`);
    }
    return vscodePath;
}

/**
 * Apply theme to the user's project
 */
function applyThemeToProject() {
    const projectDir = getUserProjectDirectory();
    const settingsPath = path.join(projectDir, VSCODE_DIR, SETTINGS_FILE);
    
    // Get the path to the template file (relative to this script's location)
    const templatePath = path.join(__dirname, '..', 'templates', 'settings.json');
    
    try {
        const vscodePath = ensureVSCodeDirectory(projectDir);
        
        // Check if template file exists
        if (!fs.existsSync(templatePath)) {
            throw new Error('Template settings.json file not found');
        }
        
        // Read the template with comments preserved
        const templateContent = fs.readFileSync(templatePath, 'utf8');
        
        // Back up existing settings if they exist
        if (fs.existsSync(settingsPath)) {
            const backupPath = `${settingsPath}.backup`;
            const existingContent = fs.readFileSync(settingsPath, 'utf8');
            fs.writeFileSync(backupPath, existingContent);
            console.log('📄 Found existing settings.json - backed up to settings.json.backup');
            console.log('💡 The theme will replace your current settings. Merge manually if needed.');
        }
        
        // Write the template with comments preserved
        fs.writeFileSync(settingsPath, templateContent);
        console.log(`🎨 VSCode theme customizer installed successfully!`);
        console.log(`📁 Theme applied to: ${path.relative(process.cwd(), settingsPath)}`);
        console.log('📖 Settings file includes helpful comments explaining each customization');
        console.log('🔄 Restart VSCode or reload the window to see the changes');
        
    } catch (error) {
        console.error('❌ Error applying theme during installation:', error.message);
        // Don't exit with error code to avoid breaking npm install
        console.log('💡 You can manually apply the theme later by running: npx vscode-theme-customizer');
    }
}

// Only run if this script is being executed as a postinstall script
if (require.main === module) {
    applyThemeToProject();
}

module.exports = { applyThemeToProject };