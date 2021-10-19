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
