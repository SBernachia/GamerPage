import { clientService } from "../services/client-services.js";

const formLogin = document.querySelector(".js-form-login");

const validarLogin = (usuarios) =>  {
  const email = document.querySelector(".js-login-email").value;
  const password = document.querySelector(".js-login-password").value;
  let validacion = false;
  usuarios.forEach( (usuario) => {
    if ( usuario.email == email && usuario.password == password ) {
      validacion = true;
    }
  });

  if (validacion) {
    window.location.href = "/menuAdmin.html";
  } else {
    alert("usuario o contraseña incorrecta");
  }
}

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  clientService.listaUsuarios().then((usuarios) => {
      validarLogin(usuarios);
  });
});
