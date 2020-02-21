const core = require("@actions/core");
const tar = require("tar");
const fs = require("fs");

try {
  const cwd = core.getInput("cwd");
  const command = core.getInput("command", { required: true });
  const files = core
    .getInput("files", { required: true })
    .split("\n")
    .filter(x => x !== "");
  const outPath = core.getInput("outPath", { require: true });

  const listOfFiles = Array.isArray(files) ? files : [files];

  switch (command) {
    case "c": {
      tar
        .c({ cwd, gzip: true, sync: true }, listOfFiles)
        .pipe(fs.createWriteStream(outPath));
      break;
    }
    default:
      throw new Error(`Unsupported command: ${command}`);
  }

  core.setOutput("done", true);
} catch (error) {
  core.setFailed(error.message);
}
