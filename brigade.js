const { events, Job, Groups } = require("brigadier");
events.on("exec", () => {
  var build = new Job("build-job");
  build.image = "alpine:3.4";
  build.tasks = ["docker build -t myimage:10 python-deploy ."];
  build.run();
});

