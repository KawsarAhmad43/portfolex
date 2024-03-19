


var width, height, canvas, ctx, points, target, animateHeader = true;
var pointDistance = 45;
var pointRadius = 2;
var raf;

initHeader();
initAnimation();
addListeners();

function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = {};

    canvas = document.getElementById('background-canvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    initPoints();
}


function addListeners() {
    if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('resize', resize);
}

function initAnimation() {
    animate();
}

function animate() {
    if (animateHeader) {
        drawPoints();
    }
    requestAnimationFrame(animate);
}

function mouseMove(e) {
    var posx = posy = 0;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    for (var i in points) {
        TweenLite.killTweensOf(points[i]);
    }

    initPoints();
}

function initPoints() {
    points = [];
    for (var x = 0; x <= width / pointDistance; x++) {
        for (var y = 0; y < height / pointDistance; y++) {
            var px = x * pointDistance;
            var py = y * pointDistance;
            var p = { x: px, originX: px, y: py, originY: py };
            points.push(p);
        }
    }

    for (var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];
        for (var j = 0; j < points.length; j++) {
            var p2 = points[j]
            if (!(p1 == p2)) {
                var placed = false;
                for (var k = 0; k < 5; k++) {
                    if (!placed) {
                        if (closest[k] == undefined) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }

                for (var k = 0; k < 5; k++) {
                    if (!placed) {
                        if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }
            }
        }
        p1.closest = closest;
    }
    for (var i in points) {
        var c = new Circle(points[i], pointRadius, 'rgba(255,255,255,0.3)');
        points[i].circle = c;
    }

    for (var i in points) {
        shiftPoint(points[i]);
    }
}

function drawPoints() {

    ctx.clearRect(0, 0, width, height);

    for (var i in points) {
        if (target) {
            if (Math.abs(getDistance(target, points[i])) < 4000) {
                points[i].opacity = 0.3;
                points[i].circle.opacity = 1;
            } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                points[i].opacity = 0.1;
                points[i].circle.opacity = 1;
            } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                points[i].opacity = 0.02;
                points[i].circle.opacity = 0.8;
            } else {
                points[i].opacity = 0;
                points[i].circle.opacity = 0.7;
            }
        }

        points[i].circle.color = 'rgb(85, 230, 165)';

        drawLines(points[i]);
        points[i].circle.draw();
    }
}

function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX + Math.random() * (pointDistance / 2),
        y: p.originY + Math.random() * (pointDistance / 2), ease: Circ.easeInOut,
        onComplete: function () {
            shiftPoint(p);
        }
    });
}

function drawLines(p) {
    if (target) {
        for (var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgb(85, 230, 165,' + p.opacity + ')';
            ctx.stroke();
        }
    }
}

function Circle(pos, rad, color) {
    var _this = this;
    (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
    })();

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgb(85, 230, 165,' + _this.opacity + ')';
        ctx.fill();
    };
}

function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}