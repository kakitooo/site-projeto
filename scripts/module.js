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
// 3. LÓGICA DO MODAL
// ==========================================
    const modal = document.getElementById('modal-vaga');
    const fecharModal = document.querySelector('.modal-fechar');
    const botoesCandidatar = document.querySelectorAll('.card-vaga-botao');
    const modalTitulo = document.getElementById('modal-titulo');
    const btnConfirmar = document.getElementById('modal-btn-confirmar');

    let botaoOriginalClicado = null; // Para guardar qual vaga o usuário está interagindo

    // Abrir o Modal ao clicar no botão do card
    botoesCandidatar.forEach(botao => {
        botao.addEventListener('click', function() {
            botaoOriginalClicado = this;
            
            // Pega o título da vaga (o <h2> que é irmão anterior div da empresa ou pegando o topo do parentNode)
            const tituloVaga = this.parentElement.querySelector('.card-vaga-titulo').innerText;
            
            // Atualiza o título dentro do modal
            modalTitulo.innerText = tituloVaga;
            
            // Reseta o botão do modal (caso já tenha sido usado em outra vaga)
            btnConfirmar.innerText = 'Confirmar Candidatura';
            btnConfirmar.style.backgroundColor = 'rgb(30, 177, 30)';
            btnConfirmar.disabled = false;
            
            // Mostra o modal
            modal.classList.add('ativo');
        });
    });

    // Fechar o Modal clicando no X
    fecharModal.addEventListener('click', () => {
        modal.classList.remove('ativo');
    });

    // Fechar o Modal clicando fora da caixa
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('ativo');
        }
    });

    // Simular o envio da candidatura no Modal
    btnConfirmar.addEventListener('click', function() {
        // Feedback visual no botão do modal
        this.innerText = 'Candidatura Enviada! ✔';
        this.style.backgroundColor = '#6c757d';
        this.disabled = true;

        // Atualiza também o botão lá no card principal para indicar que o usuário já aplicou
        if (botaoOriginalClicado) {
            botaoOriginalClicado.innerText = 'Candidatura Enviada!';
            botaoOriginalClicado.style.backgroundColor = '#6c757d';
            botaoOriginalClicado.style.cursor = 'default';
            botaoOriginalClicado.disabled = true;
        }

        // Fecha o modal automaticamente após 2 segundos
        setTimeout(() => {
            modal.classList.remove('ativo');
        }, 2000);
    });

});