const { events, Job, Group } = require('brigadier');

const createJob = ({name, image, tasks}) => {
  let job = new Job(name, image);
  job.tasks = tasks;
  return job;
};

const deploy = async () => {
  await createJob(
    {
      name: 'deploy',
      image: 'jskswamy/fission-deployer:latest',
      tasks: [
        'cd /src/',
        'deployer',
      ],
    }
  ).run();
};

const run = async () => {
  await Promise.all([runGo(), runNode()]);
  await deploy();
};

events.on("exec", async (brigadeEvent, project) => {
  run();
});

events.on('push', (brigadeEvent, project) => {
  run();
});
