import * as vscode from "vscode";

let win = vscode.window;

// Checks if a workspace folder is there and sends a corresponding message
export function validWorkspaceCMD(
  commandName: string,
  commandCallback: () => void,
  successMessage?: string
): vscode.Disposable {
  let disposable = vscode.commands.registerCommand(commandName, () => {
    if (vscode.workspace.workspaceFolders) {
      commandCallback();

      if (successMessage) {
        win.showInformationMessage(
          // Success message
          successMessage
        );
      }

      return true;
    } else {
      // Error message
      win.showErrorMessage(
        "No workspace found. \n Please open a folder or a workspace and try again."
      );

      return false;
    }
  });

  return disposable;
}
