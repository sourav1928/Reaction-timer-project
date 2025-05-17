let startTime;
const box = document.getElementById("box");
const reactionTime = document.getElementById("reactionTime");

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) { 
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function BoxAppear() {
  const top = Math.random() * 300 + 100;
  const left = Math.random() * 300 + 100;
  const size = Math.random() * 100 + 50;

  box.style.top = top + "px";
  box.style.left = left + "px";
  box.style.width = size + "px";
  box.style.height = size + "px";
  box.style.backgroundColor = getRandomColor();
  box.style.display = "block";

  startTime = new Date().getTime();
}

function AfterDelay() {
  const delay = Math.random() * 2000 + 1000; // 1 to 3 seconds
  setTimeout(BoxAppear, delay);
}

box.onclick = function () {
  const endTime = new Date().getTime();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(3);

  reactionTime.innerHTML = `⏱ Your reaction time: <strong>${timeTaken}</strong> seconds`;

  box.style.display = "none";

        AfterDelay(); // Next round
};

        AfterDelay(); // Start first round
