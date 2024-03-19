
let vector = {
    _x: 1,
    _y: 0,

    create: function (x, y) {
        var obj = Object.create(this);
        obj.setX(x);
        obj.setY(y);
        return obj;
    },

    setX: function (value) {
        this._x = value;
    },

    getX: function () {
        return this._x;
    },

    setY: function (value) {
        this._y = value;
    },

    getY: function () {
        return this._y;
    },
};

full = {
    x: window.innerWidth,
    y: window.innerHeight
}

canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
W = width = canvas.width = full.x;
H = height = canvas.height = full.y;
var mouse = {
    x: 0,
    y: 0
};
canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
}, false);

number = 80;
vectorStock = [];
for (i = 0; i < W / number + 1; i++) {
    for (j = 0; j < H / number + 1; j++) {
        vectorStock.push(vector.create(i * number, j * number));
    }
}

function update() {
    context.clearRect(0, 0, W, H);

    for (i = 0; i < vectorStock.length; i++) {

        dx = vectorStock[i].getX() - mouse.x;
        dy = vectorStock[i].getY() - mouse.y;
        dist = 10 + Math.sqrt(dx * dx + dy * dy);
        if (dist > dist / 4) {
            dist = dist / 4;
        }

        deltaX = vectorStock[i].getX() - mouse.x;
        deltaY = vectorStock[i].getY() - mouse.y;

        context.fillStyle = "#55E6A5";
        context.save();

        context.translate(vectorStock[i].getX(), vectorStock[i].getY())
        context.rotate(Math.atan2(deltaY, deltaX));

        context.fillRect(0, 0, -dist / 4, 1);
        context.restore();
    }
    requestAnimationFrame(update);
}
update();