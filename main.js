Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
});

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log("ml5.version: ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Vc03Su2Ps/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!")
}

function Speak(){
    synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = " And second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}