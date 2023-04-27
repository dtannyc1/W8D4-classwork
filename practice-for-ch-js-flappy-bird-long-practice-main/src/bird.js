export default class Bird {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width/3;
        this.y = this.dimensions.height/2;
        this.vel = 0;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x-20, this.y-15, 40, 30);
    }

    animate(ctx) {
        this.drawBird(ctx);
    }
}
