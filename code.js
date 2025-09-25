function createFavicon() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  // Fundo degradê azul → roxo
  const gradient = ctx.createLinearGradient(0, 0, 64, 64);
  gradient.addColorStop(0, "#0423afff");
  gradient.addColorStop(1, "#550ea0ff");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  // Texto "JX"
  ctx.font = "bold 36px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("JX", 32, 36);

  // Define como favicon
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = canvas.toDataURL("image/png");
  document.head.appendChild(link);
}

createFavicon();
