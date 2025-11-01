document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (email === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
        message.style.color = "red";
        message.textContent = "Veuillez entrer une adresse email valide.";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Inscription réussie ! 🎉";
});
