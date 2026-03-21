# 🔵 Canvas Glass App

![Versión](https://img.shields.io/badge/Versión-1.0.0-blue)
![Licencia](https://img.shields.io/badge/Licencia-MIT-green)
![Año](https://img.shields.io/badge/Año-2026-orange)

Una experiencia visual interactiva construida con **HTML5 Canvas** y un motor de física personalizado en **JavaScript**. La aplicación utiliza una estética **Glassmorphism** (vidrio esmerilado) para ofrecer una interfaz moderna y elegante.

---

## 📸 Vista Previa del Proyecto

| Característica | Descripción |
| :--- | :--- |
| **Interfaz** | Diseño basado en capas de cristal con `backdrop-filter`. |
| **Física** | Simulación de gravedad, rebote (`bounce`) y fricción. |
| **Personalización** | Control total sobre cantidad, tamaño y origen de partículas. |
| **Modos** | Alterna entre Gravedad Realista 🍎 y Rebote Infinito ♾️. |

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 & Canvas API:** Motor de renderizado 2D para las partículas.
* **JavaScript (ES6):** Lógica de clases para la física de los círculos.
* **Bootstrap 5:** Estructura responsiva y componentes de interfaz.
* **CSS3 Custom:** Efectos de desenfoque y gradientes dinámicos.

---

## 📂 Estructura de Archivos

```text
animation-canvas/
├── 📄 index.html           # Estructura principal y componentes UI
├── 📂 assets/
│   ├── 📂 css/
│   │   └── 🎨 styles.css    # Estilos Glassmorphism y overrides
│   ├── 📂 img/
│   │   ├── 🖼️ fondo.jpg     # Imagen de fondo (Wallpaper)
│   │   └── 🏷️ favicon.png   # Icono de la aplicación
│   └── 📂 js/
│       └── ⚡ main.js      # Motor físico y lógica de animación
└── 📄 README.md            # Documentación del proyecto


💻 Instalación y Uso
Clonación: Descarga o clona este repositorio.

Preparación: Asegúrate de que la ruta de la imagen de fondo en styles.css sea correcta (../img/fondo.jpg).

Ejecución: Abre el archivo index.html directamente en tu navegador.

Interacción: * Cambia los valores en el panel superior.

Pulsa APLICAR SIMULACIÓN para resetear el canvas con la nueva configuración.


🧬 Detalles del Motor Físico
El núcleo de la aplicación utiliza una clase Circle que gestiona su propio estado. Los parámetros físicos configurados son:

[!IMPORTANT]
Gravedad: 0.5 (Aceleración constante en el eje Y).

Rebote (Bounce): 0.85 (Conserva el 85% de la fuerza tras un impacto).

Fricción: 0.995 (Reduce la velocidad lateral gradualmente al tocar el suelo).

JavaScript:

// Ejemplo de renderizado dinámico con iluminación 3D
let gradient = context.createRadialGradient(
  this.posX, this.posY, this.radius * 0.2,
  this.posX, this.posY, this.radius
);
gradient.addColorStop(0, "rgba(255,255,255,0.8)"); // Punto de luz
gradient.addColorStop(1, this.color);              // Color base


👤 Autor
Desarrollado por Antonio Yañez Hernandez | 2026 
Materia: Graficación.