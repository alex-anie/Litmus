const leftEle = document.querySelectorAll('.left');
const rightEle = document.querySelectorAll('.right');
const topEle = document.querySelector('#top');

console.log(topEle)

// ObseverLeft listening for the slide-in-left
const observerLeft = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle('slide-in-left', entry.isIntersecting)
    })
}, {
})

leftEle.forEach(ele =>{
    observerLeft.observe(ele)
})


// Obsever listening for the slide-in-right
const observerRight = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle('slide-in-right', entry.isIntersecting)
    })
}, {
})

rightEle.forEach(ele =>{
    observerRight.observe(ele)
})


// Obsever listening for the slide-in-up
const observerTop = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle('slide-in-top', entry.isIntersecting)

        // Prevent the observer from intersecting
        if(entry.isIntersecting) observerTop.unobserve(entry.target)
    })
}, {
})

observerTop.observe(topEle);
