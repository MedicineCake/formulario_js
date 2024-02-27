document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('meu-formulario');
    const mensagemDiv = document.getElementById('mensagem');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const campoA = parseFloat(document.getElementById('campoA').value);
        const campoB = parseFloat(document.getElementById('campoB').value);

        if (!isNaN(campoA) && !isNaN(campoB)) {
            if (campoB > campoA) {
                exibirMensagem('Formulário válido!', 'green');
            } else {
                exibirMensagem('O número do campo B deve ser maior que o do campo A.', 'red');
            }
        } else {
            exibirMensagem('Por favor, preencha ambos os campos com números.', 'red');
        }
    });

    function exibirMensagem(texto, cor) {
        mensagemDiv.innerText = texto;
        mensagemDiv.style.color = cor;
    }
});
