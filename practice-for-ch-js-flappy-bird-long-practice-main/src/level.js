export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.pipes = [({x: 0 + this.dimensions.width*2,
                        y: Math.random()*(this.dimensions.height-CONSTANTS.GAP_SIZE)}),
                      ({x: CONSTANTS.DX + this.dimensions.width*2,
                        y: Math.random()*(this.dimensions.height-CONSTANTS.GAP_SIZE)}),
                      ({x: CONSTANTS.DX * 2 + this.dimensions.width*2,
                        y: Math.random()*(this.dimensions.height-CONSTANTS.GAP_SIZE)})];
    }

    drawBackground(ctx) {
        ctx.fillStyle = "skyblue";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    animate(ctx) {
        this.drawBackground(ctx);
        this.movePipes.bind(this)();
        this.drawPipes(ctx);
    }

    drawPipes(ctx) {
        this.pipes.forEach((pipe) => {
            ctx.fillStyle = "green";
            ctx.fillRect(pipe.x, 0, CONSTANTS.PIPE_WIDTH, pipe.y);
            ctx.fillRect(pipe.x, pipe.y + CONSTANTS.GAP_SIZE, CONSTANTS.PIPE_WIDTH, this.dimensions.height);
        });
    }

    movePipes() {
        this.pipes.forEach((pipe) => {
            pipe.x += CONSTANTS.PIPE_SPEED;
        });

        if (this.pipes[0].x + CONSTANTS.PIPE_WIDTH < 0){
            this.pipes.shift();
            this.pipes.push(({x: this.pipes[this.pipes.length-1].x + CONSTANTS.DX, y: Math.random()*(this.dimensions.height-CONSTANTS.GAP_SIZE)}));
        }
    }

    collidesWith(bounds) {
        let output = false;
        this.pipes.forEach((pipe) => {
            if (!(pipe.x > bounds.bottomRightX || pipe.x + CONSTANTS.PIPE_WIDTH < bounds.topLeftX)) {
                if (pipe.y > bounds.topLeftY || pipe.y + CONSTANTS.GAP_SIZE < bounds.bottomRightY) {
                    // console.log("hit")
                    output = true;
                }
            }
        });
        return output;
    }
}

const CONSTANTS = {
    GAP_SIZE:  150,
    DX:  220,
    PIPE_WIDTH:  50,
    PIPE_SPEED: -2
};
