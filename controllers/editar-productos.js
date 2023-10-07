import { clientService } from "../services/client-services.js";

const url = new URLSearchParams(window.location.search);
const id = url.get("id");
 
clientService.getProducto(id).then((producto) => {
    const nombre = document.querySelector(".seccion-producto__nombre");
    const precio = document.querySelector(".seccion-producto__precio");
    const descripcion = document.querySelector(".seccion-producto__descripcion");
    const categoria = document.querySelector(".seccion-producto__categoria");
    const img = document.querySelector(".seccion-producto__img");


    nombre.value = producto.nombre;
    categoria.value = producto.categoria;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
    img.src = producto.URLimagen;
});

const editarProducto = () => {
    const nombre = document.querySelector(".seccion-producto__nombre").value;
    const precio = document.querySelector(".seccion-producto__precio").value;
    const descripcion = document.querySelector(".seccion-producto__descripcion").value;
    const categoria = document.querySelector(".seccion-producto__categoria").value;


    clientService.editProducto(id, nombre, categoria, precio, descripcion, )
}
