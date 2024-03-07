// Importando as definições do módulo readline-sync para entrada de usuário
import * as readlineSync from 'readline-sync';

// Definindo a função calcularMedia
function calcularMedia(notas: number[]): number {
    const total = notas.reduce((acc, curr) => acc + curr, 0);
    return total / notas.length;
}

// Função principal
function main() {
    // Obtendo as notas do usuário
    const notas: number[] = [];
    for (let i = 1; i <= 4; i++) {
        const nota = parseFloat(readlineSync.question(`Digite a nota ${i}: `));
        notas.push(nota);
    }

    // Calculando e exibindo a média
    const media = calcularMedia(notas);
    console.log(`A média das notas é: ${media}`);
}

// Chamando a função principal
main();
