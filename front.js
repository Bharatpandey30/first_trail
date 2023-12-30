// front.js

document.addEventListener("DOMContentLoaded", function() {
    // Add click event listeners to all elements with the class "rotate-image"
    const images = document.querySelectorAll(".rotate-image");
    
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            // Toggle the "rotate" class on the parent container
            this.closest('.container').classList.toggle("rotate");

            // Find the corresponding text element
            const textElement = this.nextElementSibling;

            // Toggle the "show-text" class on the text element
            textElement.classList.toggle("show-text");

            // Toggle the "hide-image" class on the image
            this.classList.toggle("hide-image");
        });
    });
});
