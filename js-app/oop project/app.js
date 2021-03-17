function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;
  this.start = function () {
    if (running) {
      throw new Error("Stopwatch is already running");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch is not running run watch first");
    }
    running = false;
    stopTime = new Date();
    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    stopTime = null;
    duration = 0;
    console.log('duration:',duration);
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
