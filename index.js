
const switch1 = document.getElementById("switch1");
const modeicon = document.getElementById("mode-icon");
const taglineImg = document.getElementById("mainPic");
switch1.onclick = (icon) => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    modeicon.src = "Images/light.png";
    taglineImg.src = "Images/image2.png"
  } else {
    modeicon.src = "Images/half-moon.png";
    taglineImg.src = "Images/image.png"
  }
};
var typed = new Typed(".span1", {
  strings: ["any branch Notes", "your room","out about college","many exiting features"],
  typeSpeed: 140,
  backSpeed: 80,
  loop: true,
});