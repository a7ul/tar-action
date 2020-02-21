const tar = require("tar");

const cwd = "./test";
const command = "c";
const files = "toCompress";
const archiveName = "yolo.tar.gz";

let listOfFiles = [];
if (Array.isArray(files)) {
  listOfFiles = [...files];
} else {
  listOfFiles = [files];
}
tar.c({ cwd, gzip: true, name: archiveName, sync: true }, listOfFiles);
