import { clientService } from "../services/client-services.js";

const btnDeslegar = document.querySelector(".js-btn-desplegar-form");

btnDeslegar.addEventListener("click",() => {
    const form = document.querySelector(".form-productos");
    form.classList.toggle("expand");
})

const crearProducto = (productos) => {
    productos.forEach(({id, nombre, categoria, precio, descripcion, URLimagen}) => {
        const tablaBody = document.querySelector(".js-table-productos_cuerpo");
        const tr = document.createElement("tr");
        const contenido = `
        <td class="table-producto_datos">${nombre}</td>
        <td class="table-producto_datos">${categoria}</td>
        <td class="table-producto_datos">${precio}</td>
        <td class="table-producto_datos">${descripcion}</td>
        <td class="table-producto_datos"><img class="table-productos__datos__img" src="${URLimagen}"></img></td>
        <td class="table-producto_datos">
            <button id="${id}" class="table-producto_btn js-productos-btnEditar">Editar</button>
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

        const btnEditar = document.querySelector(".js-productos-btnEditar");
        btnEditar.addEventListener("click", (event) => {
            event.preventDefault();

            window.location.href = `/editarProducto.html?id=${btnEditar.id}`;
        });
    });
}

clientService.listaProductos().then((productos)=>{
    crearProducto(productos);
});