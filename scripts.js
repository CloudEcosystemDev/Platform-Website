function accord(item) {
  var acc = document.getElementsByClassName("question");
  var i;
  for (i = 0; i < acc.length; i++) {
    if (item === `${i}`) {
      var panel = document.getElementById(`p${i}`);
      var vec = document.getElementById(`v${i}`);
      if (panel.style.display === "block") {
        vec.style.transform = "rotate(0deg)";
        panel.style.display = "none";
      } else {
        vec.style.transform = "rotate(90deg)";
        panel.style.display = "block";
      }
    }
  }
}

function selectGif(item){
    item === 1 ? document.getElementById("dynImg").src="assets/chooseconnector.gif" : item === 2 ? document.getElementById("dynImg").src="assets/TemplateCreation.gif" : document.getElementById("dynImg").src="assets/IntegrationCenter.gif";
    let steps = document.getElementsByClassName("active-step");
    let vecs = document.getElementsByClassName("active-circle");

    steps[0].classList.remove("active-step");    
    vecs[0].classList.remove("active-circle");    
    document.getElementById(`s${item}`).classList.add("active-step");    
    document.getElementById(`vec${item}`).classList.add("active-circle");    

}