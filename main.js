/* const clientes = [

    {
        nombre: "Tomas",
        categoria: "minorista",
        tope: 15000,
    },

    {
        nombre: "Artigas", 
        categoria : "minorista",
        tope: 12000,
    },

    {
        nombre: "Hugo", 
        categoria : "mayorista",
        tope: 45000,
    },

    {
        nombre: "Pedro", 
        categoria : "mayorista",
        tope: 45000,
    },

    {
        nombre: "Luisa", 
        categoria : "mayorista",
        tope: 42000,
    },
];

const TipoDeCliente = clientes.filter (cliente => cliente.categoria === "mayorista");

console.log(TipoDeCliente);*/

const productosEnvases = [
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

core ()