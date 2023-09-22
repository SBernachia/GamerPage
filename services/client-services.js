const listaUsuarios = () => {
    return fetch("http://localhost:3000/usuario").then(respuesta => respuesta.json());
}

const loginUsuario = (email, password) => {
  return fetch("http://localhost:3000/usuario").then((respuesta) => {
    const usuarios = respuesta.json();

    
  })
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
export const clientService = {
  listaUsuarios,
  listaProductos,
  addProducto,
  loginUsuario,
}