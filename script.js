
var timeout;
const scroll = new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth:true
}) ;
function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }

  function circleChaptaKaro(){
    //define default scale value 

    var xscale = 1;
    var yscale = 1;

    var xpre = 0;
    var ypre = 0;

    window.addEventListener("mousemove",function(dets){

        this.clearTimeout(timeout);

var xdiff = dets.clientX - xpre;
var ydiff = dets.clientY - ypre;

xscale = gsap.utils.clamp(.8,1.2,xdiff);
yscale = gsap.utils.clamp(.8,1.2,ydiff);

xpre = dets.clientX;
ypre = dets.clientY;

circleMouseFollower(xscale,yscale);

timeout = setTimeout(function(){
     document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
},100)
    });
  }

function circleMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }

 circleMouseFollower();
 circleChaptaKaro();
 firstPageAnim();

//  document.querySelectorAll(".elem").forEach(function(elem){
//     var rotate = 0;
//     var diffrot = 0;

//     elem.addEventListener("mouseleave",function(dets){
//         gsap.to(elem.querySelector("img"),{
//             opacity:1,
//             ease:Power3,
//             duration:0.5,
 
//     });
//     });
//     elem.addEventListener("mousemove",function(dets){
//         var diff = dets.clientX -elem.getBoundingClientRect().top;
//         diffrot = dets.clientX - rotate;
//         rotate = dets.clientX;
//         gsap.to(elem.querySelector("img"),{
//             opacity:1,
//             ease:Power3,
//             top: diff,
//             left: dets.clientX,
//             rotate: gsap.utils.clamp(-20 , 20,diffrot * 0.5),
//         });
//     });
//     });

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });