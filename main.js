function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/45clkZdb9/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,result){
    console.log("Gotresult");
  if (error){
      console.error(error);
  }
    else{
        console.log(result);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
        document.getElementById("object_name").innerHTML = 'I can hear -'+ result[0].label;
        document.getElementById("accuracy").innerHTML = 'Accuracy - '+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("object_name").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_g+")";
        document.getElementById("accuracy").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";
        img_1 = document.getElementById("aliens-1");
        img_2 = document.getElementById("aliens-2");
        img_3 = document.getElementById("aliens-3");
        img_4 = document.getElementById("aliens-4");
        if(result[0].label=="Clap"){
         img_1.src="aliens-01.gif";
         img_2.src="aliens-02.png";
         img_3.src="aliens-03.png";
         img_4.src="aliens-04.png";
        }
   
    else if(result[0].label=="Snap"){
        img_1.src="aliens-01.png";
        img_2.src="aliens-02.gif";
        img_3.src="aliens-03.png";
        img_4.src="aliens-04.png";
    }
    else if(result[0].label=="Bell"){
        img_1.src="aliens-01.png";
        img_2.src="aliens-02.png";
        img_3.src="aliens-03.gif";
        img_4.src="aliens-04.png";
    }
    else{
        img_1.src="aliens-01.png";
        img_2.src="aliens-02.png";
        img_3.src="aliens-03.png";
        img_4.src="aliens-04.gif";
    } 
}
}