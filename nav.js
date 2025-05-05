// Get the elements
const hideButton = document.getElementById('navbar');
const elementToHide = document.getElementById('Main');

// Add click event listener to the button
hideButton.addEventListener('click', function() {
    if (elementToHide.style.display === 'none') {
        elementToHide.style.display = 'block';
    } else {
        elementToHide.style.display = 'none';
    }
});