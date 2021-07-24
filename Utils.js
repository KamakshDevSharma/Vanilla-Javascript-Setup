function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomColor() {
    return colors[randomNumber(0, colors.length)];
}

function circularCollision(x1, x2, y1, y2, radius1, radius2) {
    const dist = Math.hypot(x1 - x2, y1 - y2);

    if (dist - radius1 - radius2 < 1) {
        return true;
    } else {
        return false;
    }
}