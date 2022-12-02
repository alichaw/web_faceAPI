
const video = document.getElementById('video')
const imageUpload = document.getElementById('imageUpload')
var emotion = "neutral";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//btn.onclick = function() {
  
//}

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

var ans = 18;

btn.onclick = function() {
  
  var n1 = Math.round(Math.random()*1000000);
  if (emotion == "happy"){
    ans = 0;
  }else if (emotion == "angry"){
    ans = 16;
  }else if (emotion == "disgusted"){
    if (n1 < 220092){
      ans = 12;
    }else if (n1 < 420955){
      ans = 13;
    }else if (n1 < 615104){
      ans = 14;
    }else if (n1 < 807666){
      ans = 15;
    }else{
      ans = 16;
    }
  }else if (emotion == "sad") {
    if (n1 < 220092){
      ans = 4;
    }else if (n1 < 420955){
      ans = 3;
    }else if (n1 < 615104){
      ans = 2;
    }else if (n1 < 807666){
      ans = 1;
    }else{
      ans = 0;
    }
  }else if (emotion == "surprised") {
    if (n1 < 197293){
      ans = 7;
    }else if (n1 < 416398){
      ans = 8;
    }else if (n1 < 613683){
      ans = 9;
    }else if (n1 < 758599){
      ans = 10;
    }else if (n1 < 847973){
      ans = 11;
    }else if (n1 < 898468){
      ans = 12;
    }else if (n1 < 929737){
      ans = 13;
    }else if (n1 < 954292){
      ans = 14;
    }else if (n1 < 977260){
      ans = 15;
    }else{
      ans = 16;
    }
  }else if (emotion == "fearful") {
    if (n1 < 197293){
      ans = 9;
    }else if (n1 < 416398){
      ans = 8;
    }else if (n1 < 613683){
      ans = 7;
    }else if (n1 < 758599){
      ans = 6;
    }else if (n1 < 847973){
      ans = 5;
    }else if (n1 < 898468){
      ans = 4;
    }else if (n1 < 929737){
      ans = 3;
    }else if (n1 < 954292){
      ans = 2;
    }else if (n1 < 977260){
      ans = 1;
    }else{
      ans = 0;
    }
  }else if (emotion == "neutral"){
    if (n1 < 15){
      ans = 0;
    }else if (n1 < 259){
      ans = 1;
    }else if (n1 < 2090){
      ans = 2;
    }else if (n1 < 10635){
      ans = 3;
    }else if (n1 < 38406){
      ans = 4;
    }else if (n1 < 105056){
      ans = 5;
    }else if (n1 < 227248){
      ans = 6;
    }else if (n1 < 401809){
      ans = 7;
    }else if (n1 < 598190){
      ans = 8;
    }else if (n1 < 772751){
      ans = 9;
    }else if (n1 < 894943){
      ans = 10;
    }else if (n1 < 961593){
      ans = 11;
    }else if (n1 < 989364){
      ans = 12;
    }else if (n1 < 997909){
      ans = 13;
    }else if (n1 < 999740){
      ans = 14;
    }else if (n1 < 999984){
      ans = 15;
    }else{
      ans = 16;
    }
  }
  modal.style.display = "block";
  //alert(0);
  //alert(emotion);
}

video.addEventListener('play', () => {

  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    console.log(resizedDetections[0].expressions)
    resizedDetections.forEach(result => {
      const {expressions} = result
      var list = { "happy":expressions.happy, "angry":expressions.angry , "neutral":expressions.neutral, "sad":expressions.sad, "fearful":expressions.fearful, "disgusted":expressions.disgusted, "surprised":expressions.surprised };
      var keys = Object.keys(list);
      var min = keys[0]; // ignoring case of empty list for conciseness
      var max = keys[0];
      var i;
      for (i = 1; i < keys.length; i++) {
        var value = keys[i];
        if (list[value] < list[min]) min = value;
        if (list[value] > list[max]) max = value;
      }
      emotion = max;
      console.log(min, '-----', max)
      console.log(emotion)
    })
    /*resizedDetections.forEach(result => {
      const {expressions} = result
      const items = [
        { name: "happiness", value: expressions.happy },
        { name: "angryer", value: expressions.angry },
        { name: "disgusteder", value: expressions.disgusted },
        { name: "fearfuler", value: expressions.fearful },
        { name: "neutraler", value: expressions.neutral },
        { name: "sad", value: expressions.sad },
        { name: "surpriseder", value: expressions.surprised },
      ];
      items.sort((a, b) => a.value - b.value);
      console.log(Math.max(...items.map(p => p.name)))
    })*/
    //if (resizedDetections.length > 0 && resizedDetections[0].detection.score > 0.7 && resizedDetections[0].expressions.happy > 0.5) {
    //  alert(0);
    //}
  }, 100)
})




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}