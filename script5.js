function alertas() {
    let esVacio = false;
  
    let mensaje = "";
    let Nombre = document.getElementById("nombre").value;
    let Apellido = document.getElementById("apellido").value;
    let Edad = document.getElementById("edad").value;
    let Email = document.getElementById("email").value;
  
    Edad = parseInt(Edad);
  
    let formulario = [Nombre, Apellido, Edad, Email];
  
    console.log(formulario);
    for (let i = 0; i < formulario.length; i++) {
      if (formulario[i] === "") {
        esVacio = true;
      }
    }
    if (esVacio === true) {
      alert("Por favor ingrese todos los campos ");
    }
    if (Edad >= 18 && esVacio === false) {
      alert(`Bienvenido ${Nombre}${Apellido} te has registrado correctamente te contactaremos en ${Email}`
      );
      Vaciarcampos();
    } else if (Edad < 18 && esVacio === false) {
      alert(`Lo sentimos ${Nombre}${Apellido} no tienes la edad mínima `);
    }
  }

function vaciarCampos(){
    document.getElementById("nombre").value = "";
    document.getElementById( "apellido").value = "";
    document.getElementById ("edad").value = "";
    document.getElementById ("email").value = "";
    

}
