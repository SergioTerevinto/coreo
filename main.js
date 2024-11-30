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
                        <button class="btn" id="boton-${el.title}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;
    });


};

const actualizarContadorCarrito = () => {
    const cantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contadorCarrito.textContent = cantidad;
};

const renderizarCarrito = () => {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        const listitaCarrito = document.createElement("listitaCarrito");
        listitaCarrito.className = "list-group-item d-flex justify-content-between align-items-center";
        listitaCarrito.innerHTML = `
            ${producto.title} - $${producto.precio} x ${producto.cantidad}
            <span>$${producto.precio * producto.cantidad}</span>
        `;
        listaCarrito.appendChild(listitaCarrito);
        total += producto.precio * producto.cantidad;
    });

    totalCarrito.textContent = total;
};

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
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    mostradora(productos);

    buscador.addEventListener("input", (eve) => {
        eve.preventDefault();
    
        const arrayFiltrado = productos.filter(el =>
            el.title.toLowerCase().includes(eve.target.value.toLowerCase())
        );
    
        mostradora(arrayFiltrado);
    });
    
});

