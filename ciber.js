// Función para ocultar el contenido y mostrar un mensaje de advertencia
function hideContent() {
    document.body.innerHTML = `
        <div style="text-align: center; margin-top: 20%;">
            <h1>Acceso Denegado</h1>
            <p>El contenido de esta página está protegido y no puede ser visualizado.</p>
            <p>Si deseas más información, contacta con el administrador del sitio.</p>
        </div>
    `;
}

// Detectar la apertura de las herramientas de desarrollador
function detectDevTools() {
    const threshold = 160; // Umbral de tamaño de la ventana para detectar el panel de herramientas
    let isDevToolsOpen = false;

    setInterval(() => {
        if (window.outerWidth - window.innerWidth > threshold || 
            window.outerHeight - window.innerHeight > threshold) {
            if (!isDevToolsOpen) {
                isDevToolsOpen = true;
                hideContent();
            }
        } else {
            isDevToolsOpen = false;
        }
    }, 1000);
}

// Llamar a la función para detectar las herramientas de desarrollador
detectDevTools();

// También puedes agregar detección para el clic derecho aquí si lo deseas
