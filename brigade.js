const { events, Job } = require("brigadier");
events.on("exec", () => {
  var dockerBuild = new Job("docker-build")
  dockerBuild.image = "docker:dind";

  dockerBuild.tasks = [
    "sudo dockerd-entrypoint.sh &",
    "sleep 30",
    "cd /src/",
    "sudo docker build -t sdobhal369/brigade-test:20 ."
  ]

  dockerBuild.run();
});
