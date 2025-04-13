export class User {
  #task;
  constructor(task) {
    this.#task = task;
  };
  do() {
    this.#task.run();
  }
}