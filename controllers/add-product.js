import { clientService } from "../services/client-services.js";

const formAddProducto = document.querySelector(".form-productos");

formAddProducto.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector(".js-producto-nombre").value;
    const categoria = document.querySelector(".js-producto-categoria").value;
    const precio = document.querySelector(".js-producto-precio").value;
    const descripcion = document.querySelector(".js-producto-descripcion").value;
    const URLimage = document.querySelector(".js-producto-URLimage").value;
    
    clientService.addProducto(nombre, categoria, precio, descripcion, URLimage).then(()=>{
        console.log("producto agregado con exito");
    });
});