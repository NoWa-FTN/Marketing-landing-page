// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page loaded with animations!');
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    const pseudoInput = document.getElementById('pseudo');
    const emailInput = document.getElementById('email');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        const firstname = firstnameInput.value.trim();
        const lastname = lastnameInput.value.trim();
        const pseudo = pseudoInput.value.trim();
        const email = emailInput.value.trim();

        if (firstname === "" || lastname === "" || pseudo === "" || !validateEmail(email)) {
            message.textContent = "Veuillez remplir tous les champs correctement.";
            message.style.color = "red";
        } else {
            message.textContent = `Merci ${firstname} ${lastname} (${pseudo}) pour votre inscription ! 🎉`;
            message.style.color = "green";

            // Réinitialisation des champs
            firstnameInput.value = '';
            lastnameInput.value = '';
            pseudoInput.value = '';
            emailInput.value = '';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

