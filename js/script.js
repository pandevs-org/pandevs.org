setTimeout(function () {
    document.querySelector('.main').classList.remove("d-none");
    document.querySelector('.arrow-svg').classList.add('d-none')
    document.querySelector('body').classList.remove('overflow-hidden')
}, 5000);

const t1 = gsap.timeline({ default: { ease: 'power4.out', duration: 5 } })

gsap.set('g', {
    autoApha: 1
})

// gsap.to('svg', {
//     scale: 1.2,
//     duration: 4
// })

t1
    .from('g', {
        xPercent: -50,
        ease: 'elastic.out(1, 0.5)'
    }, "-=.7")
    .to('svg', {
        duration: 0.7,
        rotation: 1080,
    })
    .to('#arrow', {
        duration: 0.7,
        yPercent: 30
    })
    .to('#arrow', {
        yPercent: -2000,
        ease: 'back.in(1)',
        duration: 2,
    }, "-=0.1")
    .to('#bow', {
        yPercent: 1000,
        ease: 'back.out(1)',
        duration: 1,
    }, "-=.1")
    .to('.reveal', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 2,
        ease: 'power4,inOut'
    }, "-=1.7")
