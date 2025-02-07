var config = {
   type: Phaser.AUTO,
   width : 800,
   height : 600,

   scene : {
      preload: preload,
      create: create,
      update: update
   }
}
var peixinho
var game = new Phaser.Game(config);

function preload() {
    this.load.image('mar','assets/bg_azul-escuro.png') ;
   
    this.load.image('inteli', "assets/logo-inteli-300x134-1.webp");

    this.load.image("peixe", "assets/peixes/peixinho_azul.png");
   
    this.load.image("coral", "assets/coralsem.png")
   
}

function create() {
    //backgound//
    this.add.image(400, 300 , 'mar' ); 
    //imagem na tela //
    this.add.image( 440 ,270 , "inteli").setScale(0.75);
    //add coral //
    this.add.image(370, 520, "coral").setScale(0.8)
   ;
   
   //guardar peixe em uma variavel//
   peixinho = this.add.image(400, 300, "peixe");
  
   peixinho.setFlip(true, false);
  
   }
;
 
function update(){
   //peixe deverá ter mesma posição x e y do mouse//
    peixinho.x = this.input.x
    peixinho.y = this.input.y
}
