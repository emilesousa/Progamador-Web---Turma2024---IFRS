function calculate(operation) {
    // Obtém os valores dos campos de entrada e os converte para float
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    // Verifica qual operação foi selecionada e realiza o cálculo
    switch (operation) {
        case 'add':
            result = num1 + num2; // Soma
            break;
        case 'subtract':
            result = num1 - num2; // Subtração
            break;
        case 'multiply':
            result = num1 * num2; // Multiplicação
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero!'; // Divisão, com verificação de divisão por zero
            break;
        default:
            result = 'Operação inválida'; // Caso de operação inválida
    }

    // Exibe o resultado na página
    document.getElementById('result').innerText = `Resultado: ${result}`;
}
