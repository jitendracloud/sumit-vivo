let progressBar = document.querySelector(".progress-bar");
let progressText = document.querySelector(".progress-text");
let scannerWrapper = document.querySelector(".scanner-wrapper");
let thankYouScreen = document.querySelector(".thank-you-screen");

let percent = 0;
let interval = setInterval(() => {
  percent++;
  progressBar.style.width = percent + "%";
  progressText.innerText = percent + "%";

  if (percent >= 100) {
    clearInterval(interval);

    // Hide scanner UI and show thank you screen
    scannerWrapper.style.display = "none";
    thankYouScreen.style.display = "flex";
  }
}, 250); // 250ms * 100 = 25 seconds
