const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let window_width = 800;
let window_height = 400;

canvas.width = window_width;
canvas.height = window_height;

// 🔹 Física (MEJORADA)
const gravity = 0.5;
const friction = 0.995;   // menos fricción = más movimiento
const bounce = 0.85;      // más rebote 🔥

let modoActual = "fisica";

class Circle {
  constructor(x, y, radius, color, dx, dy) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;

    this.dx = dx;
    this.dy = dy;
  }

  draw(context) {
    context.beginPath();

    let gradient = context.createRadialGradient(
      this.posX, this.posY, this.radius * 0.2,
      this.posX, this.posY, this.radius
    );

    gradient.addColorStop(0, "rgba(255,255,255,0.8)");
    gradient.addColorStop(1, this.color);

    context.fillStyle = gradient;
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    context.fill();

    context.closePath();
  }

  update(context) {

    // 🔁 MODO CLÁSICO
    if (modoActual === "clasico") {

      this.posX += this.dx;
      this.posY += this.dy;

      if (this.posX + this.radius > window_width || this.posX - this.radius < 0) {
        this.dx *= -1;
      }

      if (this.posY + this.radius > window_height || this.posY - this.radius < 0) {
        this.dy *= -1;
      }
    }

    // 🎾 MODO FÍSICA MEJORADO
    else {

      this.dy += gravity;

      this.posX += this.dx;
      this.posY += this.dy;

      // Lados
      if (this.posX + this.radius > window_width) {
        this.posX = window_width - this.radius;
        this.dx *= -bounce;
      }

      if (this.posX - this.radius < 0) {
        this.posX = this.radius;
        this.dx *= -bounce;
      }

      // Suelo (rebote fuerte)
      if (this.posY + this.radius > window_height) {
        this.posY = window_height - this.radius;
        this.dy *= -bounce;

        // fricción leve
        this.dx *= friction;
      }

      // Techo
      if (this.posY - this.radius < 0) {
        this.posY = this.radius;
        this.dy *= -bounce;
      }

      // 🔥 Mejora: evitar que se detengan demasiado rápido
      if (Math.abs(this.dy) < 0.5) this.dy = 0;
      if (Math.abs(this.dx) < 0.05) this.dx = 0;
    }

    this.draw(context);
  }
}

let circles = [];

// 🔹 Generación (sin cambios)
function generarCirculos(cantidad, efecto) {
  circles = [];

  for (let i = 0; i < cantidad; i++) {
    let radius = Math.random() * 20 + 15;
    let color = `hsla(${Math.random() * 360},70%,60%,0.5)`;

    let x, y, dx, dy;

    switch (efecto) {
      case "top-left":
        x = radius; y = radius;
        dx = Math.random() * 5 + 2;
        dy = Math.random() * 2;
        break;

      case "top-right":
        x = window_width - radius; y = radius;
        dx = -(Math.random() * 5 + 2);
        dy = Math.random() * 2;
        break;

      case "bottom-left":
        x = radius; y = window_height - radius;
        dx = Math.random() * 5 + 2;
        dy = -(Math.random() * 5);
        break;

      case "bottom-right":
        x = window_width - radius; y = window_height - radius;
        dx = -(Math.random() * 5 + 2);
        dy = -(Math.random() * 5);
        break;

      case "top":
        x = Math.random() * window_width; y = radius;
        dx = (Math.random() - 0.5) * 6;
        dy = Math.random() * 2;
        break;

      case "bottom":
        x = Math.random() * window_width; y = window_height - radius;
        dx = (Math.random() - 0.5) * 6;
        dy = -(Math.random() * 5);
        break;
    }

    circles.push(new Circle(x, y, radius, color, dx, dy));
  }
}

// 🔹 Animación
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window_width, window_height);

  circles.forEach(c => c.update(ctx));
}

animate();

// 🔹 Evento
document.getElementById("generar").addEventListener("click", () => {

  const cantidad = parseInt(document.getElementById("cantidad").value);
  const ancho = parseInt(document.getElementById("ancho").value);
  const alto = parseInt(document.getElementById("alto").value);
  const efecto = document.getElementById("efecto").value;
  const modo = document.getElementById("modo").value;

  modoActual = modo;

  window_width = ancho;
  window_height = alto;

  canvas.width = window_width;
  canvas.height = window_height;

  generarCirculos(cantidad, efecto);
});

// Inicial
generarCirculos(5, "top-left");
