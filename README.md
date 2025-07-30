# VSCode Theme Customizer

A beautiful blue and green theme customization package for Visual Studio Code that provides a modern, eye-friendly color scheme for your development environment.

## 🎨 Theme Preview

This theme features:

- **Blue/Green Color Scheme**: A modern blue and green palette that's easy on the eyes
- **Comprehensive Coverage**: Customizes all major VSCode interface elements
- **Professional Look**: Clean, modern appearance suitable for professional development
- **High Contrast**: Good contrast ratios for readability

### Color Palette

- **Primary Blue**: `#0066cc` (Activity bar, borders, highlights)
- **Dark Blue**: `#004c99` (Backgrounds, headers)
- **Deep Blue**: `#003366` (Status bar, title bar)
- **Accent Green**: `#00cc44` (Cursor, badges, active elements)
- **Dark Background**: `#1e1e1e` (Editor background)
- **Sidebar Background**: `#15202b` (Sidebar, panels)

## 📦 Installation

### Install from npm

```bash
npm install -g vscode-theme-customizer
```

### Install locally in your project

```bash
npm install --save-dev vscode-theme-customizer
```

## 🚀 Usage

### Quick Setup (Recommended)

The easiest way to apply the theme is using the CLI tool:

```bash
# Apply theme to current project
vscode-theme-customizer

# Or explicitly use the apply command
vscode-theme-customizer apply
```

This will create or update the `.vscode/settings.json` file in your current directory with the theme customizations.

### Manual Setup

If you prefer to manually copy the settings:

1. Create a `.vscode` directory in your project root (if it doesn't exist)
2. Copy the theme configuration from `templates/settings.json` to `.vscode/settings.json`
3. Restart VSCode or reload the window

### Programmatic Usage

You can also use the theme programmatically in your Node.js applications:

```javascript
const {
  getThemeConfig,
  getThemeConfigJSON,
  getColorsByCategory,
} = require("vscode-theme-customizer");

// Get the complete theme configuration as an object
const themeConfig = getThemeConfig();

// Get the theme as a JSON string
const themeJSON = getThemeConfigJSON();

// Get colors for a specific category
const editorColors = getColorsByCategory("editor");
const activityBarColors = getColorsByCategory("activityBar");
```

## 🛠️ CLI Commands

```bash
# Apply theme to current project (default command)
vscode-theme-customizer
vscode-theme-customizer apply

# Show help information
vscode-theme-customizer help
vscode-theme-customizer --help

# Show version information
vscode-theme-customizer version
vscode-theme-customizer --version
```

## 📁 What Gets Customized

The theme customizes the following VSCode interface elements:

### Activity Bar (Left Sidebar)

- Background colors and hover effects
- Icon colors for active and inactive states
- Badge styling for notifications

### Editor

- Background and text colors
- Selection and highlight colors
- Cursor color and line highlighting
- Bracket matching
- Line numbers and gutter

### Status Bar (Bottom)

- Background and text colors
- Hover effects for status items
- Remote connection indicator

### Title Bar (Top)

- Active and inactive window states
- Text colors and backgrounds

### Sidebar (File Explorer)

- Background colors
- Section headers
- File and folder text colors

### Panel (Terminal/Debug Console)

- Background colors
- Border styling
- Tab indicators

### Terminal

- Background and text colors
- Cursor styling
- ANSI color customizations

### Tabs

- Active and inactive tab styling
- Background colors and borders

## 🔧 Customization

### Modifying Colors

If you want to customize the colors, you can:

1. **Fork this package** and modify the color values in `index.js`
2. **Override specific colors** in your project's `.vscode/settings.json` after applying the theme
3. **Use the programmatic API** to build your own color combinations

### Example Override

After applying the theme, you can override specific colors in your `.vscode/settings.json`:

```json
{
  "workbench.colorCustomizations": {
    // ... theme colors will be here ...

    // Your custom overrides
    "activityBar.background": "#your-custom-color",
    "editor.background": "#your-preferred-background"
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Here are some ways you can contribute:

- **Report bugs** or suggest improvements
- **Add new color variations** or themes
- **Improve documentation**
- **Add tests** for the CLI tool
- **Enhance the programmatic API**

### Development Setup

1. Clone the repository
2. Run `npm install`
3. Make your changes
4. Test the CLI tool: `node bin/cli.js apply`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/yourusername/vscode-theme-customizer/issues) on GitHub.

## 📚 Changelog

### v1.0.0

- Initial release with blue/green theme
- CLI tool for easy theme application
- Programmatic API for theme access
- Complete VSCode interface coverage
- Template files for manual setup

## 🙏 Acknowledgments

- Inspired by the VSCode community's awesome theme ecosystem
- Color palette designed for optimal readability and eye comfort
- Built with ❤️ for developers who spend long hours coding

---

**Happy coding with your new theme! 🎨✨**
