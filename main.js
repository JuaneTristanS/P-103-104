Webcam.set({
    height: 280,
    width: 350,
    image_format: 'png',
    png_quality: 90
})

Cam = document.getElementById("webcam");

function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot") = '<img id="image_result" src=" '+ data_uri +' ">'
    })
}

console.log('ml5.js version - ',ml5.version)

name_object = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0S_N1xB6J/model.json",model_loaded);

function model_loaded () {
    console.log("Model is Loaded")
}