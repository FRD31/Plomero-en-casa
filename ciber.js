// Función para ocultar el contenido y mostrar un mensaje de advertencia
function showWarning() {
    alert('El acceso al código fuente de esta página está restringido.');
    document.body.innerHTML = `
        <div style="text-align: center; margin-top: 20%;">
            <h1>Acceso Denegado</h1>
            <p>El contenido de esta página está protegido y no puede ser visualizado.</p>
            <p>Si deseas más información, contacta con el administrador del sitio.</p>
        </div>
    `;
}

// Desactivar el botón derecho del ratón y mostrar alerta
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showWarning();
});

// Detectar si el usuario intenta ver el código fuente usando herramientas del navegador
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        showWarning();
    }
});

// Detectar si el usuario intenta abrir las herramientas de desarrollador con F12
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
        showWarning();
    }
});
