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
    // Create a temporary textarea element to hold the text to copy
    const textarea = document.createElement('textarea');
    textarea.value = target.textContent;
    document.body.appendChild(textarea);

    // Select and copy the text from the temporary textarea element
    textarea.select();
    // TODO: Fix deprecated 'execCommand()'
    document.execCommand('copy');
    document.body.removeChild(textarea);
    sp.textContent = 'Copied!';
});
