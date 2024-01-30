const productos = [
  { id: 1, Indumentaria: "Camisa", precio: 15000 },
  { id: 2, Indumentaria: "Media", precio: 2500 },
  { id: 3, Indumentaria: "Gorra", precio: 16000 },
  { id: 4, Indumentaria: "Campera", precio: 150000 },
 ];
 const carrito = [];
 let boton = document.getElementById("boton");
 let contenedor = document.getElementById("contenedor");

 //funcion para agregar el producto al carrito
 const agregar = (id) => {
   let productoEncontrado = productos.find((item) => item.id === id);
   carrito.push(productoEncontrado);
   console.log(carrito);
 };

 productos.forEach((item) => {
   let div = document.createElement("div");
   div.innerHTML = `
     <h2>ID: ${item.id}</h2>
     <p>Indumentaria: ${item.Indumentaria}</p>
     <b>$${item.precio}</b>
     <button id="boton${item.id}">Agregar</button>
   `;
   //boton personalizado con el id
   contenedor.append(div);

   let boton = document.getElementById(`boton${item.id}`); //traemos el boton personalizado por el id
   boton.addEventListener("click", () => agregar(item.id)); //le agregamos el evento
 });

 boton.addEventListener("click", () => {
   carrito.forEach((item) => {
     let div = document.createElement("div");
   div.innerHTML = `
     <h2>ID: ${item.id}</h2>
     <p>Indumentaria: ${item.Indumentaria}</p>
     <b>$${item.precio}</b>
   `;
     document.body.append(div);
   });
 });
  