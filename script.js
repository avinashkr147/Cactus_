var tl = gsap.timeline()
tl.from(".nav>.logo",{

    opacity:0,
    scale:1.1,
    duration:1,
    delay:0.5,
    stagger:0.5,
    
})
tl.from(".nav>.nav-option,.signup-area",{

    opacity:0,
  y:-100,
    duration:1,
    delay:0.5,
    stagger:0.5,
    
})
tl.from(".main-cactus-area>img",{

    opacity:0,
//   y:-100,
    duration:1,
    // delay:0.5,
    // stagger:0.5,
    yoyo:true,
    repeat:-1,

    
})

tl.from(".main-cactus-right",{

     
  x:200,
    duration:1,
    opacity:1,
    stagger:0.5,

    
})
tl.to("#shop-btn>a .ri-arrow-right-line",{

     
    x:200,
    duration:0.5,
    delay:0.5,
    repeat:-1,
    // opacity:0,
    yoyo:true,
    color:"red",
      
  })




gsap.from(".left-side-container>div h1",{
       scale:-1.2,
      duration:5,
      opacity:1,
    //   delay:2,
      stagger:0.5,
      repeat:-1,  
  
      
  })


  gsap.from(".right-side-container>#cactus-1",{
    
   duration:1,
   opacity:0,
  x:100,
 //   delay:2,
   stagger:0.5,
   repeat:-1,
   yoyo:true,  

   
})
gsap.from(".right-side-container>#cactus-2",{
    
    duration:1,
    opacity:0,
   y:100,
  //   delay:2,
    stagger:0.5,
    repeat:-1,
    yoyo:true,  
 
    
 })

 gsap.from(".right-side-container>#cactus-3",{
    
    duration:1,
    opacity:0,
   y:-100,
  //   delay:2,
    stagger:0.5,
    repeat:-1,
    yoyo:true,  
 
    
 })

 gsap.from(".care_image_right_content_container>i",{
    
    duration:2,
    opacity:0,
   x:-300,
    // delay:2,
    stagger:0.5,
    repeat:-1,
    // yoyo:true,  
 
    
 })
 gsap.from(".care_image_container>img",{
    
  duration:2,
  opacity:0,
 y:-100,
  // delay:2,
  stagger:0.5,
  repeat:-1,
  yoyo:true,  

  
})



gsap.from(".footer-container1 .footer_container_head1",{
  x:-200,
  // y:300,
    opacity:0,
// repeat:-1
  duration:2,
  // rotate:360,

  // backgroundColor:"yellow",
  // scale:0,

  scrollTrigger:{
   trigger:".footer-container1 .footer_container_head1"  ,
    scroller:"body",
    markers:true,
      start:"top 60%",
      end:"top 30%",
      scrub:true,
      scrub:2,
  }
})