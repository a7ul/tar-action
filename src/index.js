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
  const outPath = core.getInput("outPath");

  const listOfFiles = Array.isArray(files) ? files : [files];

  switch (command) {
    case "c": {
      if(!outPath)
        throw new Error("Please specify an out path");
      tar
        .c({ cwd, gzip: true, sync: true }, listOfFiles)
        .pipe(fs.createWriteStream(outPath));
      break;
    }
    case "x": {
      if(files.length !== 1)
        throw new Error("Only one file can be extracted");
      tar
        .x({ C: cwd, sync: true, file: files[0] });
      break;
    }
    default:
      throw new Error(`Unsupported command: ${command}`);
  }

  core.setOutput("done", true);
} catch (error) {
  core.setFailed(error.message);
}
