const ropa = [ {

  Id:1,  
  Nombre:"Remera",
  Precio: 15000 }, {
  
  Id:2,  
  Nombre: "Short",
  Precio: 12000
  
   },{
  
  Id:3,  
  Nombre: "Zapatillas",  
  Precio: 30000
   
   }, {
  
  Id: 4, 
  Nombre: "Sandalias",
  Precio: 20000
  
  }];
  
  
  //GUARDAR OBJETO CONVERTIDO EN STRING
  localStorage.setItem("List", JSON.stringify(ropa)); 
   
  
  console.log(localStorage.getItem("List"));
  
  
  
  //PARSEO LA LISTA - AHORA ES UN OBJETO
  lst= JSON.parse(localStorage.getItem("List"));
  
  
  
  //RECORRIDO DE LA LISTA 
  lst.forEach(element => {
  
    let elements = document.getElementById("elements");
    let div = document.createElement("div");
  
    div.innerHTML = element.Id + " " + element.Nombre + " " + element.Precio;
    elements.appendChild(div);
  
  }); 
  
  //---------------------------Eliminar carrito-----------------------------------------//
  
  
  //agreagamos el escuchador de evento para el boton
  boton.addEventListener("click", () => {
    localStorage.clear(); //borramos el storage
    alert("Eliminar carrito");
    location.reload(); //recargamos la pagina
  });

  