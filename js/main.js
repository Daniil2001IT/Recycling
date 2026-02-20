


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.SD_inner-effect').classList.add('SD_inner__text--visible');
    }, 300); 
});



const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 }); 


document.querySelectorAll('.SD_bonuses, footer').forEach(el => {
    appearOnScroll.observe(el);
});



