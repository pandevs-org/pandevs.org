window.addEventListener('load', () => {
    hidePreloader() 
})

function hidePreloader() {
    setTimeout(function () {
        document.querySelector('.main').classList.remove("d-none");
        document.querySelector('.loader').classList.add('d-none')
        document.body.style.cssText = `
        background-image: none;
        background-color: #5A382C;
        overflow-y: auto;`;
    }, 2900);

    const t1 = gsap.timeline({ default: { ease: 'power4.out', duration: 5 } })

    gsap.set('g', {
        autoAlpha: 1
    })

    t1
        .to('svg', {
            duration: 0.7,
            rotation: 1080,
        })
        .to('#arrow', {
            duration: 1,
            yPercent: 40
        })
        .to('#arrow', {
            yPercent: -1000,
            duration: 2.5,
        }, "-=0.1")
        .to('#bow', {
            y: 30,
            scaleY: 0,
            stagger: .03,
            opacity: 0,
            duration: 0.2
        }, "-=2.6")
        .to('.loader', {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 1,
            ease: 'power4,inOut'
        }, "-=2.6")
        .from('.home-heading', {
            yPercent: -50,
            stagger: .03,
            scaleY: 0.5,
            opacity: 0
        }, "-=0.5")
}