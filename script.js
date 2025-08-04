//*
function mostrarResultado(id, mensaje) {
  console.log(mensaje);
  document.getElementById(id).textContent = mensaje;
}

function convertirArreglo(texto) {
  return texto.split(",").map(e => parseFloat(e.trim())).filter(e => !isNaN(e));
}

// 1. Generar arreglo de dobles / el primer elemento del arreglo es 1
function ejecutarDobles() {
  const n = parseInt(document.getElementById("inputDobles").value);
  if (isNaN(n) || n <= 0) return mostrarResultado("resultadoDobles", "Noo, ingresa un número válido mayor a 0.");
  const arreglo = [1];
  for (let i = 1; i < n; i++) arreglo.push(arreglo[i - 1] * 2);
  mostrarResultado("resultadoDobles", `Arreglo generado: ${arreglo.join(", ")}`);
}

// 2. Obtener el mayor número
function ejecutarMayor() {
  const arreglo = convertirArreglo(document.getElementById("inputMayor").value);
  if (arreglo.length !== 10) return mostrarResultado("resultadoMayor", "Ingresa exactamente 10 números.");
  const mayor = Math.max(...arreglo);
  mostrarResultado("resultadoMayor", `Mayor número: ${mayor}`);
}

// 3. Obtener día de la semana / obtener un día en particular si se recibe su número correspondiente
function ejecutarDia() {
  const numero = parseInt(document.getElementById("inputDia").value);
  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  if (numero < 1 || numero > 7) return mostrarResultado("resultadoDia", "Número inválido, debe ser entre el 1 y 7.");
  mostrarResultado("resultadoDia", `Día: ${dias[numero - 1]}`);
}

// 4. Buscar número en arreglo Nota: el arreglo solo contendrá números, y tendrá un largo máximo de 100.
function ejecutarBusqueda() {
  const arreglo = convertirArreglo(document.getElementById("inputBuscarArreglo").value);
  const numero = parseFloat(document.getElementById("inputBuscarNumero").value);
  if (arreglo.length > 100 || isNaN(numero)) {
    return mostrarResultado("resultadoBusqueda", "Verifica que el arreglo tenga hasta 100 números válidos y que el número a buscar sea correcto.");
  }
  const encontrado = arreglo.includes(numero);
  mostrarResultado("resultadoBusqueda", encontrado
    ? `El número ${numero} está en el arreglo. yei!`
    : `El número ${numero} NO está en el arreglo :c`);
}

// 5. Ordenar arreglo ascendentemente
function ejecutarOrden() {
  const arreglo = convertirArreglo(document.getElementById("inputOrdenar").value);
  if (arreglo.length === 0) return mostrarResultado("resultadoOrdenar", "Noo, ingresa al menos un número.");
  const ordenado = [...arreglo].sort((a, b) => a - b);
  mostrarResultado("resultadoOrdenar", `Arreglo ordenado: ${ordenado.join(", ")}`);
}




