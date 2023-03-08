const canvas = document.getElementById('board') as HTMLCanvasElement;
const drawRectButton = document.getElementById('drawRect') as HTMLButtonElement;
const drawLineButton = document.getElementById('drawLine') as HTMLButtonElement;
const drawArcButton = document.getElementById('drawArc') as HTMLButtonElement;
const drawImageButton = document.getElementById(
  'drawImage'
) as HTMLButtonElement;
const clearCanvasButton = document.getElementById(
  'clearCanvas'
) as HTMLButtonElement;

document.addEventListener('DOMContentLoaded', main, false);

drawRectButton.addEventListener('click', () => {
  fillBlueRectIfSupports(canvas);
});

drawLineButton.addEventListener('click', () => {
  drawRedLineIfSupports(canvas);
});

drawArcButton.addEventListener('click', () => {
  drawGreenArcIfSupports(canvas);
});

clearCanvasButton.addEventListener('click', () => {
  clearIfSupports(canvas);
});

function main() {
  clearIfSupports(canvas);
}

function fillBlueRectIfSupports(canvas: HTMLCanvasElement) {
  if (supports(canvas)) {
    const context = canvas.getContext('2d', { alpha: false });
    fillBlueRect(context, 200, 100, 40, 40);
  }
}

function drawRedLineIfSupports(canvas: HTMLCanvasElement) {
  if (supports(canvas)) {
    const context = canvas.getContext('2d', { alpha: false });
    drawRedLine(context, 50, 300);
  }
}

function drawGreenArcIfSupports(canvas: HTMLCanvasElement) {
  if (supports(canvas)) {
    const context = canvas.getContext('2d', { alpha: false });
    drawGreenArc(context, 200, 100, 30);
  }
}

function clearIfSupports(canvas: HTMLCanvasElement) {
  if (supports(canvas)) {
    clear(canvas);
  }
}

function clear(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d', { alpha: false });
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function fillBlueRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number
) {
  context.fillStyle = 'rgba(0, 0, 200, 0.5)';
  context.fillRect(x, y, width, height);
}

function drawRedLine(context: CanvasRenderingContext2D, x: number, y: number) {
  context.strokeStyle = 'rgb(201, 31, 14)';
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(x, y);
  context.stroke();
}

function drawGreenArc(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
) {
  context.strokeStyle = '#199E30';
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.moveTo(170, 100);
  context.stroke();
}

function setImageSrc(image: HTMLImageElement, src: string) {
  image.src = src;
}

function supports(canvas: HTMLCanvasElement) {
  return !!canvas.getContext;
}
