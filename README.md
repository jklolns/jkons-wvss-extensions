# [Jk|o|ns] WVS² Extension Pack

![logo](https://github.com/Jim8Knopf/jkons-wvss-extensions/tree/master/images/wvs2_jkons_pack_logo.jpg?raw=true)

## Included Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [TabNine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Live Sass](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
- [W3C Validation](https://marketplace.visualstudio.com/items?itemName=Umoxfo.vscode-w3cvalidation)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Bracket Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
- [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

## Publish new Extension Pack Version

1. Update version
2. Just push!

## Setup suggestion:

```json
{
  "bracket-pair-colorizer-2.colors": [
    "Lightgreen",
    "LightSkyBlue",
    "Yellow",
    "Pink"
  ],
  "diffEditor.ignoreTrimWhitespace": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.format.enable": true,
  "eslint.onIgnoredFiles": "warn",
  "eslint.options": {},
  "editor.suggestSelection": "first",
  "editor.formatOnSave": true,
  "editor.tabCompletion": "on",
  "editor.cursorStyle": "line",
  "editor.minimap.enabled": true,
  "editor.minimap.showSlider": "always",
  "editor.minimap.renderCharacters": true,
  "editor.snippetSuggestions": "bottom",
  "editor.tabSize": 4,
  "extensions.autoCheckUpdates": true,
  "extensions.autoUpdate": false,
  "eslint.alwaysShowStatus": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 10000,
  "git.autofetch": true,
  "git.autoRepositoryDetection": true,
  "gitlens.hovers.currentLine.over": "line",
  "gitlens.defaultGravatarsStyle": "identicon",
  "gitlens.liveshare.allowGuestAccess": true,
  "indentRainbow.colors": [
    "rgba(40,100,55,0.3)",
    "rgba(40,100,100,0.3)",
    "rgba(100,100,0,0.3)",
    "rgba(255,105,255,0.3)"
  ],
  "indentRainbow.errorColor": "rgba(128,32,32,0.8)",
  "indentRainbow.tabmixColor": "rgba(128,32,96,0.6)",
  "indentRainbow.ignoreLinePatterns": [
    "/[ \t]* [*]/g", // lines begining with <whitespace><space>*
    "/[ \t]+[/]{2}/g" // lines begininning with <whitespace>//
  ],
  "javascript.updateImportsOnFileMove.enabled": "always",
  "json.schemas": [],
  "liveshare.connectionMode": "relay",
  "liveshare.codeLens": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "prettier.requireConfig": true,
  "prettier.useEditorConfig": false,
  "problems.autoReveal": true,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "workbench.iconTheme": "vscode-icons",
  "workbench.editor.tabCloseButton": "off",
  "window.zoomLevel": 0,
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "vsintellicode.features.python.deepLearning": "enabled",
  "vsintellicode.typescript.completionsEnabled": true
}
```
