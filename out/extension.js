"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const helper_1 = require("./helper");
const settingsJSON = require("./settings.json");
function activate(context) {
    /* VSCODE Namespace Vars */
    let config = vscode.workspace.getConfiguration();
    let win = vscode.window;
    let target = vscode.ConfigurationTarget.Workspace;
    /* Setting Key Vars */
    let colorTheme = "workbench.colorTheme";
    /* Init */
    win.showInformationMessage("The jk|o|ns extension pack is ready to use!");
    /* CMDs */
    // Register setup command
    let setupWorkspaceDisposable = helper_1.validWorkspaceCMD("jkonsWVSS.setupWorkspace", () => {
        // Assign JSON to a variable to declare a index signature
        let setupSettings = settingsJSON;
        // Iterate over the setup settings json
        // * No vscode api function found to update all settings at once at the moment.
        Object.keys(settingsJSON).forEach((key) => {
            // Update the current workspace settings
            config.update(key, setupSettings[key], target);
        });
    }, "Setup completed!");
    // Register select light theme command
    let selectLightThemeDisposable = helper_1.validWorkspaceCMD("jkonsWVSS.selectLightTheme", () => {
        // Update the current workspace theme to the light theme
        config.update(colorTheme, "Atom One Light", target);
    }, "Your are using the light theme now!");
    // Register select light theme command
    let selectDarkThemeDisposable = helper_1.validWorkspaceCMD("jkonsWVSS.selectDarkTheme", () => {
        // Update the current workspace theme to the light theme
        config.update(colorTheme, "Atom One Dark", target);
    }, "Your are using the dark theme now!");
    context.subscriptions.push(setupWorkspaceDisposable, selectLightThemeDisposable, selectDarkThemeDisposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map