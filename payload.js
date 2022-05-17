
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
  $("head").append(s);
setTimeout(() => {
  var myCanvas = document.createElement("canvas");
  myCanvas.style.position = "absolute";
  myCanvas.style.top = 0;
  myCanvas.style.right = 0;
  myCanvas.style.left = 0;
  myCanvas.style.bottom = 0;
  myCanvas.style.zIndex = 10000;
  document.body.appendChild(myCanvas);
  myCanvas.height = 1000;
  myCanvas.width = 1000;
  var myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
  });
  myConfetti({
      particleCount: 2000,
      spread: 340,
  });
  setTimeout(() => {
      myCanvas.style.zIndex = 0;
  }, 3000);
  }, 500);
