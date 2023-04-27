import Bird from './bird';
import Level from './level';

export default class FlappyBird {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.restart();
        // this.play();
    }

    animate() {
        this.level.animate(this.ctx);
        this.bird.animate(this.ctx);
        if (this.lose()) {
            // console.log("you lose")
            alert("You Lose!")
            this.restart();
        }
        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    restart() {
        this.level = new Level(this.dimensions);
        this.bird = new Bird(this.dimensions);
        this.running = false;
        this.animate();
    }

    play() {
        this.running = true;
        this.animate();
    }

    click() {
        if (this.running) {
            this.bird.flap();
        } else {
            this.play();
        }
    }

    lose() {
        return (this.level.collidesWith(this.bird.getBounds()) ||
                this.bird.getBounds().topLeftY < 0 ||
                this.bird.getBounds().bottomRightY > this.dimensions.height)
    }
}
