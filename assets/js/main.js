const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let window_width = 800;
let window_height = 400;

canvas.width = window_width;
canvas.height = window_height;

// 🔹 Clase Circle
class Circle {
  constructor(x, y, radius, color, speed) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.speed = speed;

    this.dx = (Math.random() < 0.5 ? -1 : 1) * this.speed;
    this.dy = (Math.random() < 0.5 ? -1 : 1) * this.speed;
  }

  draw(context) {
    context.beginPath();

    // 🎨 Efecto glass en círculo
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
    this.posX += this.dx;
    this.posY += this.dy;

    // Rebotes corregidos
    if (this.posX + this.radius > window_width) {
      this.posX = window_width - this.radius;
      this.dx *= -1;
    }

    if (this.posX - this.radius < 0) {
      this.posX = this.radius;
      this.dx *= -1;
    }

    if (this.posY + this.radius > window_height) {
      this.posY = window_height - this.radius;
      this.dy *= -1;
    }

    if (this.posY - this.radius < 0) {
      this.posY = this.radius;
      this.dy *= -1;
    }

    this.draw(context);
  }
}

let circles = [];

// 🔹 Generar círculos
function generarCirculos(cantidad) {
  circles = [];

  for (let i = 0; i < cantidad; i++) {
    let radius = Math.random() * 30 + 20;

    let x = Math.random() * (window_width - 2 * radius) + radius;
    let y = Math.random() * (window_height - 2 * radius) + radius;

    let color = `hsla(${Math.random() * 360}, 70%, 60%, 0.4)`;
    let speed = Math.random() * 3 + 1;

    circles.push(new Circle(x, y, radius, color, speed));
  }
}

// 🔹 Animación
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window_width, window_height);

  circles.forEach(c => c.update(ctx));
}

animate();

// 🔹 Evento botón
document.getElementById("generar").addEventListener("click", () => {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const ancho = parseInt(document.getElementById("ancho").value);
  const alto = parseInt(document.getElementById("alto").value);

  window_width = ancho;
  window_height = alto;

  canvas.width = window_width;
  canvas.height = window_height;

  generarCirculos(cantidad);
});

// Inicial
generarCirculos(5);

