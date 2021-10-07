const { events, Job } = require("brigadier");
events.on("exec", () => {
  var dockerBuild = new Job("docker-packaging");
  dockerBuild.image = "docker:dind";
  dockerBuild.docker.enabled = true;
  
  dockerBuild.env.DOCKER_USER = project.secrets.dockerLogin
  dockerBuild.env.DOCKER_PASS = project.secrets.dockerPass
  
  dockerBuild.tasks = [
    "dockerd-entrypoint.sh &",
    "sleep 30",
    "cd /src",
    "docker build -t sdobhal369/brigade-test:30 .",
    "docker login -u $DOCKER_USER -p $DOCKER_PASS",
    "docker push sdobhal369/brigade-test:30"
  ];
  
  dockerBuild.run();
});
