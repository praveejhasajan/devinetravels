/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// Get elements
const infoButton = document.getElementById('openInfoForm'); 
// Target the button with the ID 'openInfoForm'
const infoButton1 = document.getElementById('openInfoForm1'); 
const infoButton2 = document.getElementById('openInfoForm2'); 
const infoButton3 = document.getElementById('openInfoForm3'); 
const infoButton4 = document.getElementById('openInfoForm3'); 


const infoForm = document.getElementById('infoForm');
const closeForm = document.getElementById('closeForm');

// Show form when button is clicked
infoButton.addEventListener('click', function() {
    infoForm.style.display = 'block';
});
// Show form when button is clicked
infoButton1.addEventListener('click', function() {
    infoForm.style.display = 'block';
});// Show form when button is clicked
infoButton2.addEventListener('click', function() {
    infoForm.style.display = 'block';
});// Show form when button is clicked
infoButton3.addEventListener('click', function() {
    infoForm.style.display = 'block';
});// Show form when button is clicked
infoButton4.addEventListener('click', function() {
    infoForm.style.display = 'block';
});
// Hide form when close button is clicked
closeForm.addEventListener('click', function() {
    infoForm.style.display = 'none';
});

function openInfoForm(placeName) {
    // Logic to open the form and display information about the selected place
    console.log(`Opening form for ${placeName}`);
    // Implement your form opening logic here
}

function openInfoForm1(placeName) {
    // Logic to open the form and display information about the selected place
    console.log(`Opening form for ${placeName}`);
    // Implement your form opening logic here
}
function openInfoForm2(placeName) {
    // Logic to open the form and display information about the selected place
    console.log(`Opening form for ${placeName}`);
    // Implement your form opening logic here
}
function openInfoForm3(placeName) {
    // Logic to open the form and display information about the selected place
    console.log(`Opening form for ${placeName}`);
    // Implement your form opening logic here
}
function openInfoForm4(placeName) {
    // Logic to open the form and display information about the selected place
    console.log(`Opening form for ${placeName}`);
    // Implement your form opening logic here
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})
function openPopup(pdfFile) {
    const popup = document.getElementById('pdfPopup');
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = pdfFile; // Set the PDF file path
    popup.style.display = 'block'; // Show the pop-up
}

function closePopup() {
    const popup = document.getElementById('pdfPopup');
    const pdfViewer = document.getElementById('pdfViewer');
    popup.style.display = 'none'; // Hide the pop-up
    pdfViewer.src = ''; // Clear the iframe src
}

/*==================== DARK LIGHT THEME ====================*/

// Get the theme button element
const themeButton = document.getElementById('theme-button');

// Define the classes for dark theme and icon
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';  // This should be the icon for the light theme

// Retrieve the previously selected theme and icon from localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Function to get the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// Function to get the current icon
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line';

// Apply the previously selected theme and icon if available
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Add an event listener to the theme button to toggle theme and icon
themeButton.addEventListener('click', () => {
  // Toggle dark theme class on the body
  document.body.classList.toggle(darkTheme);

  // Toggle icon class on the theme button
  themeButton.classList.toggle(iconTheme);

  // Save the current theme and icon in localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
  
}
);
