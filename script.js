// ======================================================
// AGRINHO 2026 - SCRIPT JS
// Interatividade do site "Agro forte, futuro sustentável"
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 1. MENU SUAVE (SCROLL)
    // =========================
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // =========================
    // 2. BOTÕES DA HOME
    // =========================
    const btnSaibaMais = document.querySelector("#home button:nth-of-type(1)");
    const btnVideo = document.querySelector("#home button:nth-of-type(2)");
    const btnCalculadora = document.querySelector("#home button:nth-of-type(3)");

    if (btnSaibaMais) {
        btnSaibaMais.addEventListener("click", () => {
            alert("O agronegócio sustentável une produção e preservação ambiental!");
        });
    }

    if (btnVideo) {
        btnVideo.addEventListener("click", () => {
            window.open("https://www.youtube.com/results?search_query=agronegócio+sustentável", "_blank");
        });
    }

    if (btnCalculadora) {
        btnCalculadora.addEventListener("click", () => {
            calcularImpacto();
        });
    }


    // =========================
    // 3. CALCULADORA SIMPLES DE IMPACTO
    // =========================
    function calcularImpacto() {
        const hectares = prompt("Quantos hectares sua produção possui?");

        if (!hectares || isNaN(hectares)) {
            alert("Por favor, insira um número válido.");
            return;
        }

        const impacto = hectares * 2.5; // valor simbólico educativo

        alert(`Estimativa de impacto ambiental: ${impacto.toFixed(2)} unidades.\nPráticas sustentáveis podem reduzir esse valor.`);
    }


    // =========================
    // 4. VALIDAÇÃO DO FORMULÁRIO
    // =========================
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.querySelector("#nome").value.trim();
            const email = document.querySelector("#email").value.trim();
            const mensagem = document.querySelector("#mensagem").value.trim();

            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            if (!email.includes("@")) {
                alert("E-mail inválido.");
                return;
            }

            alert("Mensagem enviada com sucesso! 🌱");

            form.reset();
        });
    }

});
