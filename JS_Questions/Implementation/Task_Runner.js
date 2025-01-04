class TaskRunner {
  constructor(concurrency) {
    // write your code below
    this.maxLimit = concurrency;
    this.tasks = [];
    this.running = 0;
  }

  push(task) {
    // write your code below
    this.tasks.push(task);
    this.runTask();
  }

  runTask() {
    if (this.tasks.length > 0 && this.running < this.maxLimit) {
      const task = this.tasks.shift();
      this.running++;
      task().finally(() => {
        this.running--;
        this.runTask();
      });
    }
  }
}

const ex = new TaskRunner(3);

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

// Simulated async tasks
const t1 = async () => {
  console.log("t1 started");
  await delay(2000);
  console.log("t1 finished");
};
const t2 = async () => {
  console.log("t2 started");
  await delay(1000);
  console.log("t2 finished");
};
const t3 = async () => {
  console.log("t3 started");
  await delay(1500);
  console.log("t3 finished");
};
const t4 = async () => {
  console.log("t4 started");
  await delay(1000);
  console.log("t4 finished");
};
const t5 = async () => {
  console.log("t5 started");
  await delay(500);
  console.log("t5 finished");
};

// Add tasks to the executor
ex.push(t1); // Starts immediately
ex.push(t2); // Starts immediately
ex.push(t3); // Starts immediately
ex.push(t4); // Waits until at least one task finishes
ex.push(t5); // Waits until another task finishes
