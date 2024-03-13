import { Application, Assets, Renderer, Sprite } from 'pixi.js'

const app = new Application<Renderer<HTMLCanvasElement>>();

// Top Level Await

await app.init({
	canvas: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480,
	hello:true // Added so you can see what renderer are you using
});


// V8 change: You MUST load first. You can't use the `from` method without loading first.
await Assets.load("clampy.png");

const clampy: Sprite = Sprite.from("clampy.png");

clampy.anchor.set(0.5);

clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);