difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);  
    video.size(550, 500); 

    canvas = createCanvas(550, 550);
    canvas.position(560,150); 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw() { 
background('#969A97'); 
document.getElementById("square_side").innerHTML = "Font size of the text will be = " + difference +"px"; 
fill('#F90093'); 
stroke('#F90093'); 
size(rightWristX, leftWristX, difference); 
}