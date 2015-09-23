var React = require('react');
var Firebase = require('firebase');
var PIXI = require('pixi.js');

var fbRef = new Firebase("https://<firebase-server>.firebaseio.com/");






var renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight, {transparent: true, antialias: true});

document.body.appendChild(renderer.view);
document.querySelector('body').appendChild(renderer.view);

var container = new PIXI.Container;

var graphics = new PIXI.Graphics();

// begin a green fill..
graphics.beginFill(0x00FF00);

// draw a triangle using lines
graphics.moveTo(0,0);
graphics.lineTo(-50, 100);
graphics.lineTo(50, 100);

graphics.position.x = window.innerWidth / 2 - 150;
graphics.position.y = window.innerHeight / 2 - 150;

// end the fill
graphics.endFill();

// add it the stage so we see it on our screens..
container.addChild(graphics);

function draw() {
	renderer.render(container);
	requestAnimationFrame(draw);
}

draw();











var updateReps = function(){

};

var updateStats = function(){
	document.querySelector('#progress').innerHTML = tl.progress().toFixed(2);
}

var tl = new TimelineMax(
	{
		repeat:-1,
		onUpdate:updateStats,
		onRepeat:updateReps,
		paused:true,
		yoyo:true
		//onComplete:restart
	}
);

//var dummyObject = { x:1 };
//tl.to(dummyObject, 20, { x:100 });

maxDegree = 180;
tl.to( graphics, 5, {
	rotation: (maxDegree/360) * Math.PI * 2,
	ease: Linear.easeNone,
	onUpdate: function(){

	}
});

tl.play();













var Hello = React.createClass({
	render: function () {
		return <div>
			<h1>Hello</h1>
			<h2 id='progress'></h2>
		</div>
	}
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));