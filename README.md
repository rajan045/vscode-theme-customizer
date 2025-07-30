# VSCode Theme Customizer by Rajan Singh

> **🎯 This is a TEMPLATE package! Take it and customize it as you want.**

A simple VSCode theme template with blue/green colors that you can easily modify to create your own custom themes.

## 💡 The MVP Concept

**This package is designed as a starting template.** The core idea is:

1. **Install** → Get a working theme instantly
2. **Fork/Copy** → Take the code as your foundation
3. **Customize** → Change colors, add features, make it yours
4. **Share** → Create your own theme packages

## 🚀 One-Step Installation

```bash
npm i vscode-theme-customizer
```

That's it! The theme will be automatically applied to your project's `.vscode/settings.json`.

## 🎨 What You Get

A complete VSCode theme that customizes:

- Activity Bar, Editor, Status Bar, Title Bar
- Sidebar, Panel, Terminal, Tabs
- All with a blue/green color scheme

**Sample Colors:**

- Primary Blue: `#0066cc`
- Dark Blue: `#004c99`
- Accent Green: `#00cc44`
- Editor Background: `#1e1e1e`

## 🔧 How to Customize

### Option 1: Quick Override

After installation, edit `.vscode/settings.json` to override specific colors:

```json
{
  "workbench.colorCustomizations": {
    "activityBar.background": "#your-color",
    "editor.background": "#your-background"
  }
}
```

### Option 2: Fork & Build Your Own

1. Fork this repository
2. Modify colors in `index.js`
3. Update `package.json` with your theme name
4. Publish your own theme package

### Option 3: Use Programmatically

```javascript
const {
  getThemeConfig,
  getColorsByCategory,
} = require("vscode-theme-customizer");

// Get all colors
const theme = getThemeConfig();

// Get specific category colors
const editorColors = getColorsByCategory("editor");
```

## 📂 Project Structure

```
├── index.js          # Theme colors (main customization file)
├── bin/cli.js        # CLI tool
├── bin/postinstall.js # Auto-application script
└── templates/        # Template files
```

## 🎯 Perfect For

- **Developers** who want to create custom VSCode themes
- **Teams** who need branded development environments
- **Learning** how VSCode theme customization works
- **Quick Setup** for consistent project theming

---

**Take this template and make it your own! 🚀**
