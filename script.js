
function calcularHipo(num1, num2) {
    // Usamos el teorema de Pitágoras: h^2 = a^2 + b^2
    let result = Math.sqrt(num1 ** 2 + num2 ** 2);
    return result;
}
console.log(calcularHipo(4,8))
console.log("resultado de la hipotenusa")
const ts = Date.now();

document.writeln("<p> Hola, la hora es " + ts + "</p>")

function getData(form) {
  var formData = new FormData(form);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  console.log(Object.fromEntries(formData));
  console.log(JSON.stringify(Object.fromEntries(formData), null, 4));
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
});