const canvas = document.getElementById('board');
const drawRectButton = document.getElementById('drawRect');
const drawLineButton = document.getElementById('drawLine');
const drawArcButton = document.getElementById('drawArc');
const drawImageButton = document.getElementById('drawImage');
const clearCanvasButton = document.getElementById('clearCanvas');
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
drawImageButton.addEventListener('click', () => {
    drawImageIfSupports(canvas);
});
clearCanvasButton.addEventListener('click', () => {
    clearIfSupports(canvas);
});
function main() {
    clearIfSupports(canvas);
}
function fillBlueRectIfSupports(canvas) {
    if (supports(canvas)) {
        const context = canvas.getContext('2d', { alpha: false });
        fillBlueRect(context, 200, 100, 40, 40);
    }
}
function fillBlueRect(context, x, y, width, height) {
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context.fillRect(x, y, width, height);
}
function drawRedLineIfSupports(canvas) {
    if (supports(canvas)) {
        const context = canvas.getContext('2d', { alpha: false });
        drawRedLine(context, 50, 300);
    }
}
function drawRedLine(context, x, y) {
    context.strokeStyle = 'rgb(201, 31, 14)';
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(x, y);
    context.stroke();
}
function drawGreenArcIfSupports(canvas) {
    if (supports(canvas)) {
        const context = canvas.getContext('2d', { alpha: false });
        drawGreenArc(context, 200, 100, 30);
    }
}
function drawGreenArc(context, x, y, radius) {
    context.strokeStyle = '#199E30';
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.moveTo(170, 100);
    context.stroke();
}
function drawImageIfSupports(canvas) {
    if (supports(canvas)) {
        const context = canvas.getContext('2d', { alpha: false });
        drawImageAfterLoad(context);
    }
}
function drawImageAfterLoad(context) {
    const image = new Image();
    image.addEventListener('load', () => drawImage(image, context));
    image.src = '../public/assets/img/image.jpg';
}
function drawImage(image, context) {
    context.beginPath();
    context.drawImage(image, 100, 20, 100, 100);
}
function clearIfSupports(canvas) {
    if (supports(canvas)) {
        clear(canvas);
    }
}
function clear(canvas) {
    const context = canvas.getContext('2d', { alpha: false });
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
}
function supports(canvas) {
    return !!canvas.getContext;
}
