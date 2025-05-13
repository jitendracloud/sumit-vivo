let progressBar = document.querySelector(".progress-bar");
let progressText = document.querySelector(".progress-text");
let thankYou = document.querySelector(".thank-you");

let percent = 0;
let interval = setInterval(() => {
  percent++;
  progressBar.style.width = percent + "%";
  progressText.innerText = percent + "%";

  if (percent >= 100) {
    clearInterval(interval);
    progressText.style.display = "none";
    thankYou.style.display = "block";
  }
}, 120); // 120 * 100 = 12000ms = 12 seconds
