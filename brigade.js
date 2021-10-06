const { events, Job, Groups } = require("brigadier");
events.on("exec", () => {
  var build = new Job("build-job");
  build.tasks = ["docker build -t myimage:10 python-deploy ."];
  build.run();
});

