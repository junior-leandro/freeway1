function setup() {
  somDaTrilha.loop();
  createCanvas(500, 400);
  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  recordeDePontos();
  marcaPontos();

}