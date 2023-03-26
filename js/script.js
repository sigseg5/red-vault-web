// Change the main image on button hover
const button = document.getElementById('about-btn');
const logo = document.getElementById('main-logo');

button.addEventListener('mouseenter', () => {
    logo.src = 'images/logo/main-logo-changed.svg';
});

button.addEventListener('mouseleave', () => {
    logo.src = 'images/logo/main-logo-def.svg';
});

// Smooth scroll to second section
function scrollToSection() {
    var section = document.getElementById("second-section");
    section.scrollIntoView({
        behavior: "smooth"
    });
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

// Copy code action
const sp = document.querySelector('.copy-code');
const target = document.querySelector('.code-inner');

sp.addEventListener('click', () => {
    const textToCopy = target.textContent.replace(/\t/g, '').replace(/ {2,}/g, ' ');
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    textarea.select();
    // TODO: Fix deprecated 'execCommand()'
    document.execCommand('copy');
    document.body.removeChild(textarea);
    sp.textContent = 'Copied!';
});
