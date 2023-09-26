document.addEventListener('DOMContentLoaded', function() {
    var campos = document.querySelectorAll('.campos');

    campos.forEach(function(campo) {
        campo.style.display = 'none';
    });

    document.getElementById('tabelas').addEventListener('change', function() {
        var selectedValue = this.value;

        campos.forEach(function(campo) {
            campo.style.display = 'none';
        });

        if (selectedValue !== '0') {
            var campoToShow = document.querySelector('.campos_' + selectedValue);
            campoToShow.style.display = 'flex';
        }
    });
});
