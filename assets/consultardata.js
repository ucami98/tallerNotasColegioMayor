document.getElementById("ConsultarBtn").addEventListener("click", function () {
  var inputId = document.getElementById("ConsultID").value;
  var dataConsultada = localStorage.getItem(inputId);
  var array = dataConsultada.split(",");
  console.log(inputId, array, dataConsultada);
  if (dataConsultada == null) {
    alert("Ese dato no existe en el localStorage");
  } else {
    var pElement = document.getElementById("data");
    var FinalNote =
      (parseInt(array[1]) + parseInt(array[2]) + parseInt(array[3])) / 3;
    if (FinalNote >= 3) {
      var result = "ha aprobado";
    } else {
      var result = "no ha aprobado";
    }
    pElement.innerHTML = "Nombre: " + array[0] + "<br>";
    pElement.innerHTML = pElement.innerHTML + "Nota 1: " + array[1] + "<br>";
    pElement.innerHTML = pElement.innerHTML + "Nota 2: " + array[2] + "<br>";
    pElement.innerHTML = pElement.innerHTML + "Nota 3: " + array[3] + "<br>";
    pElement.innerHTML =
      pElement.innerHTML + "Su nota final es: " + FinalNote.toFixed(2) + "<br>";
    pElement.innerHTML = pElement.innerHTML + " Usted " + result + "<br>";
  }
});
