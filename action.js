const core = require("@actions/core");
const tar = require("tar");

try {
  const cwd = core.getInput("cwd");
  const command = core.getInput("command", { required: true });
  const files = core.getInput("files", { required: true });
  const archiveName = core.getInput("archiveName", { require: true });

  switch (command) {
    case "c": {
      tar.c({ cwd, gzip: true, name: archiveName, sync: true }, files);
      break;
    }
    default:
      throw new Error(`Unsupported command: ${command}`);
  }

  core.setOutput("done", true);
} catch (error) {
  core.setFailed(error.message);
}
