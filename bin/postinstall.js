#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { getThemeConfigJSON } = require('../index.js');

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
    const themeConfig = getThemeConfigJSON();
    
    try {
        const vscodePath = ensureVSCodeDirectory(projectDir);
        
        let existingSettings = {};
        
        // Read existing settings if file exists
        if (fs.existsSync(settingsPath)) {
            const existingContent = fs.readFileSync(settingsPath, 'utf8');
            try {
                existingSettings = JSON.parse(existingContent);
                console.log('📄 Found existing settings.json file');
            } catch (error) {
                console.warn('⚠️  Warning: Existing settings.json has invalid JSON, backing up...');
                fs.writeFileSync(`${settingsPath}.backup`, existingContent);
                console.log(`📄 Backed up existing file to ${settingsPath}.backup`);
            }
        }
        
        // Parse theme config and merge with existing settings
        const newThemeConfig = JSON.parse(themeConfig);
        const mergedSettings = {
            ...existingSettings,
            ...newThemeConfig
        };
        
        // Write the merged settings
        fs.writeFileSync(settingsPath, JSON.stringify(mergedSettings, null, 4));
        console.log(`🎨 VSCode theme customizer installed successfully!`);
        console.log(`📁 Theme applied to: ${path.relative(process.cwd(), settingsPath)}`);
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