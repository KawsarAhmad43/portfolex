let c = document.createElement("canvas");
document.body.appendChild(c);
const getContext = () => {
    let ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    let cubes = [],
        spacing = 30,
        xPos = 0,
        n = window.innerWidth / spacing,
        tSpeedFactor = [.2, .4, .6, .8, 1],
        i;
    const colors = ['#55E6A5', '#55E6A5', '#55E6A5']

    for (i = 0; i < n; i++) {
        cubes.push({
            x: xPos,
            y: Math.round(Math.random() * c.height),
            width: Math.round(Math.random() * 10) * 2,
            tSpeed: tSpeedFactor[Math.floor(Math.random() * tSpeedFactor.length)],
            color: colors[Math.floor(Math.random() * colors.length)],
            angle: 0,
            upDownFactor: (Math.random() >= .5) ? 1 : -1
        });
        xPos += spacing;
    }

    const draw = () => {
        let i;
        ctx.clearRect(0, 0, c.width, c.height);
        for (i = 0; i < n; i++) {
            ctx.save();
            ctx.translate(cubes[i].x + cubes[i].width / 2, cubes[i].y + cubes[i].width / 2);
            ctx.rotate(cubes[i].angle);
            ctx.fillStyle = cubes[i].color;
            ctx.globalAlpha = 1;
            ctx.fillRect(-cubes[i].width / 2, -cubes[i].width / 2, cubes[i].width, cubes[i].width);
            ctx.restore();
            cubes[i].y = cubes[i].y + cubes[i].tSpeed * cubes[i].upDownFactor;
            cubes[i].angle += Math.PI / 360;
            if (cubes[i].upDownFactor === -1) {
                if (cubes[i].y + cubes[i].width < 0) {
                    cubes[i].y = c.height;
                }
            } else if (cubes[i].upDownFactor === 1) {
                if (cubes[i].y >= c.height) {
                    cubes[i].y = -cubes[i].width;
                }
            }
        }
        window.requestAnimationFrame(draw);
    }
    draw();
};
getContext();