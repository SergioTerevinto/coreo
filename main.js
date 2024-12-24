// LLAMAR LA INFO DE MI BASE DE DATOS EN EL .JSON

const llamadoraData = async () => {
    const response = await fetch ("productos.json")
    const arrayNuevo = await response.json ()

    return arrayNuevo;
};

// FUNCION BUSCAR EN EL INPUT BUSCADOR
document.addEventListener("DOMContentLoaded", async () => {
    const productosTodos = await llamadoraData ();
    mostradora(productosTodos);

    buscador.addEventListener("input", (eve) => {
        eve.preventDefault();

        const arrayFiltrado = productosTodos.filter(el =>
            el.title.toLowerCase().includes(eve.target.value.toLowerCase())
        );

        mostradora(arrayFiltrado);
    });
});

// CONSTANTES //

const carrito = []
const Productos = document.getElementById("productos");
const contadorCarrito = document.getElementById("contadorCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");
let productosTodos = [];
document.addEventListener("DOMContentLoaded", async () => {
    productosTodos = await llamadoraData();
    mostradora(productosTodos);
});

// FUNCION QUE MUESTRA LAS CARDS

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

// ACTUALIZADOR DE CARRITO 

const actualizarContadorCarrito = () => {
    const cantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contadorCarrito.textContent = cantidad;
};

const renderizarCarrito = () => {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        const listitaCarrito = document.createElement("div");
        listitaCarrito.className = "list-group-item d-flex justify-content-between align-items-center";

        listitaCarrito.innerHTML = `
            <span>${producto.title} - $${producto.precio} x ${producto.cantidad}</span>
            <span>$${producto.precio * producto.cantidad}</span>
            <button class="btn btn-danger btn-sm quitar-producto" data-id="${producto.title}">Quitar</button>
        `;

        listaCarrito.appendChild(listitaCarrito);
        total += producto.precio * producto.cantidad;
    });

    totalCarrito.textContent = `$${total}`;

    // BOTON QUITAR PRODUCTOS DEL CARRITO, YA SEAN DUPLICADOS O UNICOS

    document.querySelectorAll(".quitar-producto").forEach(boton => {
        boton.addEventListener("click", (e) => {
            const productoId = e.target.dataset.id;
            quitarProductoDelCarrito(productoId);
        });
    });
};

const quitarProductoDelCarrito = (productoId) => {
    const productoEnCarrito = carrito.find(producto => producto.title === productoId);

    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad > 1) {
            productoEnCarrito.cantidad -= 1;
        } else {
            const index = carrito.findIndex(producto => producto.title === productoId);
            carrito.splice(index, 1);
        }

        actualizarContadorCarrito();
        renderizarCarrito();
    }
};

// ACCION EN EL BOTON AGREGAR AL CARRITO

Productos.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.id.startsWith("boton-")) {
        const productoId = event.target.id.replace("boton-", "");
        const productoSeleccionado = productosTodos.find(el => el.title === productoId);

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

// ACCION EN EL BOTON FINALIZAR COMPRA EN EL MODAL

document.getElementById("botonFinalizar").addEventListener("click", () => {
    const modalDireccion = new bootstrap.Modal(document.getElementById("modalDireccion"));
    modalDireccion.show();
  });

  document.getElementById("confirmarCompra").addEventListener("click", () => {
    const direccion = document.getElementById("direccionEnvio").value.trim();
  
    if (direccion === "") {
      alert("Por favor, ingrese una dirección válida.");
      return;
    }
  
// MENSAJE DE CONFIRMACION

    alert(`¡Compra realizada con éxito! Tu pedido será enviado a: ${direccion}`);
  
// VACIAR CARRITO LUEGO DE COMPRAR

    carrito.length = 0;
    renderizarCarrito();
    actualizarContadorCarrito();
  
// CERRAR EL MODAL

    const modalDireccion = bootstrap.Modal.getInstance(document.getElementById("modalDireccion"));
    modalDireccion.hide();
  });
  
  // FILTRAR EN LA OPCION BUSCAR

document.addEventListener("DOMContentLoaded", () => {
    mostradora(productosTodos);

    buscador.addEventListener("input", (eve) => {
        eve.preventDefault();
    
        const arrayFiltrado = productosTodos.filter(el =>
            el.title.toLowerCase().includes(eve.target.value.toLowerCase())
        );
    
        mostradora(arrayFiltrado);
    });
    
});
