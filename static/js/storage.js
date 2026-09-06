/* Forte & Piano - storage.js
   Maneja las colecciones de localStorage (base de datos simulada),
   la sesion del usuario y la barra de navegacion comun a todas las paginas. */

const FORTEPIANO_KEYS = {
    usuarios: "forte_usuarios",
    productos: "forte_productos",
    categorias: "forte_categorias",
    regiones: "forte_regiones",
    comunas: "forte_comunas",
    roles: "forte_roles",
    carrito: "forte_carrito",
    contactos: "forte_contactos",
    blog: "forte_blog",
    sesion: "forte_sesion"
};

function obtenerColeccion(clave) {
    return JSON.parse(localStorage.getItem(clave)) || [];
}

function guardarColeccion(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
}

/* ---------- Datos iniciales de prueba ---------- */

function inicializarDatos() {
    if (!localStorage.getItem(FORTEPIANO_KEYS.roles)) {
        guardarColeccion(FORTEPIANO_KEYS.roles, [
            { id: 1, nombre: "Administrador" },
            { id: 2, nombre: "Vendedor" },
            { id: 3, nombre: "Cliente" }
        ]);
    }

    if (!localStorage.getItem(FORTEPIANO_KEYS.categorias)) {
        guardarColeccion(FORTEPIANO_KEYS.categorias, [
            { id: 1, nombre: "Pianos Acusticos" },
            { id: 2, nombre: "Pianos Digitales" },
            { id: 3, nombre: "Sintetizadores" },
            { id: 4, nombre: "Accesorios" },
            { id: 5, nombre: "Amplificadores" },
            { id: 6, nombre: "Partituras" }
        ]);
    }

    if (!localStorage.getItem(FORTEPIANO_KEYS.regiones)) {
        guardarColeccion(FORTEPIANO_KEYS.regiones, [
            { id: 1, nombre: "Region Metropolitana" },
            { id: 2, nombre: "Valparaiso" },
            { id: 3, nombre: "Biobio" }
        ]);
    }

    if (!localStorage.getItem(FORTEPIANO_KEYS.comunas)) {
        guardarColeccion(FORTEPIANO_KEYS.comunas, [
            { id: 1, regionId: 1, nombre: "Santiago" },
            { id: 2, regionId: 1, nombre: "Providencia" },
            { id: 3, regionId: 1, nombre: "Maipu" },
            { id: 4, regionId: 2, nombre: "Valparaiso" },
            { id: 5, regionId: 2, nombre: "Vina del Mar" },
            { id: 6, regionId: 3, nombre: "Concepcion" },
            { id: 7, regionId: 3, nombre: "Talcahuano" }
        ]);
    }

    if (!localStorage.getItem(FORTEPIANO_KEYS.usuarios)) {
        guardarColeccion(FORTEPIANO_KEYS.usuarios, [
            {
                run: "123456785", nombre: "Admin", apellidos: "Forte",
                correo: "admin@gmail.com", password: "admin123",
                fechaNacimiento: "1990-01-01", rolId: 1,
                regionId: 1, comunaId: 1, direccion: "Av. Principal 123",
                estado: "Activo"
            },
            {
                run: "987654325", nombre: "Vendedor", apellidos: "Forte",
                correo: "vendedor@gmail.com", password: "vend1234",
                fechaNacimiento: "1992-05-14", rolId: 2,
                regionId: 1, comunaId: 2, direccion: "Calle Venta 456",
                estado: "Activo"
            },
            {
                run: "112223339", nombre: "Camila", apellidos: "Soto Perez",
                correo: "camila@gmail.com", password: "cliente1",
                fechaNacimiento: "1998-03-22", rolId: 3,
                regionId: 2, comunaId: 4, direccion: "Los Aromos 789",
                estado: "Activo"
            },
            {
                run: "201113334", nombre: "Diego", apellidos: "Fernandez Rojas",
                correo: "diego@duoc.cl", password: "diego123",
                fechaNacimiento: "2001-11-09", rolId: 3,
                regionId: 3, comunaId: 6, direccion: "Las Rosas 321",
                estado: "Activo"
            }
        ]);
    }

    if (!localStorage.getItem(FORTEPIANO_KEYS.productos)) {
        guardarColeccion(FORTEPIANO_KEYS.productos, [
            { codigo: "AC-005", nombre: "Soporte de Teclado Tijera", descripcion: "Atril de metal resistente con altura ajustable, compatible con la mayoría de pianos digitales y teclados.", precio: 17990, stock: 10, stockCritico: 3, categoriaId: 4, imagen: "productos/soporte.svg", estado: "Activo" },
            { codigo: "PD-006", nombre: "Roland FP-30X", descripcion: "Piano digital portátil de gran rendimiento con motor de sonido SuperNATURAL y conexión Bluetooth.", precio: 699990, stock: 25, stockCritico: 5, categoriaId: 2, imagen: "productos/roland-fp30x.svg", estado: "Activo" },
            { codigo: "AD-001", nombre: "Funda impermeable", descripcion: "Funda acolchada para proteger tu piano del polvo y la humedad.", precio: 25000, stock: 15, stockCritico: 4, categoriaId: 4, imagen: "productos/funda.svg", estado: "Activo" },
            { codigo: "PA-001", nombre: "Piano Yamaha U1", descripcion: "Piano acústico vertical de alta calidad, ideal para estudiantes avanzados y profesionales.", precio: 3299000, stock: 5, stockCritico: 2, categoriaId: 1, imagen: "productos/yamaha-u1.svg", estado: "Activo" },
            { codigo: "PD-001", nombre: "Yamaha P-45", descripcion: "Piano digital de entrada con 88 teclas contrapesadas y tecnología Pure CF Sampling.", precio: 459990, stock: 30, stockCritico: 5, categoriaId: 2, imagen: "productos/yamaha-p45.svg", estado: "Activo" },
            { codigo: "AD-002", nombre: "Banco de piano acolchado", descripcion: "Banco ajustable en altura con asiento acolchado para mayor comodidad.", precio: 45000, stock: 20, stockCritico: 4, categoriaId: 4, imagen: "productos/banco.svg", estado: "Activo" },
            { codigo: "AC-001", nombre: "Atril de partituras", descripcion: "Atril plegable de metal con altura ajustable.", precio: 12990, stock: 15, stockCritico: 3, categoriaId: 4, imagen: "productos/atril.svg", estado: "Activo" },
            { codigo: "SY-001", nombre: "Sintetizador Korg Volca FM", descripcion: "Sintetizador FM compacto con 61 teclas y 32 voces de polifonía.", precio: 189990, stock: 12, stockCritico: 3, categoriaId: 3, imagen: "productos/volca-fm.svg", estado: "Activo" },
            { codigo: "AD-003", nombre: "Pedal de sustain", descripcion: "Pedal conmutable conmutable para pianos digitales.", precio: 15000, stock: 25, stockCritico: 5, categoriaId: 4, imagen: "productos/pedal.svg", estado: "Activo" },
            { codigo: "PA-002", nombre: "Piano Kawai K-300", descripcion: "Piano vertical profesional con acción Millennium III y sistema Silent opcional.", precio: 4599000, stock: 3, stockCritico: 1, categoriaId: 1, imagen: "productos/kawai-k300.svg", estado: "Activo" },
            { codigo: "PD-002", nombre: "Casio PX-770", descripcion: "Piano digital de mueble con 88 teclas contrapesadas y tecnología AiR Sound.", precio: 659990, stock: 18, stockCritico: 4, categoriaId: 2, imagen: "productos/casio-px770.svg", estado: "Activo" },
            { codigo: "AM-001", nombre: "Amplificador Marshall MG10", descripcion: "Amplificador de práctica de 10W con dos canales y efectos integrados.", precio: 129990, stock: 8, stockCritico: 2, categoriaId: 5, imagen: "productos/marshall-mg10.svg", estado: "Activo" },
            { codigo: "PA-003", nombre: "Piano Steinway & Sons Model O", descripcion: "Piano de cola de concierto con sonido rico y resonancia excepcional.", precio: 32499000, stock: 1, stockCritico: 1, categoriaId: 1, imagen: "productos/steinway-model-o.svg", estado: "Activo" }
        ]);
    }

    if (!localStorage.getItem(FORTEPIANO_KEYS.blog)) {
        guardarColeccion(FORTEPIANO_KEYS.blog, [
            { id: 1, titulo: "Forte & Piano abre sus puertas", resumen: "Nace una nueva tienda online pensada por y para los pianistas y músicos de Chile.", imagen: "blog/apertura.svg", fecha: "2026-08-01", slug: "detalle-1" },
            { id: 2, titulo: "Cuidando tu piano acústico", resumen: "Consejos clave sobre humedad, temperatura y afinación para mantener tu piano en perfecto estado.", imagen: "blog/cuidados.svg", fecha: "2026-08-10", slug: "detalle-2" },
            { id: 3, titulo: "5 curiosidades sobre los pianos", resumen: "Datos interesantes que quizás no conocías sobre el rey de los instrumentos musicales.", imagen: "blog/curiosidades.svg", fecha: "2026-08-20", slug: "detalle-1" }
        ]);
    }

    if (!localStorage.getItem(FORTEPIANO_KEYS.carrito)) {
        guardarColeccion(FORTEPIANO_KEYS.carrito, []);
    }

    if (!localStorage.getItem(FORTEPIANO_KEYS.contactos)) {
        guardarColeccion(FORTEPIANO_KEYS.contactos, []);
    }
}

/* ---------- Sesion ---------- */

function obtenerSesion() {
    return JSON.parse(localStorage.getItem(FORTEPIANO_KEYS.sesion)) || null;
}

function guardarSesion(usuario) {
    localStorage.setItem(FORTEPIANO_KEYS.sesion, JSON.stringify(usuario));
}

function cerrarSesion() {
    localStorage.removeItem(FORTEPIANO_KEYS.sesion);
    window.location.href = "/login";
}

function obtenerNombreRol(rolId) {
    const rol = obtenerColeccion(FORTEPIANO_KEYS.roles).find(function (r) { return r.id === rolId; });
    return rol ? rol.nombre : "";
}

/* Protege paginas administrativas segun el rol permitido. */
function protegerPaginaAdmin(rolesPermitidos) {
    const sesion = obtenerSesion();
    if (!sesion || rolesPermitidos.indexOf(sesion.rolId) === -1) {
        Swal.fire({
            title: "Acceso restringido",
            text: "Debes iniciar sesion con una cuenta autorizada para ver esta pagina.",
            icon: "warning",
            confirmButtonText: "Ir a Iniciar sesion"
        }).then(function () {
            window.location.href = "/login";
        });
        return false;
    }
    return true;
}

/* ---------- Navbar dinamica ---------- */

function actualizarNavbar() {
    const sesion = obtenerSesion();
    const navInvitado = document.getElementById("navInvitado");
    const navUsuario = document.getElementById("navUsuario");
    const navUsuarioNombre = document.getElementById("navUsuarioNombre");
    const navAdminItem = document.getElementById("navAdminItem");
    const btnCerrarSesion = document.getElementById("btnCerrarSesion");

    if (!navInvitado || !navUsuario) return;

    if (sesion) {
        navInvitado.style.display = "none";
        navUsuario.style.display = "block";
        if (navUsuarioNombre) navUsuarioNombre.textContent = sesion.nombre;
        if (navAdminItem && (sesion.rolId === 1 || sesion.rolId === 2)) {
            navAdminItem.style.display = "block";
        }
    } else {
        navInvitado.style.display = "flex";
        navUsuario.style.display = "none";
        if (navAdminItem) navAdminItem.style.display = "none";
    }

    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", function (evento) {
            evento.preventDefault();
            cerrarSesion();
        });
    }
}

/* ---------- Badge del carrito ---------- */

function actualizarBadgeCarrito() {
    const carrito = obtenerColeccion(FORTEPIANO_KEYS.carrito);
    let totalItems = 0;
    for (let i = 0; i < carrito.length; i++) {
        totalItems += carrito[i].cantidad;
    }
    const badge = document.getElementById("carritoBadge");
    if (!badge) return;
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.style.display = "block";
    } else {
        badge.style.display = "none";
    }
}

/* Oculta la seccion de Usuarios en el menu administrativo para el rol Vendedor. */
function ocultarUsuariosSiVendedor() {
    const sesion = obtenerSesion();
    if (!sesion || sesion.rolId !== 2) return;
    const enlaceSidebar = document.getElementById("sidebarUsuariosLink");
    const enlaceOffcanvas = document.getElementById("offcanvasUsuariosLink");
    if (enlaceSidebar) enlaceSidebar.style.display = "none";
    if (enlaceOffcanvas) enlaceOffcanvas.style.display = "none";
}

/* Marca como activo el enlace del navbar/sidebar que corresponde a la pagina actual. */
function marcarEnlaceActivo() {
    const rutaActual = window.location.pathname;
    document.querySelectorAll(".nav-link").forEach(function (enlace) {
        const href = enlace.getAttribute("href");
        if (href && href !== "#" && href === rutaActual) {
            enlace.classList.add("active");
        }
    });
}

function formatearPrecio(valor) {
    return "$" + Number(valor).toLocaleString("es-CL");
}

document.addEventListener("DOMContentLoaded", function () {
    inicializarDatos();
    actualizarNavbar();
    actualizarBadgeCarrito();
    marcarEnlaceActivo();
});
