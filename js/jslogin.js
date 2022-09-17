var pwd = document.getElementById('pwd');
var eye = document.getElementById('eye');

eye.addEventListener('click',togglePass);

//show pass
function togglePass(){
   eye.classList.toggle('active');
   (pwd.type == 'password') ? pwd.type = 'text' : pwd.type = 'password';
} 

// Form Validation
function ValidarForm() {
  var nombre = document.form1.nombre.value;
  var password = document.form1.password.value;
  var msg = document.getElementById('msg');
  var msgl = document.getElementById('msgl');

  //validation
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(nombre)) {
    msg.innerHTML = "NOMBRE USUARIO FORMATO INCORRECTO";
    msgl.innerHTML = "";
  
    document.form1.nombre.focus();
    return false;
    exit;
  } else {
    msg.innerHTML = "";
  }

  //ajax.
  var url = 'auth/api_login.php?nombre='+ nombre +'&password=' + password;
  var successfull = 0;
  $.ajax({
    url: url,
    method: 'GET'
  }).done(function(elemento){
      var result = parseInt(elemento);
      if(result==1){
        msgl.innerHTML = " USUARIO CORRECTO - LOGIN SUCCESSFULL";
        msg.innerHTML = "";
        successfull=1;
      }else{
        msg.innerHTML = " USUARIO INCORRECTO - LOGIN UNSUCCESSFULL ";
        msgl.innerHTML = "";
      }  
  })

    if(successfull==0){
      return false;
    }
}


 


//OTRAS VALIDACIONES ---PODEMOS AÑADIR ¨* FORMAS DIFERENTES 
  //const pattern = new RegExp('^[A-Z]+$', 'i');

/*   if(!pattern.test(input.nombre)){
    msg.innerHTML = "SOLO SE PERMITEN LETRAS EN EL NOMBRE";
    document.form1.nombre.focus();
    return false;
  } */
  
/*  if (nombre == "") {
    msg.style.display = 'block';
    msg.innerHTML = "Plisss.. 'el nombre'.";
    document.form1.nombre.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }
  
   if (password == "") {
    msg.innerHTML = "Plisss.. 'la contraseña'.";
    document.form1.password.focus();
    return false;
  } else {
    msg.innerHTML = "";
  }
*/

