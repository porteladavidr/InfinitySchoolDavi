const n1 = parseFloat(prompt("Digite a primeira nota (n1):"));
const p1 = parseFloat(prompt("Digite o peso da primeira nota (p1):"));

const n2 = parseFloat(prompt("Digite a segunda nota (n2):"));
const p2 = parseFloat(prompt("Digite o peso da segunda nota (p2):"));

const n3 = parseFloat(prompt("Digite a terceira nota (n3):"));
const p3 = parseFloat(prompt("Digite o peso da terceira nota (p3):"));

const media = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);

console.log("A média ponderada é: " + media);
