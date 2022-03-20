# Tar Github Action

A cross platform github action for using tar.
Works on Windows, Mac and Linux vms.

```yaml
name: "Tar action"
description: "A cross platform github action for using tar."
inputs:
  cwd:
    description: "Current working directory for tar command"
    required: false
  command:
    description: "c = compress"
    required: true
  files:
    description: "List of files or folders to archive"
    required: true
  outPath:
    description: "Path of the output archive (ex: abc.tar.gz)"
    required: true
outputs:
  done:
    description: "returns true if successful"
```

# Usage:

```
    steps:
      - uses: actions/checkout@master
      - name: Compress action step
        uses: master-atul/tar-action@v1.0.2
        id: compress
        with:
          command: c
          cwd: ./test
          files: |
            ./toCompress
          outPath: yolo.tar.gz
      - name: Extract files
        uses: master-atul/tar-action@v1.0.2
        id: extract
        with:
          command: x
          cwd: ./extract
          files: yolo.tar.gz
```
