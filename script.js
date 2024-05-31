// Get modal element
var modal = document.getElementById("paymentModal");

// Get open modal buttons
var buyButtons = document.querySelectorAll('button[onclick^="checkout"]');

// Get close button
var closeButton = document.getElementsByClassName("close")[0];

// Open modal
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = "block";
    });
});

// Close modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Close modal if outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Betalning genomförd!');
    modal.style.display = "none";
});
