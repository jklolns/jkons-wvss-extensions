# [Jk|o|ns] WVS² Extension Pack

![logo](https://github.com/Jim8Knopf/jkons-wvss-extensions/blob/master/images/wvs2_jkons_pack_logo.jpg?raw=true)

https://img.shields.io/open-vsx/rating/JimKnopf/jkons-extension-pack?color=8743a7&style=plastic

## Included Extensions

-   [ESLint](https://open-vsx.org/extension/dbaeumer/vscode-eslint)
-   [Prettier](https://open-vsx.org/extension/esbenp/prettier-vscode)
-   [Code Spell Checker](https://open-vsx.org/extension/streetsidesoftware/code-spell-checker)
-   [TabNine](https://open-vsx.org/extension/TabNine/tabnine-vscode)
-   [Live Server](https://open-vsx.org/extension/ritwickdey/LiveServer)
-   [Live Sass](https://open-vsx.org/extension/glenn2223/live-sass)
-   [Bracket Colorizer 2](https://open-vsx.org/extension/CoenraadS/bracket-pair-colorizer-2)
-   [Indent Rainbow](https://open-vsx.org/extension/oderwat/indent-rainbow)

## Extensions we want to add when they are in the [Open VSX Registry](https://open-vsx.org)

-   [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
-   [W3C Validation](https://marketplace.visualstudio.com/items?itemName=Umoxfo.vscode-w3cvalidation)
-   [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
-   [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)

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
