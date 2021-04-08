var camera = document.getElementById("camera");
function take_snapshot() {
    speak();
}

function speak(){
    var synth = window.speechSynthesis;

    var speak_data = "Taking you Selfie in 10 seconds. ten. nine. eight. seven. six. five. four. three. two. one";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_selfie(); 
        save();
    }, 15000);
}


Webcam.set({
    width : 350,
    height : 350,
    img_format : "png",
    png_quality : 100 
});

function take_selfie() {
    Webcam.snap(function(data) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data+'"/>';
    });
}

function save() {
    var link = document.getElementById("link");
    var image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
  }