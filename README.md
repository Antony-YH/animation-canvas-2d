✨ Canvas Glass App
Una aplicación web interactiva que combina la potencia de HTML5 Canvas con una estética moderna de Glassmorphism. Este simulador permite generar partículas circulares con comportamientos físicos personalizables, como gravedad, rebote y fricción.

🚀 Características
Simulación de Física: Implementación de gravedad real, coeficientes de rebote y fricción para un movimiento natural.

Dos Modos de Simulación:

🍎 Gravedad Realista: Las partículas caen y rebotan perdiendo energía.

♾️ Rebote Infinito: Estilo clásico de protector de pantalla donde la velocidad es constante.

Personalización en Tiempo Real: * Cambia la cantidad de círculos (hasta 100).

Ajusta las dimensiones del área de simulación (Canvas).

Selecciona 6 puntos de aparición distintos (esquinas, arriba o abajo).

Diseño Moderno: Interfaz ultra-limpia basada en efectos de desenfoque (backdrop-filter) y transparencia.

🛠️ Estructura del Proyecto
Basado en la organización de archivos actual:

Plaintext
animation-canvas/
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados y Glassmorphism
│   ├── img/
│   │   ├── favicon.png     # Icono de la página
│   │   └── fondo.jpg       # Imagen de fondo principal
│   └── js/
│       └── main.js         # Lógica del motor físico y renderizado
├── index.html              # Estructura principal
└── README.md               # Documentación

💻 Instalación y Uso
Clona este repositorio o descarga los archivos.

Asegúrate de mantener la estructura de carpetas (assets/css, assets/js, etc.).

Abre el archivo index.html en cualquier navegador moderno.

¡Configura los parámetros y haz clic en APLICAR SIMULACIÓN!

🧬 Detalles Técnicos
El Motor de Partículas
La clase Circle en main.js gestiona tanto el renderizado como la lógica matemática:

Gradientes Radiales: Cada círculo tiene un degradado dinámico para simular iluminación 3D.

Manejo de Colisiones: Se detectan los límites del Canvas para invertir vectores de velocidad con una pérdida controlada de energía (bounce).

Optimización: Incluye umbrales mínimos de velocidad para evitar cálculos innecesarios cuando las partículas están casi en reposo.

Estilos (Glassmorphism)
El efecto de "vidrio" se logra mediante CSS avanzado:

CSS
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.2);
}

👤 Autor
Antonio Yañez Hernandez
Año: 2026

Desarrollado como proyecto de experimentación con Canvas API y Bootstrap 5.