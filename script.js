const open = document.querySelector(".container");
const close = document.querySelector(".close");
var tl = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });
open.addEventListener("click", () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.to("nav", { right: 0 })
      .to("nav", { height: "100vh" }, "-=.1")
      .to(
        "nav ul li a",
        { opacity: 1, pointerEvents: "all", stagger: 0.2 },
        "-=.8"
      )
      .to(".close", { opacity: 1, pointerEvents: "all" }, "-=.8")
      .to("nav h2", { opacity: 1 }, "-=1");
  }
});

close.addEventListener("click", () => {
  tl.reverse();
});
$(".slider").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark").removeClass("bars");
    $(".slider");
  } else {
    $("body").addClass("dark");
    $(".slider");
  }
});
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ml3 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i + 1),
});
function increase() {
  let SPEED = 40;
  let limit = parseInt(document.getElementById("value1").innerHTML, 10);

  for (let i = 0; i <= limit; i++) {
    setTimeout(function () {
      document.getElementById("value1").innerHTML = i + "%";
    }, SPEED * i);
  }
}

increase();
function value2() {
  let SPEED = 40;
  let limit = parseInt(document.getElementById("value2").innerHTML, 10);
  for (let i = 0; i <= limit; i++) {
    setTimeout(function () {
      document.getElementById("value2").innerHTML = i + "%";
    }, SPEED * i);
  }
}

value2();
function value3() {
  let SPEED = 35;

  let limit = parseInt(document.getElementById("value3").innerHTML, 10);

  for (let i = 0; i <= limit; i++) {
    setTimeout(function () {
      document.getElementById("value3").innerHTML = i + "%";
    }, SPEED * i);
  }
}

value3();
