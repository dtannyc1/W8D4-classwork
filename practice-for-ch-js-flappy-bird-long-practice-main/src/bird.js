export default class Bird {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width/3;
        this.y = this.dimensions.height/2;
        this.vel = 0;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x-CONSTANTS.BIRD_WIDTH/2,
                     this.y-CONSTANTS.BIRD_HEIGHT/2,
                     CONSTANTS.BIRD_WIDTH,
                     CONSTANTS.BIRD_HEIGHT);
    }

    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }

    move() {
        this.y += this.vel;
        this.vel += CONSTANTS.GRAVITY;
        if (this.vel > CONSTANTS.TERMINAL_VEL) {
            this.vel = CONSTANTS.TERMINAL_VEL;
        }
    }

    flap() {
        this.vel = CONSTANTS.FLAP_SPEED;
    }

    getBounds() {
        let output = ({});
        output.topLeftX = this.x - CONSTANTS.BIRD_WIDTH/2;
        output.topLeftY = this.y - CONSTANTS.BIRD_HEIGHT/2;
        output.bottomRightX = this.x + CONSTANTS.BIRD_WIDTH/2;
        output.bottomRightY = this.y + CONSTANTS.BIRD_HEIGHT/2;
        return output;
    }
}

const CONSTANTS = {
    GRAVITY:  0.5,
    FLAP_SPEED:  -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
};
