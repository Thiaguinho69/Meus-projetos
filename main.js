document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const perguntaElement = document.getElementById('pergunta');
    const jogadorRespostaInput = document.getElementById('jogadorResposta');
    const respostaFeedbackElement = document.getElementById('respostaFeedback');

    
    const perguntas = [
        { pergunta: "Qual o ano do meu nascimento?", resposta: "2005" },
        { pergunta: "meu nome completo'?", resposta: "thiago rosa da silva" },
        { pergunta: "Qual a pessoa que faz aniversário no mesmo dia que eu?", resposta: "vó" },
        { pergunta: "Qual a minha comida Favorita?", resposta: "Arroz,Feijão e ovo " },
        { pergunta: "já falei que eu te amo muito? sim ou não", resposta: "sim" },
        { pergunta: "Qual é a minha cor favorita?", resposta: "azul escuro" },
        { pergunta: "Qual o tipo de pessoa que eu mais odeio? ", resposta: "Forçada" },
        { pergunta: "Qual a cor do meu olho?", resposta: "castanho escuro" },
        { pergunta: "Qual o tamanho da distancia da lua para a terra?", resposta: "200.000 km" },
    ];

    let perguntaAtual = 0;

    
    function exibirPergunta() {
        perguntaElement.textContent = perguntas[perguntaAtual].pergunta;
    }

    
    function processarResposta(resposta) {
        const respostaCorreta = perguntas[perguntaAtual].resposta;
        if (resposta.toLowerCase() === respostaCorreta.toLowerCase()) {
            respostaFeedbackElement.textContent = "Resposta correta!";
        } else {
            respostaFeedbackElement.textContent = `Resposta incorreta. A resposta correta era: ${respostaCorreta}`;
        }
        perguntaAtual++;

        
        if (perguntaAtual < perguntas.length) {
            exibirPergunta(); 
            jogadorRespostaInput.value = ''; 
        } else {
            
            perguntaElement.textContent = "Quiz concluído! Eu te amo muito";
            jogadorRespostaInput.style.display = 'none'; 
            quizForm.querySelector('button').style.display = 'none'; 
        }
    }

   
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const jogadorResposta = jogadorRespostaInput.value.trim();
        if (jogadorResposta === '') {
            respostaFeedbackElement.textContent = "Por favor, digite sua resposta.";
            return;
        }

        processarResposta(jogadorResposta);
    });

   
    exibirPergunta();
});
