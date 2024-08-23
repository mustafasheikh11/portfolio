gsap.from(".left", {
    opacity: 0,
    duration: 1.2,
    x: -90
})
gsap.from(".text", {
    opacity: 0,
    duration: 1.2,
    y: 90,
})
gsap.from(".page-2 p, .page-2 h1, .page-2 #cards", {
    opacity: 0,
    stagger: 0.5,
    x: -90,

})
gsap.from(".bar", {
    opacity: 0,
    stagger: 1,
    y: -100,
})
