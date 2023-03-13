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

type DrawableFunction = () => void;

document.addEventListener('DOMContentLoaded', main, false);

drawRectButton.addEventListener('click', () => {
  tryToDrawBluRect(canvas);
});

drawLineButton.addEventListener('click', () => {
  tryToDrawRedLine(canvas);
});

drawArcButton.addEventListener('click', () => {
  tryToDrawGreenArc(canvas);
});

drawImageButton.addEventListener('click', () => {
  tryToDrawImage(canvas);
});

clearCanvasButton.addEventListener('click', () => {
  tryToClear(canvas);
});

function main() {
  tryToClear(canvas);
}

function tryToDrawBluRect(canvas: HTMLCanvasElement) {
  drawIfSupports(canvas, () => {
    const context = canvas.getContext('2d', { alpha: false });
    fillBlueRect(context, 200, 100, 40, 40);
  });
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

function tryToDrawRedLine(canvas: HTMLCanvasElement) {
  drawIfSupports(canvas, () => {
    const context = canvas.getContext('2d', { alpha: false });
    drawRedLine(context, 50, 300);
  });
}

function drawRedLine(context: CanvasRenderingContext2D, x: number, y: number) {
  context.strokeStyle = 'rgb(201, 31, 14)';
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(x, y);
  context.stroke();
}

function tryToDrawGreenArc(canvas: HTMLCanvasElement) {
  drawIfSupports(canvas, () => {
    const context = canvas.getContext('2d', { alpha: false });
    drawGreenArc(context, 200, 100, 30);
  });
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

function tryToDrawImage(canvas: HTMLCanvasElement) {
  drawIfSupports(canvas, () => {
    const context = canvas.getContext('2d', { alpha: false });
    drawImageAfterLoad(context);
  });
}

function drawImageAfterLoad(context: CanvasRenderingContext2D) {
  const image = new Image();
  image.addEventListener('load', () => drawImage(image, context));
  image.src = './public/assets/img/image.jpg';
}

function drawImage(image: HTMLImageElement, context: CanvasRenderingContext2D) {
  context.beginPath();
  context.drawImage(image, 100, 20, 100, 100);
}

function tryToClear(canvas: HTMLCanvasElement) {
  drawIfSupports(canvas, () => clear(canvas));
}

function clear(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d', { alpha: false });
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawIfSupports(canvas: HTMLCanvasElement, draw: DrawableFunction) {
  if (supports(canvas)) {
    draw();
  }
}

function supports(canvas: HTMLCanvasElement) {
  return !!canvas.getContext;
}
