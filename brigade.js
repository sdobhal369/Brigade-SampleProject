const { events, Job } = require("brigadier");
events.on("exec", () => {
  const dockerBuild = new Job("docker-build", "docker:stable-dind");
  dockerBuild.privileged = true;
  dockerBuild.tasks = [
    "dockerd-entrypoint.sh &",
    "sleep 30",
    "cd /src",
    "docker build -t sdobhal369/brigade-test:20 ."
  ];
  dockerBuild.run();
});
