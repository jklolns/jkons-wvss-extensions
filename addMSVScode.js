let fs = require("fs");
let package = require("./package.json");
let msExtension = require("./msPackage.json").extensionPack;

msExtension.forEach((extension) => {
  package.extensionPack.push(extension);
});

const jsonString = JSON.stringify(package);
fs.writeFile("./package.json", jsonString, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
