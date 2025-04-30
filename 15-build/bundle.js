(function () {
  'use strict';

  class User {
    #task;
    constructor(task) {
      this.#task = task;
    };
    do() {
      this.#task.run();
    }
  }

  class Task {
    #message;
    constructor(message) {
      this.#message = message;
    }
    run() {
      console.log(this.#message);
    }
  }

  const task = new Task('test message');
  const user = new User(task);

  user.do();

})();
