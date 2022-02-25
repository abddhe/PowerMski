// Global Function
function onScroll(section, nameSection) {
  if (window.scrollY >= section.offsetTop) {
    window.location.hash = "#" + nameSection;
  }
}

// Nav Bar Section

const toggleMeua = document.getElementById("toggle-menu");
const list = document.querySelector(".links");
toggleMeua.onclick = function () {
  if (list.hasAttribute("style") === true) {
    list.removeAttribute("style");
  } else {
    list.style.cssText = "z-index: 10; opacity: 1;";
  }
};

// Articale Section

const articaleSection = document.getElementById("articla");
window.onscroll = onScroll(articaleSection, "artciale");

// Gallrey Section

const gallreySection = document.getElementById("gallrey");
window.onscroll = onScroll(gallreySection, "gallrey");

// Features Section

const featuresSection = document.getElementById("features");
window.onscroll = onScroll(featuresSection, "features");

// Test Section

const testSection = document.getElementById("testimonials");
window.onscroll = onScroll(testSection, "testimonials");

// Our Skills Section

const OurSkillsSection = document.querySelector("#our-skills");
const progss = document.querySelectorAll(".pross span");
progss.forEach((progs) => {
  progs.removeAttribute("style");
  progs.style.width = "0";
});
window.onscroll = function () {
  if (window.scrollY >= OurSkillsSection.offsetTop - 10) {
    progss.forEach((progs) => {
      progs.style.width = progs.getAttribute("data-width");
    });
  }
};

// Event Section

const countDownDate = new Date("2022-12-31 23:59:59").getTime();

setInterval(() => {
  const newDate = new Date().getTime();

  const dayDiff = countDownDate - newDate;

  const days = Math.floor(dayDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days;

  const hours = Math.floor(
    (dayDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.querySelector(".hours").innerHTML = hours;

  const minutes = Math.floor((dayDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML = minutes;

  const seconds = Math.floor((dayDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);
