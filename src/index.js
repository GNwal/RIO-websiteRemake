import './assets/css/style.css'

// Botão de notificação
const toggleButton = document.getElementById("toggle-notify");
const notificacoes = document.getElementById("notificacoes");

toggleButton.addEventListener("click", function() {
    if (notificacoes.style.display === "none") {
        notificacoes.style.display = "flex";
    } else {
        notificacoes.style.display = "none";
    }
});

// Botão whitelist

const togglewl = document.getElementById("toggle-wl");
const wl = document.getElementById("open");

togglewl.addEventListener("click", function () {
    if (wl.style.display === "flex") {
        wl.style.display = "none";
    } else {
        wl.style.display = "flex";
    }
});

// Botão 1 canvas

const canvas = document.getElementById("button1");
const ctx = canvas.getContext("2d");

const buttonWidth = 340;
const buttonHeight = 141;
const buttonX = 0;
const buttonY = 0;
const color = "#6B8A43";
const imageSrc = "";
const imageWidth = 43;
const imageHeight = 33;

let progress = 0;
let isHovering = false;
let speed = 0.02; 

ctx.fillStyle = color;
ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

canvas.style.borderRadius = "5px"; 

canvas.addEventListener("mouseover", function(event) {
  isHovering = true;
});

canvas.addEventListener("mouseout", function(event) {
  isHovering = false;
});

function animate() {
  if (isHovering) {
    ctx.clearRect(buttonX, buttonY, progress * buttonWidth, buttonHeight);
    ctx.fillStyle = "#627C40";
    ctx.fillRect(buttonX, buttonY, progress * buttonWidth, buttonHeight);
    progress += speed;
    if (progress >= 1) {
      progress = 1;
    }
  } else {
    ctx.clearRect(buttonX + progress * buttonWidth, buttonY, (1 - progress) * buttonWidth, buttonHeight);
    ctx.fillStyle = color;
    ctx.fillRect(buttonX + progress * buttonWidth, buttonY, (1 - progress) * buttonWidth, buttonHeight);
    progress -= speed;
    if (progress <= 0) {
      progress = 0;
    }
  }

  
  const img = new Image();
  img.src = imageSrc;
  img.onload = function() {
    ctx.drawImage(img, buttonX + 20, buttonY + buttonHeight/2 - imageHeight/2, imageWidth, imageHeight);
  };

  
  ctx.fillStyle = "#FFF";
  ctx.font = "bold 30px SF Pro Display";
  ctx.textAlign = "center";
  ctx.fillText("Jogar", buttonX + 170, buttonY + buttonHeight/2 - 15);

  
  ctx.fillStyle = "#FFF";
  ctx.font = "16px SF Pro Display";
  ctx.textAlign = "left";
  ctx.fillText("Players: 564", buttonX + 130, buttonY + buttonHeight/2 + 15);
  
  requestAnimationFrame(animate);
}

animate();


animate();







  
