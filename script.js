if(window.innerWidth>=768){

    function home(){
        const img = document.querySelector('.img');
    const container = document.querySelector('.bg');
    
    const minClipY = 0;
    const maxClipY = 50; 
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const relativeY = e.clientY - rect.top;
        const containerHeight = rect.height;
        const percentageY = Math.min(
            maxClipY,
            Math.max(minClipY, (relativeY / containerHeight) * 100)
        );
    
        gsap.to(img, {
            clipPath: `polygon(0 ${percentageY}%, 100% ${percentageY}%, 100% 100%, 0% 100%)`,
            duration: 0.2,
            ease: "none",
            scale: 1.0
        });
    });
    
    container.addEventListener('mouseleave', () => {
        gsap.to(img, {
            clipPath: `polygon(0 ${minClipY}%, 100% ${minClipY}%, 100% 100%, 0% 100%)`,
            duration: 0.5,
            ease: "power2.out",
            scale: 1.1
        });
    });
    
    }
    home();

    function shery(){
    
        Shery.mouseFollower();
        Shery.makeMagnet(".magnet-target", {
       
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          duration: 1,
        });
      }
      shery();
      
}


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
        "--after-width": "100%",
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
        timeline.play(); 
        toggleButton.classList.add("active"); 
        toggleButton1.classList.remove("active");
});

toggleButton1.addEventListener("click", function () {
        timeline.reverse(); 
        toggleButton1.classList.add("active"); 
        toggleButton.classList.remove("active"); 
});
}
nav();

function fadeIn(){
    const fadeInElements = document.querySelectorAll('.fade-in p');

fadeInElements.forEach((element) => {
  gsap.from(element, {
    opacity: 0, 
    y: 50,      
    duration: 0.1, 
    scrollTrigger: {
      trigger: element, 
      start: 'top bottom',  
      end: 'top 70%',    
      scrub: true,        
      markers: false,
      stagger:0.5     
    }
  });
});

}
fadeIn();

function round(){
    
const element = document.querySelector('.round');
gsap.to(element, {
    borderTopLeftRadius: '100%', 
    duration: 2,                
    ease: "power2.out",        
    scrollTrigger: {
      trigger: element,          
      start: 'top 80%',           
      end: 'top 20%',              
      scrub: 1,                  
    }
  });

  const element2 = document.querySelector('.unround');
  gsap.to(element2, {
      borderBottomRightRadius: '5%',
      duration: 2,                
      ease: "power2.out",       
      scrollTrigger: {
        trigger: element2,          
        start: 'top 80%',            
        end: 'top 20%',              
        scrub: 1,                  
      }
    });
  
}
round();
