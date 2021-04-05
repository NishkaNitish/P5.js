function preload(){}
function setup(){
    Canvas=createCanvas(640,480);
    Canvas.position(150,150)
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){image(video,0,0,640,480);
}
function take_snapshot(){save('student.png')}