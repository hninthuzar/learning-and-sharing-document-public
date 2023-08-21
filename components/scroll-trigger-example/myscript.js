gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    start: "center center",
    end: "bottom top",
    markers: true,
    scrub: true,
    pin: true
  }
})
.from (".text1", {x: innerWidth * 1})
.from (".text2", {x: innerWidth * -1})
.from (".text3", {x: innerWidth * 1})
.from (".logo", {
  y: innerHeight * 1, 
  rotate: 360
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".box2",
    start: "center center",
    end: "bottom top",
    markers: true,
    scrub: true,
    pin: true
  }
})
.from (".box2", {opacity: 0})
.from (".text4", {y: innerHeight * 1})
.from (".text5", {y: innerHeight * 1})
.from (".text6", {y: innerHeight * 1})