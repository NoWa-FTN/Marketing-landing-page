document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("download-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const rgpdCheckbox = document.getElementById("rgpd-checkbox");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name === "" || !validateEmail(email)) {
            message.textContent = "⚠️ Veuillez entrer un nom et un email valide.";
            message.style.color = "red";
        } else if (!rgpdCheckbox.checked) {
            message.textContent = "⚠️ Vous devez accepter la politique de confidentialité.";
            message.style.color = "red";
        } else {
            message.textContent = `✅ Merci ${name}, votre téléchargement est prêt !`;
            message.style.color = "green";
            nameInput.value = "";
            emailInput.value = "";
            rgpdCheckbox.checked = false;
        }
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
    }
});
