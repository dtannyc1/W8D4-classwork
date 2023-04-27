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
        this.move();
        this.drawBird(ctx);
    }

    move() {
        this.y += this.vel; 
        this.vel += CONSTANTS.GRAVITY;
    }

    flap() {
        this.vel = CONSTANTS.FLAP_SPEED;
    }

}

const CONSTANTS = {
    GRAVITY:  0.5,
    FLAP_SPEED:  -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
  };