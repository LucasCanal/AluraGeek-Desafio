function validateEmail() {
    const emailInput = document.getElementById('newsletter-email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailInput.value.trim())) {
        alert("E-mail válido! Obrigado por se inscrever.");
        emailInput.value = "";
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
}