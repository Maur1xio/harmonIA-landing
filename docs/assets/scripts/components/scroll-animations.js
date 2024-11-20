export function scrollAnimationStart() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) entry.target.classList.add('show');
            else entry.target.classList.remove('show');
        })
    })
    const hiddenElementsR = document.querySelectorAll('.hidden-right');
    const hiddenElementsL = document.querySelectorAll('.hidden-left');
    hiddenElementsR.forEach((el) => observer.observe(el));
    hiddenElementsL.forEach((el) => observer.observe(el));
}