export class Task {
  #message;
  constructor(message) {
    this.#message = message;
  }
  run() {
    console.log(this.#message);
  }
}