// Get all elements with the class 'fade-element'
const elements = document.querySelectorAll('.section');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        // rect.top >= 0 &&
        rect.bottom <= ((1.5* window.innerHeight)|| document.documentElement.clientHeight)
    );
}

function handleScroll() {
    sections.forEach(section => {
        const subsections = section.querySelectorAll('.subsec_container');
        if (isInViewport(section)) {
            // Fade in each subsection
            subsections.forEach(subsection => {
                subsection.style.opacity = 1;
            });
        } else {
            // Set opacity to 0 when not in viewport
            subsections.forEach(subsection => {
                subsection.style.opacity = 0;
            });
        }
    });
}

// Function to handle scroll event
function handleScroll() {
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.style.opacity = 1;
        } else {
            element.style.opacity = 0;
        }
    });
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();



// TO FIX
// 1.   The fading out effect happen too soon when scrolling out,
//      Make it fade out only when the section is almost entirely out of the page