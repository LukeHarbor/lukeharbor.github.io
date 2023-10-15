gsap.registerPlugin(ScrollTrigger);

//gsap.from('.dest1', { duration: 1, x: '-100%' });
gsap.from('.navL a', { duration: 1.2, opacity: 0, stagger: .4 });
gsap.from('.navR a', { duration: 0.8, opacity: 0, delay: 0.4  , stagger: -.4 });
gsap.from('.tog', { duration: 0.4, opacity: 0 });
gsap.from('.logo img', { duration: 2, opacity:0, delay: 1});
//gsap.from('.hero img', { duration: 2, width: '0%', height:'0%' })

gsap.from('.dest1', {
    duration: 1,
    x: '-100%',
    scrollTrigger: {
        trigger:'.dest1',
        start: "bottom bottom"
        }
});

gsap.from('.dest2', {
    duration: .3,
    x: '100%',
    scrollTrigger: {
        trigger: '.dest2',
        start: "bottom bottom"
    }
});

gsap.from('.dest2 h2', {
    duration: .4,
    delay:.2,
    opacity: 0,
    x:'25%',
    scrollTrigger: {
        trigger: '.dest2',
        start: "bottom bottom"
    }
});

gsap.from('.last', {
    duration: .4,
    delay: .4,
    opacity: 0,
    x: '25%',
    scrollTrigger: {
        trigger: '.dest2',
        start: "bottom bottom"
    }
});
gsap.to('.disc', {
    duration: .0,
    delay: .8,
    opacity: 1,
    //rotateZ:'-120deg',
   // x: '25%',
    scrollTrigger: {
        trigger: '.dest2',
        start: "bottom bottom"
    }
});





  
