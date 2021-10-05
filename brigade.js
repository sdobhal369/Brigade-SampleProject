const { events, Job } = require("brigadier");
events.on("exec", () => {
  var one = new Job("first-job");
  one.image = "alpine:3.4";
  one.tasks = ["echo Hello World"];
  one.run();
});
events.on("exec", () => {
  var on = new Job("Second-job");
  on.image = "alpine:3.4";
  on.tasks = ["echo Congratulation"];
  on.run();
});
