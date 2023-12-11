var startTime = null;

// start the timer when the window is focused
window.addEventListener("focus", () => {
  startTime = new Date();
});

// calculate the elapsed time when the window is unloaded
window.addEventListener("unload", () => {
  if (startTime !== null) {
    const endTime = new Date();
    const elapsedTime = endTime - startTime;
    console.log(`Elapsed time: ${elapsedTime} ms`);
    
    // send elapsed time to Firebase or perform any other action here

    startTime = null;
  }
});
console.log("hello");
console.log(startTime);


