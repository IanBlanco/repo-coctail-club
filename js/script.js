//DESAFIO COMPLEMENTARIO CON DOM
//Simulador CLUB DEL COCTEL

// funcion mostrar pack
function mostrarPack(pack) {
    switch (pack) {
        case "botonPackPremiun":
            document.querySelector("#botonPackPremiun").style.color = "midnightblue";
            document.querySelector("#botonPackOro").style.color = "black";
            document.querySelector("#botonPackPlata").style.color = "black";
            document.querySelector("#botonPackPrevia").style.color = "black";

            document.querySelector("#muestraPackPremiun").style.display = "block";
            document.querySelector("#muestraPackOro").style.display = "none";
            document.querySelector("#muestraPackPlata").style.display = "none";
            document.querySelector("#muestraPackPrevia").style.display = "none";
            break;
        case "botonPackOro":
            document.querySelector("#botonPackPremiun").style.color = "black";
            document.querySelector("#botonPackOro").style.color = "midnightblue";
            document.querySelector("#botonPackPlata").style.color = "black";
            document.querySelector("#botonPackPrevia").style.color = "black";

            document.querySelector("#muestraPackPremiun").style.display = "none";
            document.querySelector("#muestraPackOro").style.display = "block";
            document.querySelector("#muestraPackPlata").style.display = "none";
            document.querySelector("#muestraPackPrevia").style.display = "none";
            break;
        case "botonPackPlata":
            document.querySelector("#botonPackPremiun").style.color = "black";
            document.querySelector("#botonPackOro").style.color = "black";
            document.querySelector("#botonPackPlata").style.color = "midnightblue";
            document.querySelector("#botonPackPrevia").style.color = "black";

            document.querySelector("#muestraPackPremiun").style.display = "none";
            document.querySelector("#muestraPackOro").style.display = "none";
            document.querySelector("#muestraPackPlata").style.display = "block";
            document.querySelector("#muestraPackPrevia").style.display = "none";
            break;
        case "botonPackPrevia":
            document.querySelector("#botonPackPremiun").style.color = "black";
            document.querySelector("#botonPackOro").style.color = "black";
            document.querySelector("#botonPackPlata").style.color = "black";
            document.querySelector("#botonPackPrevia").style.color = "midnightblue";

            document.querySelector("#muestraPackPremiun").style.display = "none";
            document.querySelector("#muestraPackOro").style.display = "none";
            document.querySelector("#muestraPackPlata").style.display = "none";
            document.querySelector("#muestraPackPrevia").style.display = "block";
            break;
        default:
            break;
    }
}

//Evento click en botones:
document.querySelector("#botonPackPremiun").addEventListener("click", () => mostrarPack("botonPackPremiun"));
document.querySelector("#botonPackOro").addEventListener("click", () => mostrarPack("botonPackOro"));
document.querySelector("#botonPackPlata").addEventListener("click", () => mostrarPack("botonPackPlata"));
document.querySelector("#botonPackPrevia").addEventListener("click", () => mostrarPack("botonPackPrevia"));



//Formulario Asociate

document.querySelector("#form9").addEventListener("submit", (event) => {
    if (document.querySelector("#nombre").value.length < 2) {
        event.preventDefault();
        Swal.fire({
            title: "¡Atencion!",
            text: "El nombre ingresado es incorrecto",
            icon: "error",
            confirmButtonText: "Volver",
            showConfirmButton: true,
        })
    } else if (document.querySelector("#subname").value.length < 2) {
        event.preventDefault();
        Swal.fire({
            title: "¡Atencion!",
            text: "El apellido ingresado es incorrecto",
            icon: "error",
            confirmButtonText: "Volver",
            showConfirmButton: true,
        })
    } else if (document.querySelector("#edad").value < 18) {
        event.preventDefault();
        Swal.fire({
            title: "¡Atencion!",
            text: "Usted es menor de edad no puede registrarse",
            icon: "error",
            confirmButtonText: "Volver",
            showConfirmButton: true,
        })
    } else if (document.querySelector("#email").value.length < 12) {
        event.preventDefault();
        Swal.fire({
            title: "¡Atencion!",
            text: "El email ingresado es incorrecto",
            icon: "error",
            confirmButtonText: "Volver",
            showConfirmButton: true,
        })
    } else if (document.querySelector("#password").value.length < 6) {
        event.preventDefault();
        Swal.fire({
            title: "¡Atencion!",
            text: "La contraseña ingresada es incorrecta",
            icon: "error",
            confirmButtonText: "Volver",
            showConfirmButton: true,
        })
    } else if (document.querySelector("#pass").value != document.querySelector("#password").value) {
        event.preventDefault();
        Swal.fire({
            title: "¡Atencion!",
            text: "Las contraseñas no coinciden",
            icon: "error",
            confirmButtonText: "Volver",
            showConfirmButton: true,
        })
    }else {
        Swal.fire({
            title: "¡Atencion!",
            text: "QUEDO SUSCRIPTO CON EXITO",
            icon: "info",
            confirmButtonText: "Ok",
            showConfirmButton: true,
        })

        document.querySelector("#usuarioEncotrado")
    }

})

//Usuario
const arrayUsuarios = [];
document.querySelector("#form9").addEventListener("submit", nuevoUsuario);
function nuevoUsuario(e) {
    e.preventDefault()
    //recupero info de los inputs
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#subname").value;
    const edad = document.querySelector("#edad").value;
    const email = document.querySelector("#email").value;
    const contraseña = document.querySelector("#password").value;
    const contraseña2 = document.querySelector("#pass").value;

    let resumenUsuario = "";
    let resumenCompra = "";

    if ((nombre.length > 1) && (apellido.length > 1) && (edad > 17) && (email.length > 12) && (contraseña != "") && (contraseña == contraseña2)) {
        //creamos objeto persona
        const usuario = new Usuario(nombre, apellido, edad, email, contraseña);

        resumenCompra = `<h2>Bienvenido a Cocktail Club!</h2>`;
        resumenCompra += `<h3>Resumen de Suscripcion:</h3>`;
        resumenCompra += `<h4 ${usuario.nombre} ${usuario.apellido}</h4>`;
        resumenCompra += `<span>Email: ${usuario.email}</span> \n`;

        document.querySelector("#resumenUsuario").innerHTML = resumenCompra;

        document.querySelector("#resumenUsuario").style.display = "block";


        //pushear en el array
        arrayUsuarios.push(usuario);

        //guardar array en local stroage, y convertirlo en json
        localStorage.setItem("arrayUsuarios", JSON.stringify(arrayUsuarios));
    }
}

//--------------ingresar usuario
document.querySelector(".ingresarSeccion").addEventListener("submit", buscarUsuario);
function buscarUsuario(e) {
    //paramos el envio del formulario submit
    e.preventDefault();
    //buscar info input dni
    const nombreBuscar = document.querySelector("#nombreIn").value;
    const apellidoBuscar = document.querySelector("#subnameIn").value;
    const emailBuscar = document.querySelector("#emailIn").value;
    const contraseñaBuscar = document.querySelector("#passwordIn").value;

    //buscar en local storage
    const arrayParaBuscar = JSON.parse(localStorage.getItem("arrayUsuarios"));
    console.log(arrayParaBuscar);

    const resultadoBuscar = arrayParaBuscar.find((per) => per.email == emailBuscar);

    let textoPersonaEncontrada;

    if ((resultadoBuscar != undefined) && (resultadoBuscar.contraseña == contraseñaBuscar) && (resultadoBuscar.nombre == nombreBuscar) && (resultadoBuscar.apellido == apellidoBuscar)) {
        textoPersonaEncontrada = `<h2>Bienvenido a Cocktail Club!</h2>`;
        textoPersonaEncontrada += `<h3>${resultadoBuscar.nombre} ${resultadoBuscar.apellido}</h3>`;
        textoPersonaEncontrada += `<span>Email: ${resultadoBuscar.email}</span> \n`;/*
        textoPersonaEncontrada += `<span>Pack: ${resultadoBuscar.box}</span> \n`;
        textoPersonaEncontrada += `<span>Durante: ${resultadoBuscar.duracion} meses. </span>`;*/

        document.querySelector("#usuarioEncontrado").innerHTML = textoPersonaEncontrada;

        Swal.fire({
            title: "¡Bienvenido!",
            text: resultadoBuscar.nombre + " " + resultadoBuscar.apellido,
            icon: "info",
            confirmButtonText: "Ok",
            showConfirmButton: true,
        })

        document.querySelector(".userActiv").innerHTML = `<p>Usuario: <span>${resultadoBuscar.nombre} ${resultadoBuscar.apellido}</span></p>`
        document.querySelector("#usuarioEncontrado").style.display = "block";

    } else if (((resultadoBuscar != undefined) && (resultadoBuscar.contraseña != contraseñaBuscar))) {
        Swal.fire({
            title: "¡Error!",
            text: "La contraseña ingresada es incorrecta",
            icon: "error",
            confirmButtonText: "Volver",
            showConfirmButton: true,
        })

        document.querySelector("#usuarioEncontrado").style.display = "none";
    } else {
        Swal.fire({
            title: "¡Malas Noticias!",
            text: "Faltan datos o no se encuentra ningun usuario registrado con estos datos",
            icon: "info",
            confirmButtonText: "Ok",
            showConfirmButton: true,
        })
        
        document.querySelector("#usuarioEncontrado").style.display = "none";
    }

}



//------------------------------------------CARRITO

//Prodcutos: packs

const packPremiun= new Producto("Super Bailys", "Pack Oro", "Baileys", "Helado", 3300);
const packOro= new Producto("Whisky Sour", "Pack Premiun", "Whisky", "jugo de limon", 2900);
const packPlata= new Producto("Gin tonic", "Pack Plata", "Gin", "Agua Tónica", 2450);
const packPrevia= new Producto("Destornillador", "Pack Previa", "Gin", "Agua tónica", 2100);







let carritoDeCompras = []


const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTalles = document.getElementById('selecTalles')
const buscador = document.getElementById('search')



//Buscador


mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){
    contenedorProductos.innerHTML= ""
    
   array.forEach(item => {

       let div = document.createElement('div')
       div.classList.add('producto')
    //    div.setAttribute('class', 'producto')
    //    div.className = 'producto'
    div.innerHTML += `
                    <div class="card">
                        <div class="card-image">
                            <img src=${item.img}>
                            <span class="card-title">${item.nombre}</span>
                            <a  id="agregar${item.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${item.desc}</p>
                            <p>Talle: ${item.talle}</p>
                            <p> $${item.precio}</p>
                        </div>
                    </div>
    `
    contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`agregar${item.id}`)

        btnAgregar.addEventListener('click',()=>{
           agregarAlCarrito(item.id)
        })

   })
}


function agregarAlCarrito(id) {
    let yaEsta = carritoDeCompras.find(item=> item.id == id)
    if(yaEsta){
        yaEsta.cantidad = yaEsta.cantidad + 1
        document.getElementById(`und${yaEsta.id}`).innerHTML =` <p id=und${yaEsta.id}>Und:${yaEsta.cantidad}</p>`
        actualizarCarrito()
    }else{
       let productoAgregar = stockProductos.find(elemento => elemento.id == id)
    
        productoAgregar.cantidad = 1
        
        carritoDeCompras.push(productoAgregar)
        
        actualizarCarrito()

        mostrarCarrito(productoAgregar) 
    }

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    
}





function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.className = 'productoEnCarrito'
    div.innerHTML=`
                    <p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <p id="und${productoAgregar.id}">Und:${productoAgregar.cantidad}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    btnEliminar.addEventListener('click',()=>{
        if(productoAgregar.cantidad == 1){
           btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item=> item.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        }else{
            productoAgregar.cantidad = productoAgregar.cantidad - 1
            document.getElementById(`und${productoAgregar.id}`).innerHTML =` <p id=und${productoAgregar.id}>Und:${productoAgregar.cantidad}</p>`
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
            }
        

    })


}



function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}




function recuperar() {
 let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
 
 if(recuperarLS){
     recuperarLS.forEach(el=> {
         mostrarCarrito(el)
         carritoDeCompras.push(el)
         actualizarCarrito()
     })
 }


}


recuperar()