// Global Function

function onScroll(section, nameSection) {
  if (window.scrollY >= section.offsetTop) {
    window.location.replace(location.pathname + "#" + nameSection);
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
window.addEventListener("scroll", onScroll(articaleSection, "artciale"));

// Gallrey Section

const gallreySection = document.getElementById("gallrey");
window.addEventListener("scroll", onScroll(gallreySection, "gallrey"));

// Features Section

const featuresSection = document.getElementById("features");
window.addEventListener("scroll", onScroll(featuresSection, "features"));

// Test Section

const testSection = document.getElementById("testimonials");
window.addEventListener("scroll", onScroll(testSection, "testimonials"));

// Our Skills Section

const OurSkillsSection = document.querySelector("#our-skills");
const progss = document.querySelectorAll(".pross span");
progss.forEach((progs) => {
  progs.removeAttribute("style");
  progs.style.width = "0";
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= OurSkillsSection.offsetTop - 500) {
    progss.forEach((progs) => {
      progs.style.width = progs.getAttribute("data-width");
    });
  }
});

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

// Stats Secation

const statSection = document.getElementById("stats");
const spans = document.querySelectorAll(".stats .container .number");
let started = false;
function increasNumber(el) {
  let count = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == count) {
      clearInterval(counter);
    }
  }, 1000 / count);
}
window.addEventListener("scroll", function () {
  if (window.scrollY >= statSection.offsetTop - 100) {
    if (!started) {
      spans.forEach((e) => increasNumber(e));
    }
    started = true;
  }
});

// Scroll Up Button Section

let up = document.getElementById("up");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    up.style.cssText = "right:20px;";
  } else {
    up.style.cssText = "right:-125px;";
  }
});

up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
