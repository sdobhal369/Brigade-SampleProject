const { events, Job, Groups } = require("brigadier");
events.on("exec", () => {
  var build = new Job("build-job");
  build.image = "alpine:3.4";
  build.tasks = ["RUN apt-get update", 
                 "RUN apt-get install -y python", 
                 "ADD hello.py /home/hello.py",  
                 "CMD ["/home/hello.py"]",
                 "docker build -t myimage:10  ."];
  build.run();
});

