var stringDegree = "40c";

if (stringDegree.toUpperCase().includes("C")) {
  var celsius = parseFloat(stringDegree);
  var farenheitResultado = (celsius * 9) / 5 + 32;
  console.log(
    `${celsius.toFixed(2)}° Celsius em Farenheit é ${farenheitResultado.toFixed(
      2
    )}°`
  );
} else if (stringDegree.toUpperCase().includes("F")) {
  var farenheit = parseFloat(stringDegree);
  var celsiusResultado = ((farenheit - 32) * 5) / 9;
  console.log(
    `${farenheit.toFixed(2)}° Farenheit em Celsius é ${celsiusResultado.toFixed(
      2
    )}°`
  );
} else {
  console.log("Grau não identificado");
}
