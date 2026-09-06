/* Forte & Piano - storage.js
   Maneja las colecciones de localStorage (base de datos simulada),
   la sesion del usuario y la barra de navegacion comun a todas las paginas. */

const NEXO_KEYS = {
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
    if (!localStorage.getItem(NEXO_KEYS.roles)) {
        guardarColeccion(NEXO_KEYS.roles, [
            { id: 1, nombre: "Administrador" },
            { id: 2, nombre: "Vendedor" },
            { id: 3, nombre: "Cliente" }
        ]);
    }

    if (!localStorage.getItem(NEXO_KEYS.categorias)) {
        guardarColeccion(NEXO_KEYS.categorias, [
            { id: 1, nombre: "Accion" },
            { id: 2, nombre: "Pianos Digitales" },
            { id: 3, nombre: "Sintetizadores" },
            { id: 4, nombre: "Accesorios" },
            { id: 5, nombre: "Amplificadores" },
            { id: 6, nombre: "Indie" },
            { id: 7, nombre: "Terror" }
        ]);
    }

    if (!localStorage.getItem(NEXO_KEYS.regiones)) {
        guardarColeccion(NEXO_KEYS.regiones, [
            { id: 1, nombre: "Region Metropolitana" },
            { id: 2, nombre: "Valparaiso" },
            { id: 3, nombre: "Biobio" }
        ]);
    }

    if (!localStorage.getItem(NEXO_KEYS.comunas)) {
        guardarColeccion(NEXO_KEYS.comunas, [
            { id: 1, regionId: 1, nombre: "Santiago" },
            { id: 2, regionId: 1, nombre: "Providencia" },
            { id: 3, regionId: 1, nombre: "Maipu" },
            { id: 4, regionId: 2, nombre: "Valparaiso" },
            { id: 5, regionId: 2, nombre: "Vina del Mar" },
            { id: 6, regionId: 3, nombre: "Concepcion" },
            { id: 7, regionId: 3, nombre: "Talcahuano" }
        ]);
    }

    if (!localStorage.getItem(NEXO_KEYS.usuarios)) {
        guardarColeccion(NEXO_KEYS.usuarios, [
            {
                run: "123456785", nombre: "Admin", apellidos: "Nexo",
                correo: "admin@gmail.com", password: "admin123",
                fechaNacimiento: "1990-01-01", rolId: 1,
                regionId: 1, comunaId: 1, direccion: "Av. Principal 123",
                estado: "Activo"
            },
            {
                run: "987654325", nombre: "Vendedor", apellidos: "Nexo",
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

    if (!localStorage.getItem(NEXO_KEYS.productos)) {
        guardarColeccion(NEXO_KEYS.productos, [
            { codigo: "NG-001", nombre: "Star Quest Odyssey", descripcion: "Un extenso RPG espacial donde exploras galaxias, formas tu tripulacion y enfrentas antiguas amenazas cosmicas.", precio: 29990, stock: 15, stockCritico: 3, categoriaId: 3, imagen: "productos/star-quest.svg", estado: "Activo" },
            { codigo: "NG-002", nombre: "Turbo Rally Extreme", descripcion: "Carreras arcade a toda velocidad con circuitos extremos y personalizacion completa de vehiculos.", precio: 24990, stock: 20, stockCritico: 5, categoriaId: 4, imagen: "productos/turbo-rally.svg", estado: "Activo" },
            { codigo: "NG-003", nombre: "Shadow Realm Tactics", descripcion: "Estrategia por turnos en un reino de sombras donde cada decision cambia el destino del ejercito.", precio: 19990, stock: 8, stockCritico: 2, categoriaId: 5, imagen: "productos/shadow-realm.svg", estado: "Activo" },
            { codigo: "NG-004", nombre: "Neon Strike Force", descripcion: "Accion frenetica en una ciudad cyberpunk, combate cuerpo a cuerpo y armas futuristas.", precio: 34990, stock: 12, stockCritico: 4, categoriaId: 1, imagen: "productos/neon-strike.svg", estado: "Activo" },
            { codigo: "NG-005", nombre: "Soporte de Teclado Tijera", descripcion: "Aventura narrativa y exploracion en un bosque encantado lleno de secretos por descubrir.", precio: 17990, stock: 10, stockCritico: 3, categoriaId: 2, imagen: "productos/whispering-woods.svg", estado: "Activo" },
            { codigo: "NG-006", nombre: "Roland FP-30X", descripcion: "Un plataformero indie retro con caballeros pixelados y niveles cooperativos.", precio: 9990, stock: 25, stockCritico: 5, categoriaId: 6, imagen: "productos/pixel-knights.svg", estado: "Activo" },
            { codigo: "NG-007", nombre: "Galactic Siege Commander", descripcion: "Gestiona flotas, recursos y alianzas en este juego de estrategia espacial masivo.", precio: 27990, stock: 2, stockCritico: 3, categoriaId: 5, imagen: "productos/galactic-siege.svg", estado: "Activo" },
            { codigo: "NG-008", nombre: "Midnight Horror House", descripcion: "Sobrevive una noche en una mansion embrujada llena de acertijos y criaturas aterradoras.", precio: 22990, stock: 6, stockCritico: 2, categoriaId: 7, imagen: "productos/midnight-horror.svg", estado: "Activo" }
        ]);
    }

    if (!localStorage.getItem(NEXO_KEYS.blog)) {
        guardarColeccion(NEXO_KEYS.blog, [
            { id: 1, titulo: "Forte & Piano abre sus puertas", resumen: "Nace una nueva tienda online pensada por y para la comunidad gamer de Chile.", imagen: "blog/apertura.svg", fecha: "2026-08-01", slug: "detalle-1" },
            { id: 2, titulo: "Los lanzamientos mas esperados del ano", resumen: "Repasamos los titulos que marcaran tendencia en los proximos meses.", imagen: "blog/lanzamientos.svg", fecha: "2026-08-10", slug: "detalle-2" },
            { id: 3, titulo: "5 curiosidades del mundo gamer", resumen: "Datos curiosos que quizas no conocias sobre la industria de los productos.", imagen: "blog/curiosidades.svg", fecha: "2026-08-20", slug: "detalle-1" }
        ]);
    }

    if (!localStorage.getItem(NEXO_KEYS.carrito)) {
        guardarColeccion(NEXO_KEYS.carrito, []);
    }

    if (!localStorage.getItem(NEXO_KEYS.contactos)) {
        guardarColeccion(NEXO_KEYS.contactos, []);
    }
}

/* ---------- Sesion ---------- */

function obtenerSesion() {
    return JSON.parse(localStorage.getItem(NEXO_KEYS.sesion)) || null;
}

function guardarSesion(usuario) {
    localStorage.setItem(NEXO_KEYS.sesion, JSON.stringify(usuario));
}

function cerrarSesion() {
    localStorage.removeItem(NEXO_KEYS.sesion);
    window.location.href = "/login";
}

function obtenerNombreRol(rolId) {
    const rol = obtenerColeccion(NEXO_KEYS.roles).find(function (r) { return r.id === rolId; });
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
    const carrito = obtenerColeccion(NEXO_KEYS.carrito);
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
