// gsap.to("#one", {
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration: 2
// })

    gsap.to(".imagecontainer", {
        ease: Expo.easeInOut,
        width: "100%",
        stagger: 2,
    });
    gsap.to(".text h1", {
        ease: Expo.easeInOut,
        stagger:2,
        top: "0%",
    })
    gsap.to(".text h1", {
        delay: 2,
        ease: Expo.easeInOut,
        stagger:2,
        top: "-100%",
    })


// document.addEventListener("DOMContentLoaded", function() {
//     gsap.registerPlugin(Expo);

//     document.querySelectorAll(".imagecontainer").forEach(function(elem, index) {
//         gsap.to(elem, {
//             width: "100%",
//             ease: Expo.easeInOut,
//             duration: 2,
//             delay: index * 0.5 // Adjust the delay based on your requirement
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     gsap.registerPlugin(Expo);

//     gsap.to(".imagecontainer", {
//         width: "100%",
//         ease: Expo.easeInOut,
//         duration: 2,
//         stagger: 0.5
//     });

//     gsap.from(".text h1", {
//         y: -100,
//         opacity: 0,
//         ease: Expo.easeInOut,
//         duration: 2,
//         stagger: 0.5
//     });
// });
