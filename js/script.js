document.addEventListener("DOMContentLoaded", function() {
    // Load base.html content
    fetch('base.html')
        .then(response => response.text())
        .then(baseData => {
            // Create a temporary element to hold the base content
            const baseTemplate = document.createElement('div');
            baseTemplate.innerHTML = baseData;

            // Extract header, footer, and main content
            const header = baseTemplate.querySelector('header');
            const footer = baseTemplate.querySelector('footer');

            // Insert header and footer into the current document
            document.body.insertBefore(header, document.body.firstChild);
            document.body.appendChild(footer);

            // Load the page-specific content
            const pageContent = document.getElementById('page-content').innerHTML;
            document.getElementById('content').innerHTML = pageContent;

            // Cleanup
            baseTemplate.remove();
            document.getElementById('page-content').remove();

            // Activate navigation links (if any specific logic is needed)
            activateNavigation();
        });

    // Function to activate navigation links if needed
    function activateNavigation() {
        // Example: Add active class to current page link
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
});
