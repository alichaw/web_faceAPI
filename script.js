
const video = document.getElementById('video')
//const imageUpload = document.getElementById('imageUpload')
var emotion = "neutral";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let imageEnd = document.getElementsByClassName("imgid");
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
  imageEnd.src = "image\16.jpg"
  alert(0);
  var n1 = Math.round(Math.random()*1000000);
  if (emotion == "happy"){
    imageEnd.src = "image\0.jpg"
    ans = 0;
    imageEnd.alt = ans;
  }else if (emotion == "angry"){
    ans = 16;
    imageEnd.src = "image\16.jpg"
  }else if (emotion == "disgusted"){
    if (n1 < 220092){
      imageEnd.src = "image\12.png"
      ans = 12;
    }else if (n1 < 420955){
      ans = 13;
      imageEnd.src = "image\13.png"
    }else if (n1 < 615104){
      ans = 14;
      imageEnd.src = "image\14.png"
    }else if (n1 < 807666){
      ans = 15;
      imageEnd.src = "image\15.png"
    }else{
      ans = 16;
      imageEnd.src = "image\16.jpg"
    }
  }else if (emotion == "sad") {
    if (n1 < 220092){
      ans = 4;
      imageEnd.src = "image\4.png"
    }else if (n1 < 420955){
      ans = 3;
      imageEnd.src = "image\3.png"
    }else if (n1 < 615104){
      ans = 2;
      imageEnd.src = "image\2.png"
    }else if (n1 < 807666){
      ans = 1;
      imageEnd.src = "image\1.png"
    }else{
      ans = 0;
      imageEnd.src = "image\0.png"
    }
  }else if (emotion == "surprised") {
    if (n1 < 197293){
      ans = 7;
      imageEnd.src = "image\7.png"
    }else if (n1 < 416398){
      ans = 8;
      imageEnd.src = "image\8.png"
    }else if (n1 < 613683){
      ans = 9;
      imageEnd.src = "image\9.png"
    }else if (n1 < 758599){
      ans = 10;
      imageEnd.src = "image\10.png"
    }else if (n1 < 847973){
      ans = 11;
      imageEnd.src = "image\11.png"
    }else if (n1 < 898468){
      ans = 12;
      imageEnd.src = "image\12.png"
    }else if (n1 < 929737){
      ans = 13;
      imageEnd.src = "image\13.png"
    }else if (n1 < 954292){
      ans = 14;
      imageEnd.src = "image\14.png"
    }else if (n1 < 977260){
      ans = 15;
      imageEnd.src = "image\15.png"
    }else{
      ans = 16;
      imageEnd.src = "image\16.jpg"
    }
  }else if (emotion == "fearful") {
    if (n1 < 197293){
      imageEnd.src = "image\9.png"
      ans = 9;
    }else if (n1 < 416398){
      ans = 8;
      imageEnd.src = "image\8.png"
    }else if (n1 < 613683){
      imageEnd.src = "image\7.png"
      ans = 7;
    }else if (n1 < 758599){
      imageEnd.src = "image\6.png"
      ans = 6;
    }else if (n1 < 847973){
      ans = 5;
      imageEnd.src = "image\5.png"
    }else if (n1 < 898468){
      ans = 4;
      imageEnd.src = "image\4.png"
    }else if (n1 < 929737){
      ans = 3;
      imageEnd.src = "image\3.png"
    }else if (n1 < 954292){
      ans = 2;
      imageEnd.src = "image\2.png"
    }else if (n1 < 977260){
      ans = 1;
      imageEnd.src = "image\1.jpg"
    }else{
      ans = 0;
      imageEnd.src = "image\0.jpg"
    }
  }else if (emotion == "neutral"){
    if (n1 < 15){
      ans = 0;
      imageEnd.src = "image\0.jpg"
    }else if (n1 < 259){
      ans = 1;
      imageEnd.src = "image\1.jpg"
    }else if (n1 < 2090){
      ans = 2;
      imageEnd.src = "image\2.png"
    }else if (n1 < 10635){
      ans = 3;
      imageEnd.src = "image\3.png"
    }else if (n1 < 38406){
      imageEnd.src = "image\4.png"
      ans = 4;
    }else if (n1 < 105056){
      imageEnd.src = "image\5.png"
      ans = 5;
    }else if (n1 < 227248){
      imageEnd.src = "image\6.png"
      ans = 6;
    }else if (n1 < 401809){
      imageEnd.src = "image\7.png"
      ans = 7;
    }else if (n1 < 598190){
      imageEnd.src = "image\8.png"
      ans = 8;
    }else if (n1 < 772751){
      imageEnd.src = "image\9.png"
      ans = 9;
    }else if (n1 < 894943){
      imageEnd.src = "image\10.png"
      ans = 10;
    }else if (n1 < 961593){
      imageEnd.src = "image\11.png"
      ans = 11;
    }else if (n1 < 989364){
      imageEnd.src = "image\12.png"
      ans = 12;
    }else if (n1 < 997909){
      imageEnd.src = "image\13.png"
      ans = 13;
    }else if (n1 < 999740){
      imageEnd.src = "image\14.png"
      ans = 14;
    }else if (n1 < 999984){
      imageEnd.src = "image\15.png"
      ans = 15;
    }else{
      imageEnd.src = "image\16.jpg"
      ans = 16;
    }
  }
  imageEnd.alt = ans;
  modal.style.display = "block";
  alert(ans);
  alert(emotion);
}



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


