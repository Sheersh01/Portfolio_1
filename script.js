    
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

function nav(){
    
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
}
nav();

function fadeIn(){
    const fadeInElements = document.querySelectorAll('.fade-in p');

// Apply the fade-in animation with ScrollTrigger
fadeInElements.forEach((element) => {
  gsap.from(element, {
    opacity: 0,  // Initial opacity
    y: 50,       // Initial vertical position (optional)
    duration: 0.1,  // Duration of the animation
    scrollTrigger: {
      trigger: element,  // The element that triggers the animation
      start: 'top bottom',   // When to start the animation (when the element reaches 80% from the top)
      end: 'top 70%',     // Optional, where the animation ends
      scrub: true,        // Smooth scrubbing
      markers: false,
      stagger:0.5     // Set to true to see scroll markers (optional)
    }
  });
});

}
fadeIn();

function round(){
    
const element = document.querySelector('.round');

gsap.to(element, {
    borderTopLeftRadius: '100%', // Target value for border-radius
    duration: 2,                 // Add duration for smoothness
    ease: "power2.out",          // Ease out for smooth animation
    scrollTrigger: {
      trigger: element,           // The element that triggers the animation
      start: 'top 80%',            // When the animation should start (when the element reaches 80% from top)
      end: 'top 20%',              // Optional, where the animation ends
      scrub: 1,                    // Scrub value to make the animation follow scroll position smoothly
    //   markers: true               // Set to true to see scroll markers (optional)
    }
  });
}
round();

function shery(){
    
  Shery.mouseFollower();
  Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
shery();
