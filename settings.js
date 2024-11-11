// Focus the button when the page loads
window.onload = function() {
    document.getElementById('togprofbtn').focus();
};

const buttonContainer = document.getElementById('buttonContainer');

// Get the divs corresponding to the buttons
const divs = {
    'togprofbtn': document.getElementById('profbtn'),
    'togprofbtn1': document.getElementById('profbtn1'),
    'togprofbtn2': document.getElementById('profbtn2'),
    'togprofbtn3': document.getElementById('profbtn3'),
    'togprofbtn4': document.getElementById('profbtn4'),
    'togprofbtn5': document.getElementById('profbtn5'),
    'togprofbtn6': document.getElementById('profbtn6'),
    'togprofbtn7': document.getElementById('profbtn7')
};

// Function to initialize the div state
function loadDivState() {
    Object.keys(divs).forEach(id => {
        const state = localStorage.getItem(id); // Get saved state from localStorage
        if (state === 'open') {
            divs[id].classList.add('sde-open'); // Open the div if previously open
        } else if (state === 'closed') {
            divs[id].classList.remove('sde-open'); // Ensure div is closed if previously closed
        } else if (id === 'togprofbtn') {
            // Default behavior: open the first div on first load if no state is saved
            divs[id].classList.add('sde-open');
        }
    });
}

// Save the state to localStorage when a div is opened or closed
function saveDivState(id, isOpen) {
    localStorage.setItem(id, isOpen ? 'open' : 'closed');
}

// Event listener to handle button focusing and opening divs
buttonContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const divId = event.target.id;

        // Toggle the clicked div
        Object.keys(divs).forEach(id => {
            if (id === divId) {
                divs[id].classList.toggle('sde-open');
                saveDivState(id, divs[id].classList.contains('sde-open')); // Save state
            } else {
                divs[id].classList.remove('sde-open');
                saveDivState(id, false); // Save state
            }
        });
    }
});