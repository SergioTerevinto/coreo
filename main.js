/* const productosEnvases = [
    { nombre: "Remera Nike Pink", precio: 1790, id: 1, stock: 10 },
    { nombre: "Remera Adidas White", precio: 1990, id: 2, stock: 10 }, 
    { nombre: "Remera Jordan Grey", precio: 1420, id: 3, stock: 10 },
    { nombre: "Buzo Adidas Azul", precio: 2750, id: 4, stock: 10 },
    { nombre: "Canguro Adidas Classic", precio: 3890, id: 5, stock: 10 },
    { nombre: "Buzo Puma Street", precio: 3490, id: 6, stock: 10 },
    { nombre: "Championes New Balance", precio: 4660, id: 7, stock: 10 },
    { nombre: "Championes Reebok", precio: 5100, id: 8, stock: 10 },
    { nombre: "Gorro Adidas Summer", precio: 1750, id: 9, stock: 10 },
    { nombre: "Gorro Nike Winter", precio: 390, id: 10, stock: 10 },
    { nombre: "Pantalon Classic", precio: 2250, id: 11, stock: 10 },
    { nombre: "Pantalon Future", precio: 2390, id: 12, stock: 10 },
]

class producto {
    constructor(nombre, precio, id, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.stock = stock;
        this.cantidad = 0;
    }
}

const ArrayDeProductos = productosEnvases.map(el => {return new producto(el.nombre, el.precio, el.id, el.stock)})

console.log(ArrayDeProductos)

class carrito {
    constructor(){
        this.productos = []
        this.total = 0
    }

    agregarProducto(producto){
        let estaEnElCarrito = this.buscarUnProducto(producto.id)
        if (!estaEnElCarrito) {
            producto.cantidad = 1
            this.productos.push(producto)
        } else {
            estaEnElCarrito.cantidad++
        }
        console.log(this.productos)
    }

    buscarUnProducto(id) {
        if(this.productos.some(el => {return el.id === id})) {
            let producto = this.productos.find(el =>{return el.id === id})
            return producto  
        } else{
            return false
        }
    }

    quitarProducto (id) {
        let estaEnElCarrito = this.buscarUnProducto(id)
        if (!estaEnElCarrito) {
            alert ("No esta el producto en el carrito.")
        } else {
            if(estaEnElCarrito.cantidad == 1) {
                estaEnElCarrito.cantidad = estaEnElCarrito.cantidad -1
                this.productos = this.productos.filter(el => el.cantidad > 0)
            } else {estaEnElCarrito.cantidad = estaEnElCarrito.cantidad -1}
    
        }
        console.log(this.productos)
    } 



}



const CarritoCoreo = new carrito()

function MostrarProductos() {
    let mensaje = "Estos son los productos que tenemos disponibles:\n"
    let ProductosMensaje = ArrayDeProductos.reduce((acc, el)=> {
        return acc + el.id + " - " + el.nombre + " $" + el.precio + "\n"
    }, "\n")

    mensaje = mensaje + ProductosMensaje
    alert (mensaje)
}

function core() {
    let bandera = true
    while(bandera){
        let opciones = Number(prompt("Bienvenidos a Envases Uy, que desea hacer?\n 1- Ver productos\n 2- Agregar productos al carrito por id\n 3- Buscar un producto por id\n 4- Filtrar productos\n 5- Quitar un producto\n 6- Pagar"))
    
    switch(opciones) {
        case 1: MostrarProductos()
        bandera = confirm("Quiere seguir operando?")
        break
        case 2:
            let id = Number(prompt("Ingrese el ID del producto deseado: "))
            let producto = ArrayDeProductos.find(el => {
                return el.id ===id})
            CarritoCoreo.agregarProducto(producto)
            bandera = confirm("Quiere seguir operando?")
        break
        case 3: buscarUnProducto()
            bandera = confirm("Quiere seguir operando?")
        break
        case 4:
            bandera = confirm("Quiere seguir operando?")
        break
        case 5:
            let idQuitar = Number(prompt("Ingrese el ID del producto deseado: "))
            CarritoCoreo.quitarProducto(idQuitar)
            bandera = confirm("Quiere seguir operando?")
        break
        case 6:
            bandera = confirm("Quiere seguir operando?")
        break
        default: 
        alert ("No tenemos esa opcion")
        bandera = confirm("Quiere seguir operando?")
        break
    }
    }
}

core () */
/* const productos = [
{
    title: "Jordan Grey",
    description: "Remera Jordan Unisex en color gris, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732975/remera_jordan_cknbbt.jpg",
    precio: 1790
},
{
    title: "Reebok Street",
    description: "Championes Reebok, disponible para envío inmediato. Talles disponibles desde el 36 al 46.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/championes_reebok_iaqzao.jpg",
    precio: 6550
},
{
    title: "Gorro Winter Mod",
    description: "Gorro Nike, modelo unisex, ideal para un buen look de invierno.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/drricl973mrs21t9c4ey",
    precio: 1185
},
{
    title: "Pinky Ninky",
    description: "Remera Nike Women en color rosado, disponible para envío inmediato. Talles disponibles: XS, S, M, L.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732975/nike_rosa_frente_swmvco.jpg",
    precio: 990
},
{
    title: "Adidas Original",
    description: "Remera Adidas Unisex en color blanco, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732975/remera_adidas_e6pta2.jpg",
    precio: 1150
},
{
    title: "NB BROWN",
    description: "Championes New Balance en color marrón, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/championes_new_balance_znffmm.jpg",
    precio: 5990
},
{
    title: "Pantalon Classic",
    description: "Pantalon Classic en color negro, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/hnq8kwxmqgozw5wdiwpq",
    precio: 2250
},
{
    title: "Hoodie Classic",
    description: "Hoodie Puma Unisex en color crema, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/buzo_puma_kljn2s.jpg",
    precio: 2890
},
{
    title: "Hoodie Street",
    description: "Hoodie Adidas en color old blue, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/buzo_adidas_asm4jp.jpg",
    precio: 2390
},
{
    title: "Gorra Summer",
    description: "Gorra Adidas en color blanco puro, disponible para envío inmediato.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/gorro_adidas_ifp9d4.jpg",
    precio: 785
},
{
    title: "Hoodie Classic",
    description: "Hoodie Adidas Unisex en color negro, disponible para envío inmediato. Talles disponibles: XS, S, M, L.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/canguro_adidas_eyhkvn.jpg",
    precio: 1890
},
{
    title: "Pantalon Future",
    description: "Pantalon Future, marca Adidas en color gris, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
    imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/bcndszcmvl7rorv2ove3",
    precio: 1790
}
];

const Buscador = document.getElementById("buscador")
const Productos = document.getElementById("productos")

const mostradora = (arrayDeProductos) => {
    Productos.innerHTML = ""
    arrayDeProductos.forEach(el => {
        Productos.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <img src="${el.imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${el.title}</h5>
                        <p class="card-text">${el.description}</p>
                        <span class="card-text">${el.precio}</span>
                        <button id="boton-${el.title}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
    mostradora(productos)
})

Buscador.addEventListener("input", (eve)=>{
    eve.preventDefault()

    const arrayFiltrado = productos.filter(el => el.title.toLowerCase().includes(eve.target.value.toLowerCase()))

    mostradora(arrayFiltrado)
})

// Delegación de eventos para manejar los clics en los botones
Productos.addEventListener("click", (event) => {
    // Verificar si se hizo clic en un botón con id que comienza con "boton-"
    if (event.target.tagName === "BUTTON" && event.target.id.startsWith("boton-")) {
        const productoId = event.target.id.replace("boton-", ""); // Extraer el id del producto
        const productoSeleccionado = productos.find(el => el.title === productoId); // Buscar el producto

        if (productoSeleccionado) {
            carrito.push(productoSeleccionado); // Agregar el producto al carrito
            console.log("Carrito actualizado:", carrito); // Mostrar el carrito en la consola
            alert(`${productoSeleccionado.title} fue agregado al carrito.`);
        }
    }
});

const productoEnCarrito = carrito.find(el => el.title === productoId);
if (productoEnCarrito) {
    productoEnCarrito.cantidad = (productoEnCarrito.cantidad || 1) + 1;
} else {
    carrito.push({ ...productoSeleccionado, cantidad: 1 });
}

const carrito = []; // Arreglo para almacenar los productos del carrito
const contadorCarrito = document.getElementById("contadorCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");

// Función para actualizar el contador del carrito
const actualizarContadorCarrito = () => {
    const cantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contadorCarrito.textContent = cantidad;
};

// Función para renderizar el contenido del carrito en el modal
const renderizarCarrito = () => {
    listaCarrito.innerHTML = ""; // Limpiar el contenido previo
    let total = 0;

    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            ${producto.title} - $${producto.precio} x ${producto.cantidad}
            <span>$${producto.precio * producto.cantidad}</span>
        `;
        listaCarrito.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    totalCarrito.textContent = total;
};

// Delegación de eventos para manejar los clics en los botones
Productos.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.id.startsWith("boton-")) {
        const productoId = event.target.id.replace("boton-", "");
        const productoSeleccionado = productos.find(el => el.title === productoId);

        if (productoSeleccionado) {
            const productoEnCarrito = carrito.find(el => el.title === productoId);
            if (productoEnCarrito) {
                productoEnCarrito.cantidad += 1; // Incrementar la cantidad si ya está en el carrito
            } else {
                carrito.push({ ...productoSeleccionado, cantidad: 1 }); // Agregar nuevo producto al carrito
            }

            actualizarContadorCarrito(); // Actualizar el contador
            renderizarCarrito(); // Actualizar el contenido del modal
            alert(`${productoSeleccionado.title} fue agregado al carrito.`);
        }
    }
});
*/

const productos = [
    {
        title: "Jordan Grey",
        description: "Remera Jordan Unisex en color gris, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732975/remera_jordan_cknbbt.jpg",
        precio: 1790
    },
    {
        title: "Reebok Street",
        description: "Championes Reebok, disponible para envío inmediato. Talles disponibles desde el 36 al 46.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/championes_reebok_iaqzao.jpg",
        precio: 6550
    },
    {
        title: "Gorro Winter Mod",
        description: "Gorro Nike, modelo unisex, ideal para un buen look de invierno.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/drricl973mrs21t9c4ey",
        precio: 1185
    },
    {
        title: "Pinky Ninky",
        description: "Remera Nike Women en color rosado, disponible para envío inmediato. Talles disponibles: XS, S, M, L.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732975/nike_rosa_frente_swmvco.jpg",
        precio: 990
    },
    {
        title: "Adidas Original",
        description: "Remera Adidas Unisex en color blanco, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732975/remera_adidas_e6pta2.jpg",
        precio: 1150
    },
    {
        title: "NB BROWN",
        description: "Championes New Balance en color marrón, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/championes_new_balance_znffmm.jpg",
        precio: 5990
    },
    {
        title: "Pantalon Classic",
        description: "Pantalon Classic en color negro, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/hnq8kwxmqgozw5wdiwpq",
        precio: 2250
    },
    {
        title: "Hoodie Classic",
        description: "Hoodie Puma Unisex en color crema, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/buzo_puma_kljn2s.jpg",
        precio: 2890
    },
    {
        title: "Hoodie Street",
        description: "Hoodie Adidas en color old blue, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/buzo_adidas_asm4jp.jpg",
        precio: 2390
    },
    {
        title: "Gorra Summer",
        description: "Gorra Adidas en color blanco puro, disponible para envío inmediato.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/gorro_adidas_ifp9d4.jpg",
        precio: 785
    },
    {
        title: "Hoodie Classic",
        description: "Hoodie Adidas Unisex en color negro, disponible para envío inmediato. Talles disponibles: XS, S, M, L.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/c_fill,w_1080,h_1080/v1732732974/canguro_adidas_eyhkvn.jpg",
        precio: 1890
    },
    {
        title: "Pantalon Future",
        description: "Pantalon Future, marca Adidas en color gris, disponible para envío inmediato. Talles disponibles: XS, S, M, L, XL y XXL.",
        imgUrl: "https://res.cloudinary.com/dkqpam2fg/image/upload/bcndszcmvl7rorv2ove3",
        precio: 1790
    }
];

const carrito = [];
const Productos = document.getElementById("productos");
const contadorCarrito = document.getElementById("contadorCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");

// Mostrar productos en tarjetas
const mostradora = (arrayDeProductos) => {
    Productos.innerHTML = "";
    arrayDeProductos.forEach(el => {
        Productos.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <img src="${el.imgUrl}" class="card-img-top" alt="${el.title}">
                    <div class="card-body">
                        <h5 class="card-title">${el.title}</h5>
                        <p class="card-text">${el.description}</p>
                        <span class="card-text">$${el.precio}</span>
                        <button class="btn btn-primary mt-2" id="boton-${el.title}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;
    });
};

// Actualizar contador del carrito
const actualizarContadorCarrito = () => {
    const cantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contadorCarrito.textContent = cantidad;
};

// Renderizar el contenido del carrito en el modal
const renderizarCarrito = () => {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            ${producto.title} - $${producto.precio} x ${producto.cantidad}
            <span>$${producto.precio * producto.cantidad}</span>
        `;
        listaCarrito.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    totalCarrito.textContent = total;
};

// Agregar producto al carrito
Productos.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.id.startsWith("boton-")) {
        const productoId = event.target.id.replace("boton-", "");
        const productoSeleccionado = productos.find(el => el.title === productoId);

        if (productoSeleccionado) {
            const productoEnCarrito = carrito.find(el => el.title === productoId);

            if (productoEnCarrito) {
                productoEnCarrito.cantidad += 1;
            } else {
                carrito.push({ ...productoSeleccionado, cantidad: 1 });
            }

            actualizarContadorCarrito();
            renderizarCarrito();
            alert(`${productoSeleccionado.title} fue agregado al carrito.`);
        }
    }
});

// Inicializar productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostradora(productos);
});