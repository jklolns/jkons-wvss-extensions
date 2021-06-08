"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    vscode.window.showInformationMessage("The jk|o|ns extension pack is ready to use!");
    vscode.workspace
        .getConfiguration()
        .update("editor.defaultFormatter", "esbenp.prettier-vscode", vscode.ConfigurationTarget.Global);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map