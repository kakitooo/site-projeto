// ==========================================
// VAGAS - SCRIPTS 
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
// ==========================================
// 1. ANIMAÇÃO DE FADE-IN (Stagger)
// ==========================================
    const cards = document.querySelectorAll('.card-vaga');
    cards.forEach((card, index) => {
        // Atraso gradativo: 0.1s, 0.2s, 0.3s...
        card.style.animationDelay = `${index * 0.1}s`;
    });

// ==========================================
// 2. SISTEMA DE BUSCA (Filtro)
// ==========================================
    const inputBusca = document.getElementById('input-busca');
    
    inputBusca.addEventListener('input', (e) => {
        const termoBusca = e.target.value.toLowerCase();
        
        cards.forEach(card => {
            const textoCard = card.innerText.toLowerCase();
            if (textoCard.includes(termoBusca)) {
                card.style.display = 'flex'; // Exibe o card se combinar
            } else {
                card.style.display = 'none'; // Esconde se não combinar
            }
        });
    });
    // ==========================================
// 3. AVISO PARA FAZER LOGIN
// ==========================================

const botoesCandidatar = document.querySelectorAll('.card-vaga-botao');

botoesCandidatar.forEach(botao => {

    botao.addEventListener('click', function() {

        const confirmar = confirm(
            "Para se candidatar às vagas é necessário entrar na sua conta.\n\nDeseja ir para a tela de login?"
        );

        if(confirmar){

            window.location.href = "login.html";

        }

    });

 });
 
});

