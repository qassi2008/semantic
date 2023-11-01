document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the DOM is fully loaded
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Read more clicked!');
        });
    });
});
