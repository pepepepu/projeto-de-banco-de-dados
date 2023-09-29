document.addEventListener('DOMContentLoaded', function() {
    var blocoOpcoes = document.querySelector('.bloco_opcoes');
    var botaoCriar = document.querySelector('.botao-opcao:nth-of-type(1)');
    var botaoInserir = document.querySelector('.botao-opcao:nth-of-type(2)');
    var campos = document.querySelectorAll('.campos');
    var botaoEnviar = document.querySelector('.campo_botao_enviar');
    var selectTabelas = document.getElementById('tabelas');
    var blocoSubtitulo = document.querySelector('.bloco_subtitulo');
    var opcoesTabela = document.querySelector('.opcoes_criacao-tabelas');

    // 1. Ocultar todos os elementos abaixo da div bloco_opcoes
    campos.forEach(function(campo) {
        campo.style.display = 'none';
    });

    botaoEnviar.style.display = 'none';
    selectTabelas.style.display = 'none';
    opcoesTabela.style.display = 'none'; // Ocultar o select inicialmente

    // 2. Adicionar um evento de clique ao botão "Inserir informações"
    botaoInserir.addEventListener('click', function() {
        blocoOpcoes.style.display = 'none'; // Esconder bloco_opcoes
        botaoEnviar.style.display = 'flex'; // Mostrar botão de envio
        selectTabelas.style.display = 'block'; // Mostrar o select
        campos.forEach(function(campo) {
            campo.style.display = 'none'; // Esconder todos os campos
        });
        selectTabelas.value = '0'; // Resetar o valor do select
        blocoSubtitulo.textContent = "Escolha onde deseja inserir as informações e em seguida preencha os campos abaixo";
    });

    botaoCriar.addEventListener('click', function() {
        blocoOpcoes.style.display = 'none';
        opcoesTabela.style.display = 'flex';
        botaoEnviar.style.display = 'flex';
        botaoEnviar.textContent = 'Criar tabela(s)';
        blocoSubtitulo.textContent = "Escolha quais tabelas deseja criar";
    });

    // 3. Alterar o evento de mudança no select
    selectTabelas.addEventListener('change', function() {
        var selectedValue = this.value;

        campos.forEach(function(campo) {
            campo.style.display = 'none';
            botaoEnviar.style.display = 'none';
        });

        if (selectedValue !== '0') {
            var campoToShow = document.querySelector('.campos_' + selectedValue);
            campoToShow.style.display = 'flex';
            botaoEnviar.style.display = 'flex';
        }
    });
});
