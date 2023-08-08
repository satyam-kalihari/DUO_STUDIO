//from locomotive scroll trigger codepen
// function init() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector("#main").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }

// init();

//mini circe ko mouse pointer ke sath move karva ne ke liye
var main = document.querySelector("#main");
function mouseMove(xscale, yscale) {
  var cusr = document.querySelector(".cursor");
  document.addEventListener("mousemove", function (dets) {
    cusr.style.transform = `translate(${dets.clientX + 5}px, ${
      dets.clientY + 5
    }px) scale(${xscale}, ${yscale})`;
  });
}
//mouse move hoto sathi hi sath chapta bhi ho
var timeout;
function mouseChapta() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", (dets) => {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(1, 1.5, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    mouseMove(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(".cursor").style.transform = `translate(${
        dets.clientX + 5
      }px, ${dets.clientY + 5}px) scale(1, 1)`;
    }, 100);
  });
}
//nay menu me hover karne se uska ek saperate page aa jaye uske liye
function nav_page() {
  var nav_div_h1 = document.querySelectorAll(".nav_div_h1");
  var nav_page = document.querySelector("#nav_page");
  var nav_menu_p = document.querySelectorAll("#menu p");

  nav_menu_p.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      nav_page.style.display = "flex";
      nav_div_h1.forEach(function (e) {
        var menuName = elem.getAttribute("menu-name"); //using user deffined attribute
        e.innerHTML = menuName + " " + menuName;
      });
    });

    elem.addEventListener("mouseleave", function () {
      nav_page.style.display = "none";
    });
  });
}
//MOUSE ENTER ON VIDEO
function mouseEnterOnVideo() {
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
}
//PAGE 2
function page2() {
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
}
//PAGE 3
function page3() {
  var cusr = document.querySelector(".cursor");
  function mouseEnter_page5(image) {
    cusr.style.height = 300 + "px";
    cusr.style.width = 300 + "px";
    cusr.style.borderRadius = 0 + "px";
    cusr.style.mixBlendMode = "normal";
    cusr.style.backgroundImage = "url('" + image + "')";
  }

  function mouseleave_page5() {
    cusr.style.height = 20 + "px";
    cusr.style.width = 20 + "px";
    cusr.style.borderRadius = 50 + "%";
    cusr.style.zIndex = 9;
    cusr.style.mixBlendMode = "difference";
    cusr.style.backgroundImage = "url('')";
  }

  var div1 = document.querySelector("#page5_line1");
  var div2 = document.querySelector("#page5_line2");
  var div3 = document.querySelector("#page5_line3");
  var div4 = document.querySelector("#page5_line4");
  var div5 = document.querySelector("#page5_line5");

  div1.addEventListener("mouseenter", () => {
    mouseEnter_page5("vlado-paunovic-iBG594vhR1k-unsplash.jpg");
    div1.addEventListener("mouseleave", () => {
      mouseleave_page5();
    });
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
}

mouseMove();
mouseChapta();
nav_page();
mouseEnterOnVideo();
page2();
page3();

//PAGE 6 CIRCLE
// function big_circle_chapta() {
//   var bigCircle = document.querySelector("#touch");

//   var xscale = 1;
//   var yscale = 1;

//   var xprev = 0;
//   var yprev = 0;

//   window.addEventListener("mousemove", (dets) => {
//     clearTimeout(timeout);
//     xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//     yscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - yprev);

//     xprev = dets.clientX;
//     yprev = dets.clientY;

//     bigCircle.style.transform = `scale(${yscale},${xscale})`;
//     // bigCircle.style.backgroundColor = "red";

//     timeout = setTimeout(function () {
//       bigCircle.style.transform = ` scale(1, 1)`;
//     }, 100);
//   });
// }
// big_circle_chapta();

//////////////

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

gsap.to("#main", {
  backgroundColor: "#fff",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
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
