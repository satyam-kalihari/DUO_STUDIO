//from locomotive scroll trigger codepen
function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

// init();

var cusr = document.querySelector(".cursor");
var main = document.querySelector("#main");
document.addEventListener("mousemove", function (dets) {
  cusr.style.left = dets.x + 10 + "px";
  cusr.style.top = dets.y + 10 + "px";
});

//MOUSE ENTER ON VIDEO
var video = document.querySelector("#video");
video.addEventListener("mouseenter", () => {
  cusr.style.height = 30 + "px";
  cusr.style.width = 100 + "px";
  cusr.style.borderRadius = 30 + "px";
  cusr.style.zIndex = 10;
});
var video = document.querySelector("#video");
video.addEventListener("mouseleave", () => {
  cusr.style.height = 20 + "px";
  cusr.style.width = 20 + "px";
  cusr.style.borderRadius = 50 + "%";
  cusr.style.zIndex = 9;
});

//PAGE 2
var row1 = document.querySelector("#row1");
var row2 = document.querySelector("#row2");
var row3 = document.querySelector("#row3");
var imageDiv = document.querySelector("#page2_image");

row1.addEventListener("mouseover", () => {
  imageDiv.style.backgroundImage =
    "url('https://d33wubrfki0l68.cloudfront.net/20696575c48be579c70798eacdea1854f171b7cb/fda6d/assets/services/services__branding@1152.webp')";
});

row2.addEventListener("mouseenter", () => {
  imageDiv.style.backgroundImage =
    "url(https://d33wubrfki0l68.cloudfront.net/c848c3d7138966c3f5ad20564a30ad9ae16121b1/4fef5/assets/services/services__websites@625.webp)";
});

row3.addEventListener("mouseover", () => {
  imageDiv.style.backgroundImage =
    "url('https://d33wubrfki0l68.cloudfront.net/d8139cdf83ac971c8cbd2a793ed4465ece04ea45/6aca7/assets/services/services__content@1152.webp')";
});

//PAGE 3
function mouseEnter_page5(image) {
  cusr.style.height = 300 + "px";
  cusr.style.width = 300 + "px";
  cusr.style.borderRadius = 0 + "px";
  cusr.style.mixBlendMode = "normal";
  cusr.style.transition = "all ease 0.5s";
  cusr.style.backgroundImage = "url('" + image + "')";
}

function mouseleave_page5() {
  cusr.style.height = 20 + "px";
  cusr.style.width = 20 + "px";
  cusr.style.borderRadius = 50 + "%";
  cusr.style.zIndex = 9;
  cusr.style.mixBlendMode = "difference";
  cusr.style.transition = "all ease 0s";
  cusr.style.backgroundImage = "url('')";
}

var div1 = document.querySelector("#page5_line1");
var div2 = document.querySelector("#page5_line2");
var div3 = document.querySelector("#page5_line3");
var div4 = document.querySelector("#page5_line4");
var div5 = document.querySelector("#page5_line5");

div1.addEventListener("mouseenter", () => {
  mouseEnter_page5("vlado-paunovic-iBG594vhR1k-unsplash.jpg");
});
div1.addEventListener("mouseleave", () => {
  mouseleave_page5();
});
//
div2.addEventListener("mouseenter", () => {
  mouseEnter_page5("austin-distel-tLZhFRLj6nY-unsplash.jpg");
});
div2.addEventListener("mouseleave", () => {
  mouseleave_page5();
  //
});
div3.addEventListener("mouseenter", () => {
  mouseEnter_page5(
    "Shlet_maximalism_hyper-detailed_anime_beautiful_lush_forest_vap_7e08f953-b922-4f07-b8a3-3b818fac85de.jpg"
  );
});
div3.addEventListener("mouseleave", () => {
  mouseleave_page5();
});
//
div4.addEventListener("mouseenter", () => {
  mouseEnter_page5(
    "Shlet_maximalism_hyper-detailed_anime_vaporwave_vibes_lofi_retr_cde21297-696b-4266-ad0b-acf7e3620959.jpg"
  );
});
div4.addEventListener("mouseleave", () => {
  mouseleave_page5();
});
//
div5.addEventListener("mouseenter", () => {
  mouseEnter_page5("alexander-grey-TZZwC_xsClY-unsplash.jpg");
});
div5.addEventListener("mouseleave", () => {
  mouseleave_page5();
});

gsap.to("#main", {
  backgroundColor: "#fff",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -130%",
    end: "top -137%",
    scrub: 2,
  },
});

gsap.from("#page1 h1, #page1 p", {
  delay: 0.5,
  opacity: 0,
  y: "8vw",
  duration: 1,
  stagger: 0.5,
  rotate: 10,
  delay: 0.6,
});

gsap.to(".line1", {
  x: -300,
  //   opacity: 0,
  scrollTrigger: {
    trigger: ".line1",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.to(".line2", {
  x: 300,
  scrollTrigger: {
    trigger: ".line2",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 35%",
    scrub: 3,
  },
});

gsap.to("#page1 video", {
  y: -110,
  //   height: "90%",
  width: "75%",
  scale: 1.2,
  scrollTrigger: {
    trigger: "#page1 video",
    scroller: "body",
    // markers: true,
    start: "top 78%",
    end: "top 40%",
    scrub: 3,
  },
});

gsap.from("#page2 .row", {
  opacity: 0,
  y: 100,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#page2 .row",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
    scrub: 4,
  },
});

gsap.to("#page3_container1", {
  y: -50,
  scrollTrigger: {
    trigger: "#page3_container1",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 50%",
    scrub: 3,
  },
});

gsap.to("#page3_container2", {
  y: -100,
  scrollTrigger: {
    trigger: "#page3_container2",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 60%",
    scrub: 3,
  },
});

gsap.to("#page3_container3", {
  y: -175,
  scrollTrigger: {
    trigger: "#page3_container3",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 80%",
    scrub: 3,
  },
});

gsap.to("#page3_container4", {
  y: -200,
  scrollTrigger: {
    trigger: "#page3_container4",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

gsap.to("#page4, #page3", {
  backgroundColor: "#000",
  color: "#fff",
  borderBottom: "1.5px solid #ffffff",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 40%",
    scrub: 2,
  },
});
