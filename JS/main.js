

// Show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}







 const navLinks = document.querySelectorAll('.nav__link'); // Added dot prefix for class

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu'); // Corrected method name
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click', linkAction)); // Corrected variable name




const blurHeader = () => {
    const header = document.getElementById('header'); // Correct method name

    // Use window.scrollY instead of this.scrollY
    window.scrollY >= 50 ? header.classList.add('blur-header') // Consistent class name
                         : header.classList.remove('blur-header'); // Consistent class name
}

window.addEventListener('scroll', blurHeader);





const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_si6qaf9', 'template_afssy61','#contact-form','QxMWO5y8uqESfuOcb')
    .then(() => {
        contactMessage.textContent = 'Message successfully sent';
    })
    .catch(() => {
        contactMessage.textContent = 'Message not sent';
    });
};

contactForm.addEventListener('submit', sendEmail);






const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                   :scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll',scrollUp)





const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop-58,
            sectionId = current.getAttribute('id')
            sectionsClass = document.querySelector('.nav__menu[href*=' + sectionId +']')
   
    if(scrollY>sectionTop && scrolly <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    }else{
        sectionsClass.classList.remove('active-link')
    }
    })
}
window.addEventListener('scroll', scrollActive)


















