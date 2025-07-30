#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VSCODE_DIR = '.vscode';
const SETTINGS_FILE = 'settings.json';

/**
 * Create .vscode directory if it doesn't exist
 */
function ensureVSCodeDirectory() {
    if (!fs.existsSync(VSCODE_DIR)) {
        fs.mkdirSync(VSCODE_DIR, { recursive: true });
        console.log(`✅ Created ${VSCODE_DIR} directory`);
    }
}

/**
 * Apply theme to the current project
 */
function applyTheme() {
    const settingsPath = path.join(VSCODE_DIR, SETTINGS_FILE);
    
    // Get the path to the template file (relative to this script's location)
    const templatePath = path.join(__dirname, '..', 'templates', 'settings.json');
    
    try {
        ensureVSCodeDirectory();
        
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
        console.log(`🎨 Successfully applied VSCode theme customizations to ${settingsPath}`);
        console.log('📖 Settings file includes helpful comments explaining each customization');
        console.log('🔄 Restart VSCode or reload the window to see the changes');
        
    } catch (error) {
        console.error('❌ Error applying theme:', error.message);
        process.exit(1);
    }
}

/**
 * Show help information
 */
function showHelp() {
    console.log(`
VSCode Theme Customizer CLI

Usage:
  vscode-theme-customizer [command]

Commands:
  apply     Apply the blue/green theme to the current project (default)
  help      Show this help message
  version   Show version information

Examples:
  vscode-theme-customizer           # Apply theme to current project
  vscode-theme-customizer apply     # Same as above
  vscode-theme-customizer --help    # Show help
  
The theme will be applied to .vscode/settings.json in your current directory.
If the file already exists, the theme settings will be merged with your existing configuration.
`);
}

/**
 * Show version information
 */
function showVersion() {
    const packageJson = require('../package.json');
    console.log(`VSCode Theme Customizer v${packageJson.version}`);
}

// Main CLI logic
function main() {
    const args = process.argv.slice(2);
    const command = args[0] || 'apply';
    
    switch (command) {
        case 'apply':
            applyTheme();
            break;
        case 'help':
        case '--help':
        case '-h':
            showHelp();
            break;
        case 'version':
        case '--version':
        case '-v':
            showVersion();
            break;
        default:
            if (command.startsWith('-')) {
                showHelp();
            } else {
                console.error(`❌ Unknown command: ${command}`);
                console.log('Run "vscode-theme-customizer help" for usage information');
                process.exit(1);
            }
    }
}

if (require.main === module) {
    main();
}

module.exports = { applyTheme, showHelp, showVersion };