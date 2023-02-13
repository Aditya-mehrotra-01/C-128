song1="";
song2="";
leftWristX = "";
RightWristX = "";
leftWristY = "";
RightWristY = "";
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}
function preload() {
 song= loadSound("music.mp3");
 song=loadSound("music2.mp3");
}
function draw() {
    image(video,0,0,600,500);
}
function modelLoaded() {
    console.log("PoseNet is initalized");
}
function gotPoses(results) {
    if ( results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("left wrist x = " + leftWristX + "left wrist y = " + leftWristY);
        console.log("right wrist x = " + RightWristX + "right wrist y = " + RightWristY);
    }
}