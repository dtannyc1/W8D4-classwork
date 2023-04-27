import FlappyBird from './game';

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('bird-game');
    let game = new FlappyBird(canvas);
    // game.restart();
    canvas.addEventListener('mousedown', game.click.bind(game));
});
