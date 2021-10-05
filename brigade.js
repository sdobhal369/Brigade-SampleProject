const { events, Job, Groups } = require("brigadier");
events.on("exec", () => {
  var build = new Job("build-job");
  build.image = "alpine:3.4";
  build.tasks = ["apt-get update", 
                 "apt-get install -y python", 
                 "hello.py /home/hello.py",  
                 "CMD [/home/hello.py]",
                 "docker build -t myimage:10  ."];
  build.run();
});

