const tar = require("tar");
const fs = require("fs");

const cwd = "./test";
const files = "toCompress/";
const outPath = "yolo.tar.gz";

const listOfFiles = Array.isArray(files) ? files : [files];

tar
  .c({ cwd, gzip: true, sync: true }, listOfFiles)
  .pipe(fs.createWriteStream(outPath));
