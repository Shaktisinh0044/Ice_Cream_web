var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#s1",
    start:"0% 80%",
    end:"50% 50%",
    scrub:true,
  }
})

var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:"#s2",
    start:"0% 80%",
    end:"50% 50%",
    scrub:true,
  }
})

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#s3",
    start:"0% 65%",
    end:"50% 50%",
    scrub:true,
  }
})

tl.to(".hero-center-image",{
  top:"130%",
  width:"15vw",
  rotate:"0",
  left:"52%",

})

tl1.to(".hero-center-image",{
  top:"228%",
  width:"10vw",
  rotate:"0",
  left:"28%",

})

tl2.to(".hero-center-image",{
  top:"285%",
  width:"17vw",
  rotate:"0",
  left:"32%",
  rotate:"-55deg"

})

