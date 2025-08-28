
function calcularHipo(num1, num2) {
    // Usamos el teorema de Pitágoras: h^2 = a^2 + b^2
    let result = Math.sqrt(num1 ** 2 + num2 ** 2);
    return result;
}
console.log(calcularHipo(4,8))
console.log("resultado de la hipotenusa")
const ts = Date.now();

document.writeln("<p> Hola, la hora es " + ts + "</p>")