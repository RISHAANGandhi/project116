
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QbKbOO2PQ/model.json",modelready);

}
function modelready(){
    classifier.classify(gotResult);
}