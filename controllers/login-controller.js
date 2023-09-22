import { clientService } from "../services/client-services.js";

const formLogin = document.querySelector(".js-form-login");

const validarLogin = (usuarios) => {
    const email = document.querySelector(".js-login-email").value;
    const password = document.querySelector(".js-login-password").value;

    usuarios.forEach( (usuario) => {
        if ( usuario.email == email && usuario.password == password ) {
          window.location.href = "/addProductos.html";
        } else {
          console.log("usuarios o contraseña incorrecta")
        }
      });
}

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    clientService.listaUsuarios().then((usuarios) => {
        validarLogin(usuarios);
    });
});