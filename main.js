M_x = 0;
M_y = 0; 

function preload(){
    img1 = loadImage("https://th.bing.com/th/id/R.1f95f03e8759404d27a767f1c5769eb8?rik=JBRAmAHFlDXXDg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fMoustache-PNG-Image.png&ehk=gcXdlvLVZ%2fgoMxfuAKltlbcJBRgtKy6Z2P7P0N5WdNg%3d&risl=&pid=ImgRaw&r=0");
}
function setup(){
    canvas = createCanvas(750,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    model1= ml5.poseNet(video, loaded);
 model1.on("pose", poses);
}
function draw(){
    image(video, 0,0, 750, 600);
    image(img1, M_x,M_y, 200,80);
}
function loaded(){
    console.log("The Model Has Been Loaded")
}
function poses(results) {
    if (results.length>0) {
        console.log(results);
        M_x = results[0].pose.nose.x+-40;
        M_y = results[0].pose.nose.y+110;
    }
}
function down(){
    save("mustache.png");
}