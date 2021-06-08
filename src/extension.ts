// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage(
    "The jk|o|ns extension pack is ready to use!"
  );
  vscode.workspace
    .getConfiguration()
    .update(
      "editor.defaultFormatter",
      "esbenp.prettier-vscode",
      vscode.ConfigurationTarget.Global
    );

  vscode.workspace
    .getConfiguration()
    .update("editor.formatOnSave", true, vscode.ConfigurationTarget.Global);
}
