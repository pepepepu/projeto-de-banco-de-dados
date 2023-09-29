document.addEventListener('DOMContentLoaded', function() {
    var campos = document.querySelectorAll('.campos');
    var botaoEnviar = document.querySelector('.campo_botao_enviar');

    campos.forEach(function(campo) {
        campo.style.display = 'none';
    });

    botaoEnviar.style.display = 'none';

    document.getElementById('tabelas').addEventListener('change', function() {
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
