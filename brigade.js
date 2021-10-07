const { events, Job } = require("brigadier");
events.on("exec", () => {
  var dockerBuild = new Job("docker-build");
  dockerBuild.image = "docker:dind"
  dockerBuild.privileged = true;
  
  dockerBuild.env = {
    DOCKER_DRIVER: "overlay"
  }
  
  dockerBuild.tasks = [
    "dockerd-entrypoint.sh &",
    "sleep 30",
    "cd /src",
    "docker build -t sdobhal369/brigade-test:20 ."
  ];
  
  dockerBuild.run();
});
