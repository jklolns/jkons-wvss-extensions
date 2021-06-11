// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as settingsJSON from "./settings.json";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed



export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage(
    "The jk|o|ns extension pack is ready to use!"
  );

  // Register setup workspace command
  let setupWorkspaceDisposable = vscode.commands.registerCommand("jkonsWVSS.setupWorkspace", () => {
    // Assign JSON to a variable to declare a index signature
    let setupSettings: { [index: string]: any } = settingsJSON;
    if(vscode.workspace.workspaceFolders) {
      // Iterate over the setup settings json
      // * No vscode api function found to update all at once at the moment.
      Object.keys(settingsJSON).forEach((key : string) => {
        vscode.workspace
        .getConfiguration()
        // Update the current workspace settings
        .update(key, setupSettings[key], vscode.ConfigurationTarget.Workspace);
      });
    
      vscode.window.showInformationMessage(
        // Success message 
        "Setup successful!"
      );
    } else {
      // Error message
      vscode.window.showErrorMessage(
        "No workspace found. \n Please open a folder or a workspace and try again."
      );
    }
  })

  context.subscriptions.push(setupWorkspaceDisposable);
}
