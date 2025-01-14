// Ensure the code runs only on wider screens (desktop or tablets)
if (window.innerWidth >= 768) {

    // Function to add mouse-based clipping effect to an image
    function home() {
        const img = document.querySelector('.img'); // Target the image
        const container = document.querySelector('.bg'); // Target the container element

        const minClipY = 0; // Minimum clip percentage for the Y-axis
        const maxClipY = 50; // Maximum clip percentage for the Y-axis

        // Event listener for mouse movement within the container
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect(); // Get container's position and size
            const relativeY = e.clientY - rect.top; // Calculate the Y position relative to the container
            const containerHeight = rect.height; // Get container height
            const percentageY = Math.min(
                maxClipY,
                Math.max(minClipY, (relativeY / containerHeight) * 100) // Constrain percentage between min and max
            );

            // Smoothly animate the clipping area of the image
            gsap.to(img, {
                clipPath: `polygon(0 ${percentageY}%, 100% ${percentageY}%, 100% 100%, 0% 100%)`,
                duration: 0.2,
                ease: "none",
                scale: 1.0 // Reset scale
            });
        });

        // Reset clipping and slightly zoom the image when the mouse leaves the container
        container.addEventListener('mouseleave', () => {
            gsap.to(img, {
                clipPath: `polygon(0 ${minClipY}%, 100% ${minClipY}%, 100% 100%, 0% 100%)`,
                duration: 0.5,
                ease: "power2.out",
                scale: 1.1 // Slight zoom effect
            });
        });
    }
    home();

    // Function to initialize mouse-following and magnetic effects
    function shery() {
        Shery.mouseFollower(); // Activate mouse follower
        Shery.makeMagnet(".magnet-target", {
            ease: "cubic-bezier(0.23, 1, 0.320, 1)", // Custom easing for the magnet effect
            duration: 1, // Duration of the magnet effect
        });
    }
    shery();
}

// Function to handle navigation menu animations
function nav() {
    const toggleButton = document.querySelector(".burger"); // Open menu button
    const overlay = document.querySelector(".overlay"); // Menu overlay
    const subNav = document.querySelector(".sub-nav"); // Sub-navigation container
    const menuItems = document.querySelectorAll(".menu-item p"); // Individual menu items
    const activeItem = document.querySelector(".menu-item p#active"); // Active menu item
    const toggleButton1 = document.querySelector(".burger1"); // Close menu button

    // Initial states for menu items and sub-nav
    gsap.set(menuItems, { y: 225 });
    gsap.set(subNav, { opacity: 0 });

    // Timeline for menu open/close animations
    const timeline = gsap.timeline({ paused: true });
    timeline
        .to(overlay, {
            duration: 1.5,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Expand overlay
            ease: "power4.inOut",
        })
        .to(menuItems, {
            duration: 1.5,
            y: 0, // Slide menu items into view
            ease: "power4.inOut",
            stagger: 0.2, // Stagger animation for each item
        }, "-=1") // Start at the same time as the overlay animation
        .to(activeItem, {
            "--after-width": "100%", // Highlight active item
            ease: "power4.inOut",
            duration: 1,
        }, "<") // Sync with menu item animation
        .to(subNav, {
            duration: 1,
            opacity: 1, // Fade in sub-nav
            bottom: "10%",
            y: 0,
            ease: "power4.inOut",
        }, "<");

    // Open menu
    toggleButton.addEventListener("click", function () {
        timeline.play(); // Play open animation
        toggleButton.classList.add("active"); // Highlight open button
        toggleButton1.classList.remove("active"); // Remove highlight from close button
    });

    // Close menu
    toggleButton1.addEventListener("click", function () {
        timeline.reverse(); // Reverse the animation to close menu
        toggleButton1.classList.add("active"); // Highlight close button
        toggleButton.classList.remove("active"); // Remove highlight from open button
    });
}
nav();

// Function to animate fade-in effects on elements with scrolling
function fadeIn() {
    const fadeInElements = document.querySelectorAll('.fade-in p'); // Target fade-in paragraphs

    fadeInElements.forEach((element) => {
        gsap.from(element, {
            opacity: 0, // Start fully transparent
            y: 50, // Start slightly below its position
            duration: 0.1, // Duration for each animation
            scrollTrigger: {
                trigger: element, // Element that triggers animation
                start: 'top bottom', // Start when element enters viewport
                end: 'top 70%', // End when element reaches 70% of viewport
                scrub: true, // Sync animation with scroll
                markers: false, // Debug markers (set to true for debugging)
                stagger: 0.5, // Delay between animations of consecutive elements
            }
        });
    });
}
fadeIn();

// Function to animate rounded and unrounded corners on scroll
function round() {
    // Animate top-left corner of `.round` element
    const element = document.querySelector('.round');
    gsap.to(element, {
        borderTopLeftRadius: '100%', // Fully round corner
        duration: 2, // Duration of animation
        ease: "power2.out", // Smooth easing
        scrollTrigger: {
            trigger: element, // Trigger element
            start: 'top 80%', // Start animation when element is 80% visible
            end: 'top 20%', // End animation when element is 20% visible
            scrub: 1, // Sync with scroll
        }
    });

    // Animate bottom-right corner of `.unround` element
    const element2 = document.querySelector('.unround');
    gsap.to(element2, {
        borderBottomRightRadius: '5%', // Slightly round corner
        duration: 2, // Duration of animation
        ease: "power2.out", // Smooth easing
        scrollTrigger: {
            trigger: element2, // Trigger element
            start: 'top 80%', // Start animation when element is 80% visible
            end: 'top 20%', // End animation when element is 20% visible
            scrub: 1, // Sync with scroll
        }
    });
}
round();
