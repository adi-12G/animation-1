var tl = gsap.timeline()

tl.from("nav h1 , nav h4", {
  y:-30,
  opacity:0,
  delay:1,
  duration:1,
  stagger:0.15
})
tl.from(".center-part1 h1",{
  x:-300,
  opacity:0,
  duration:0.4
})
tl.from(".center-part1 p",{
  x:-100,
  opacity:0,
  duration:0.4
})
tl.from(".center-part1 button",{
  x:-100,
  opacity:0,
  duration:0.4
})
tl.from(".center-part2 img",{

  opacity:0,
  duration:0.5
}, "-=1")

tl.from(".section1bottom img",{
  opacity:0,
  duration:0.6,
  stagger:0.15,
  y:30
})

tl.from(".services h3",{
  x:-100,
  opacity:0,
  duration:0.5
})