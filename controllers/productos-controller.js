import { clientService } from "../services/client-services.js";

const crearProducto = (productos) => {
    productos.forEach(({id, nombre, categoria, precio, descripcion, urlImagen}) => {
        const tablaBody = document.querySelector(".js-table-productos_cuerpo");
        const tr = document.createElement("tr");
        const contenido = `
        <td class="table-producto_datos">${nombre}</td>
        <td class="table-producto_datos">${categoria}</td>
        <td class="table-producto_datos">${precio}</td>
        <td class="table-producto_datos">${descripcion}</td>
        <td class="table-producto_datos"><img src="${urlImagen}"></img></td>
        <td class="table-producto_datos">
            <button class="table-producto_btn js-productos-btnEditar">Editar</button>
            <button id="${id}" class="table-producto_btn js-productos-btnEliminar">Eliminar</button>
        </td>
        `
        tr.innerHTML = contenido;
        tr.classList.add = "table-productos_contenedor";
        tablaBody.appendChild(tr);

        const btnEliminar = document.querySelector(".js-productos-btnEliminar");
        btnEliminar.addEventListener("click", (event) => {
            event.preventDefault();

            clientService.deleteProducto(btnEliminar.id).then(() => {
                console.log("producto borrado");
            });
        });
    });
}

clientService.listaProductos().then((productos)=>{
    crearProducto(productos);
});