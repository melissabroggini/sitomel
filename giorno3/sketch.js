function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(150);
  textStyle(BOLD);
}

function draw() {
  background(0, 20); // Sfondo nero semitrasparente per creare l'effetto scia

  let t = frameCount * 0.01; // Variabile tempo per il movimento

  // Disegna 5 copie delle iniziali che si muovono in modo organico
  for (let i = 0; i < 5; i++) {
    // Calcola posizioni "strane" usando il rumore di Perlin (noise)
    let x = width / 2 + map(noise(t, i), 0, 1, -400, 400);
    let y = height / 2 + map(noise(t + 100, i), 0, 1, -400, 400);
    let angle = map(noise(t * 0.5, i), 0, 1, -TWO_PI, TWO_PI);
    let scaleFactor = map(noise(t + i * 10), 0, 1, 0.5, 2); // Effetto di scala pulsante

    push();
    translate(x, y);
    rotate(angle + frameCount * 0.05);
    scale(scaleFactor); // Applica la scala dinamica
    fill(noise(i, t) * 255, noise(t, i) * 255, noise(t + i) * 255); // Colori ancora più dinamici
    text("MB", 0, 0);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}