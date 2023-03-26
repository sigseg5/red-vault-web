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

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            sp.textContent = 'Copied!';
            setTimeout(() => {
                sp.textContent = 'Copy Code';
            }, 1000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});
