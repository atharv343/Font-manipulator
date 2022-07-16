function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,550);
    canvas.position(160,150);
    video.position(10,160)
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
   }
   function modelLoaded(){
       console.log("PoseNet is Loaded!");
   }
   noseX=0;
   noseY=0;
   difference=0;
   rightwristX=0;
   leftwristX=0;
   function gotPoses(results){
       if (results.length>0){
           console.log(results);
          noseX=results[0].pose.nose.x;
          noseY=results[0].pose.nose.y;
          console.log("noseX = "+ noseX+ "noseY = "+noseY);

          leftwristX=results[0].pose.leftWrist.x;
          rightwristX=results[0].pose.rightWrist.x;
          difference=floor(leftwristX-rightwristX);

          console.log("leftwristX = "+ leftwristX+ "rightwristX = "+rightwristX+ "difference= "+difference);
       }
   }   
   function draw(){
   
    background('blue')
    
    fill('lime');
    stroke('aqua');
    textSize(difference);
 text('ATHARV', noseX, noseY);
fill(0, 102, 153);

   } 
