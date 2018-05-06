const { FuseBox } = require('fuse-box');
const fuse = FuseBox.init({
  homeDir: "src",
  target : `server@esnext`,
  output: "dist/$name.js",
});

fuse.bundle("app")
    .completed(proc => proc.start)
    .instructions("> index.ts").watch()
fuse.run();