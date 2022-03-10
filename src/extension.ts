import * as vscode from "vscode";
import { validWorkspaceCMD } from "./helper";
import * as settingsJSON from "./settings.json";

export function activate(context: vscode.ExtensionContext) {
  /* VSCODE Namespace Vars */

  let config = vscode.workspace.getConfiguration();
  let win = vscode.window;
  let target = vscode.ConfigurationTarget.Workspace;

  /* Setting Key Vars */

  let colorTheme: string = "workbench.colorTheme";
  const settings = [
    { "files.autoSave": "afterDelay" },
    { "explorer.compactFolders": false },
    { "projectManager.openInNewWindowWhenClickingInStatusBar": true },
    { "editor.defaultFormatter": "esbenp.prettier-vscode" },
    { "editor.formatOnSave": true },
    { "cSpell.userWords": [] },
    { "eslint.alwaysShowStatus": true },
    {
      "eslint.codeAction.showDocumentation": {
        enable: true,
      },
    },
    { "eslint.lintTask.enable": true },
    { "errorLens.statusBarColorsEnabled": true },
    { "errorLens.statusBarMessageEnabled": true },
    { "errorLens.statusBarMessageType": "closestProblem" },
    { "errorLens.followCursor": "closestProblem" },
    { "errorLens.gutterIconsEnabled": true },
    { "errorLens.scrollbarHackEnabled": true },
    { "errorLens.fontStyleItalic": true },
    { "editor.guides.bracketPairs": true },
    { "workbench.colorTheme": "One Dark Pro" },
    { "workbench.iconTheme": "material-icon-theme" },
    { "editor.fontFamily": "Fira Code" },
    { "editor.fontLigatures": true },
  ];
  const extractAsKeyValue = (object: object) => ({
    key: Object.keys(object)[0],
    value: Object.values(object)[0],
  });

  /* Init */

  win.showInformationMessage("The jk|o|ns extension pack is ready to use!");

  /* CMDs */

  // Register setup command
  let setupWorkspaceDisposable = validWorkspaceCMD(
    "jkonsWVSS.setupWorkspace",
    () => {
      // Assign JSON to a variable to declare a index signature
      let setupSettings: { [index: string]: any } = settingsJSON;
      // Iterate over the setup settings json
      // * No vscode api function found to update all settings at once at the moment.
      Object.keys(settingsJSON).forEach((key: string) => {
        // Update the current workspace settings
        config.update(key, setupSettings[key], target);
      });
      config.update(
        "editor.bracketPairColorization.enabled",
        true,
        vscode.ConfigurationTarget.Global
      );
      settings.forEach(async (setting) => {
        const { key, value } = extractAsKeyValue(setting);
        await vscode.workspace
          .getConfiguration()
          .update(key, value, vscode.ConfigurationTarget.Global);
      });
    },
    "Setup completed!"
  );

  // Register select light theme command
  let selectLightThemeDisposable = validWorkspaceCMD(
    "jkonsWVSS.selectLightTheme",
    () => {
      // Update the current workspace theme to the light theme
      config.update(colorTheme, "Atom One Light", target);
    },
    "Your are using the light theme now!"
  );

  // Register select light theme command
  let selectDarkThemeDisposable = validWorkspaceCMD(
    "jkonsWVSS.selectDarkTheme",
    () => {
      // Update the current workspace theme to the light theme
      config.update(colorTheme, "Atom One Dark", target);
    },
    "Your are using the dark theme now!"
  );

  context.subscriptions.push(
    setupWorkspaceDisposable,
    selectDarkThemeDisposable,
    selectLightThemeDisposable
  );
}
