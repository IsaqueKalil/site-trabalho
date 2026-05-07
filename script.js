function toggleTheme() {
    document.documentElement.classList.toggle("dark-mode");

    if (document.documentElement.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

const form = document.getElementById("form-contato");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const status = document.getElementById("msg-status");

        if (nome === "" || email === "" || mensagem === "") {
            status.textContent = "Preencha todos os campos!";
            status.style.color = "red";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            status.textContent = "Email inválido!";
            status.style.color = "red";
            return;
        }

        status.textContent = "Mensagem enviada com sucesso!";
        status.style.color = "green";

        form.reset();
    });
}