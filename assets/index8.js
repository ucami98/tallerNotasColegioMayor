//alert("si estoy ejecutandome xd")

document.getElementById("saveDataBtn").addEventListener("click", function (e) {
  e.preventDefault();
  var StudentID = document.getElementById("StudentID").value;
  var StudentName = document.getElementById("StudentName").value;
  var Note1 = document.getElementById("Note1").value;
  var Note2 = document.getElementById("Note2").value;
  var Note3 = document.getElementById("Note3").value;
  console.log(StudentID, StudentName, Note1, Note2, Note3);
  if (
    StudentID == "" ||
    StudentName == "" ||
    Note1 == "" ||
    Note2 == "" ||
    Note3 == ""
  ) {
    alert("Debe completar todos los campos!");
  } else {
  }
  localStorage.setItem(StudentID, [StudentName,Note1,Note2,Note3])
  alert("Sus datos se han guardado");
});
