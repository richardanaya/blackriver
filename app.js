var stage = new PIXI.Container();
var renderer = new PIXI.WebGLRenderer(320,120);
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
stage.buttonMode = true;
stage.interactive = true;
stage.hitArea = new PIXI.Rectangle(0, 0, 320, 120);
stage.defaultCursor = "url(cursor.png) 3 2, auto";
document.body.appendChild(renderer.view);
var images = [
  "background.png",
  "boy.png",
  'boy-walking.json'
]
PIXI.loader
  .add(images)
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {


  cat = PIXI.Sprite.fromImage(
    "background.png",
    null,
    PIXI.SCALE_MODES.NEAREST
  );

  //Add the cat to the stage
  stage.addChild(cat);

  var frames = [
    PIXI.Texture.fromFrame("boy-walking0.png"),
    PIXI.Texture.fromFrame("boy-walking1.png"),
    PIXI.Texture.fromFrame("boy-walking2.png"),
    PIXI.Texture.fromFrame("boy-walking3.png"),
    PIXI.Texture.fromFrame("boy-walking4.png")
  ]

  cat = new PIXI.extras.MovieClip(frames);
  cat.x = 100;
  cat.y = 40;
  cat.animationSpeed =0.1;

  cat.play();

  //Add the cat to the stage
  stage.addChild(cat);


  animate();
  function animate() {
      // render the stage container
      renderer.render(stage);
      requestAnimationFrame(animate);
  }
}
