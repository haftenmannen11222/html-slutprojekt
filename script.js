document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});

function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showProduct(product) {
    const productDetails = {
        proteinpulver: {
            name: 'Proteinpulver',
            price: '400 kr/kg',
            description: 'Proteinpulver hjälper till att bygga och reparera muskelvävnad efter träning.'
        },
        kreatin: {
            name: 'Kreatin',
            price: '200 kr/500g',
            description: 'Kreatin hjälper till att förbättra muskelstyrka och uthållighet.'
        },
        bcaa: {
            name: 'BCAA',
            price: '300 kr',
            description: 'BCAA hjälper till att minska muskeltrötthet och påskyndar återhämtningen.'
        }
    };

    const details = productDetails[product];
    document.getElementById('product-details').innerHTML = `
        <h3>${details.name}</h3>
        <p>Pris: ${details.price}</p>
        <p>${details.description}</p>
    `;
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Vänligen fyll i alla fält i formuläret.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Vänligen ange en giltig e-postadress.");
        return false;
    }

    return true;
}
