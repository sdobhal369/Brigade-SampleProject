const { events, Job } = require("brigadier");
events.on("exec", () => {
  var one = new Job("first-job");
  one.image = "alpine:3.4";
  one.tasks = ["echo Hello World"];
  one.run();
});
events.on("exec", () => {
  var two = new Job("Second-job");
  two.image = "alpine:3.4";
  two.tasks = ["echo Congratulation"];
  two.run();
});
