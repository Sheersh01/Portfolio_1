// function loco(){
//     gsap.registerPlugin(ScrollTrigger);
    
//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);
    
//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });
    
//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
//   }
//   loco()
    
function home(){
    const img = document.querySelector('.img');
const container = document.querySelector('.bg');

// Minimum and maximum limits for clip-path
const minClipY = 0; // Minimum: top of the container
const maxClipY = 50; // Maximum: 50% of the container height

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    const containerHeight = rect.height;

    // Calculate and clamp the clip-path percentage
    const percentageY = Math.min(
        maxClipY,
        Math.max(minClipY, (relativeY / containerHeight) * 100)
    );

    gsap.to(img, {
        clipPath: `polygon(0 ${percentageY}%, 100% ${percentageY}%, 100% 100%, 0% 100%)`,
        duration: 0.2, // Shorter duration for more responsiveness
        ease: "none",
        scale: 1.0
    });
});

container.addEventListener('mouseleave', () => {
    // Smoothly reset clip-path to its original state
    gsap.to(img, {
        clipPath: `polygon(0 ${minClipY}%, 100% ${minClipY}%, 100% 100%, 0% 100%)`,
        duration: 0.5,
        ease: "power2.out",
        scale: 1.1
    });
});

}
home();

// function imgSlides(){

    
// gsap.to(".fleftelem",{
//     scrollTrigger:{
//         trigger:"#fimages",
//         pin:true,
//         start:"top top",
//         end:"bottom bottom",
//         endTrigger:".last",
//         scrub:1
//     },
//     y:"-300%",
//     ease:Power1
// })
// let sections = document.querySelectorAll(".fleftelem");
// Shery.imageEffect("#images", {
//     style: 5,
//     config:{onMouse:{value:1}},
//     slideStyle: (setScroll) => {
//         sections.forEach(function(section,index) {
//         ScrollTrigger.create({
//             trigger: section,
//             start:"top top",
//             scrub:1,
//             // markers:true,
//             onUpdate: function(prog){
//                 setScroll(prog.progress+index)
//             },
//         });
//     });
//     },
//   });
// }
// imgSlides();

// function setupSticky() {
//     // Pin the header and add a Y-translate animation
//     gsap.to("#stickyHeader", {
//       y: 0, // Translates to its original position
//       scrollTrigger: {
//         trigger: "stickyTop",
//         scroller:"#main",
//         start: "top top", // Start pinning when header reaches the top
//         end: "bottom top", // Adjust this based on the scrollable content
//         pin: true, // Pins the element during the specified range
//         scrub: true, // Smoothly animates as you scroll
//         markers: true, // Remove in production; helps debug
//       },
//     });
//   }
  
//   setupSticky();

const toggleButton = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const subNav = document.querySelector(".sub-nav");
const menuItems = document.querySelectorAll(".menu-item p");
const activeItem = document.querySelector(".menu-item p#active");
const toggleButton1 = document.querySelector(".burger1");


gsap.set(menuItems, { y: 225 });
gsap.set(subNav, { opacity: 0 });
const timeline = gsap.timeline({ paused: true });
timeline
.to(overlay, {
        duration: 1.5,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
})
.to(menuItems, {
        duration: 1.5,
        y: 0,
        ease: "power4.inOut",
        stagger: 0.2,
}, "-=1")
.to(activeItem, {
        "--after-width": "100%", // Animate the custom property
        ease: "power4.inOut",
        duration: 1,
}, "<")
.to(subNav, {
        duration: 1,
        opacity: 1,
        bottom: "10%",
        y: 0,
        ease: "power4.inOut",
}, "<");

toggleButton.addEventListener("click", function () {
        timeline.play(); // Play the overlay animation
        toggleButton.classList.add("active"); // Switch to close icon
        toggleButton1.classList.remove("active"); // Switch to close icon
});

toggleButton1.addEventListener("click", function () {
        timeline.reverse(); // Play the overlay animation
        toggleButton1.classList.add("active"); // Switch to close icon
        toggleButton.classList.remove("active"); // Switch to close icon
});