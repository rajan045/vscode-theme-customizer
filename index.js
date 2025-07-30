/**
 * VSCode Theme Customizer
 * A package providing blue/green theme customizations for VSCode
 */

const themeConfig = {
    "workbench.colorCustomizations": {
        // Activity Bar (left vertical bar)
        "activityBar.activeBackground": "#0066cc", // Active item background
        "activityBar.background": "#004c99", // Overall background
        "activityBar.foreground": "#e7e7e7", // Active icon/text color
        "activityBar.inactiveForeground": "#e7e7e799", // Inactive icon/text color

        // Activity Bar Badge (notification count)
        "activityBarBadge.background": "#00cc44", // Badge background
        "activityBarBadge.foreground": "#15202b", // Badge text color

        // Command Center (top search bar)
        "commandCenter.border": "#e7e7e799", // Border color

        // Sash (resizer bars)
        "sash.hoverBorder": "#0066cc", // Hover border

        // Status Bar (bottom bar)
        "statusBar.background": "#003366", // Background color
        "statusBar.foreground": "#e7e7e7", // Text color
        "statusBarItem.hoverBackground": "#0055aa", // Hover item background
        "statusBarItem.remoteBackground": "#003366", // Remote status background
        "statusBarItem.remoteForeground": "#e7e7e7", // Remote status text color

        // Title Bar (top window bar)
        "titleBar.activeBackground": "#003366", // Active background
        "titleBar.activeForeground": "#e7e7e7", // Active text color
        "titleBar.inactiveBackground": "#00336699", // Inactive background
        "titleBar.inactiveForeground": "#e7e7e799", // Inactive text color

        // Editor main area
        "editor.background": "#1e1e1e", // Background
        "editor.foreground": "#e7e7e7", // Text
        "editor.selectionBackground": "#00cc4455", // Selection highlight
        "editor.selectionHighlightBackground": "#00cc4422", // Extra selection highlight
        "editor.lineHighlightBackground": "#0066cc11", // Current line highlight
        "editorCursor.foreground": "#00cc44", // Cursor color
        "editorWhitespace.foreground": "#e7e7e755", // Whitespace dots
        "editorBracketMatch.background": "#00cc4433", // Bracket match background
        "editorBracketMatch.border": "#00cc44", // Bracket match border

        // Editor Gutter (line numbers area)
        "editorGutter.background": "#1e1e1e", // Background
        "editorLineNumber.foreground": "#e7e7e799", // Line number text
        "editorLineNumber.activeForeground": "#00cc44", // Active line number

        // Minimap (code overview)
        "minimap.background": "#1e1e1e", // Background
        "minimap.foreground": "#e7e7e755", // Code color
        "minimap.selectionHighlight": "#00cc4455", // Selection highlight

        // Side Bar (Explorer area)
        "sideBar.background": "#15202b", // Background
        "sideBar.foreground": "#e7e7e7", // Text color
        "sideBarSectionHeader.background": "#004c99", // Section header background
        "sideBarSectionHeader.foreground": "#e7e7e7", // Section header text

        // Panel (bottom terminal/debug console/output)
        "panel.background": "#15202b", // Background
        "panel.border": "#004c99", // Top border
        "panelTitle.activeBorder": "#00cc44", // Active panel border
        "panelTitle.activeForeground": "#e7e7e7", // Active panel title text
        "panelTitle.inactiveForeground": "#e7e7e799", // Inactive panel title text

        // Terminal (integrated terminal)
        "terminal.background": "#15202b", // Background
        "terminal.foreground": "#e7e7e7", // Text
        "terminalCursor.foreground": "#00cc44", // Cursor color
        "terminal.ansiGreen": "#00cc44", // ANSI green
        "terminal.ansiRed": "#cc3300", // ANSI red

        // Tabs (open files)
        "tab.activeBackground": "#1e1e1e", // Active tab background
        "tab.activeForeground": "#00cc44", // Active tab text
        "tab.inactiveBackground": "#1e1e1e99", // Inactive tab background
        "tab.inactiveForeground": "#e7e7e799", // Inactive tab text
        "tab.border": "#004c99", // Tab border

        // Dropdowns (select options)
        "dropdown.background": "#1e1e1e", // Background
        "dropdown.foreground": "#e7e7e7", // Text
        "dropdown.border": "#004c99" // Border
    }
};

/**
 * Get the complete theme configuration
 * @returns {Object} VSCode workbench color customizations
 */
function getThemeConfig() {
    return themeConfig;
}

/**
 * Get the theme configuration as a JSON string
 * @param {number} indent - Number of spaces for indentation (default: 4)
 * @returns {string} JSON string of the theme configuration
 */
function getThemeConfigJSON(indent = 4) {
    return JSON.stringify(themeConfig, null, indent);
}

/**
 * Get specific color customizations by category
 * @param {string} category - Category name (activityBar, editor, statusBar, etc.)
 * @returns {Object} Color customizations for the specified category
 */
function getColorsByCategory(category) {
    const colors = {};
    const prefix = category.toLowerCase();
    
    Object.keys(themeConfig["workbench.colorCustomizations"]).forEach(key => {
        if (key.toLowerCase().startsWith(prefix)) {
            colors[key] = themeConfig["workbench.colorCustomizations"][key];
        }
    });
    
    return colors;
}

module.exports = {
    themeConfig,
    getThemeConfig,
    getThemeConfigJSON,
    getColorsByCategory
};