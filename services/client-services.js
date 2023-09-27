const listaUsuarios = () => {
    return fetch("http://localhost:3000/usuario").then(respuesta => respuesta.json());
}


const listaProductos = () => {
  return fetch("http://localhost:3000/producto").then(response => response.json());
}

const addProducto = (nombre, categoria, precio, descripcion, URLimagen) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({id: uuid.v4(), nombre, categoria, precio, descripcion, URLimagen})
  });
}

const deleteProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`,{
    method: "DELETE"
  });
}

export const clientService = {
  listaUsuarios,
  listaProductos,
  addProducto,
  deleteProducto
}