function accord(item) {
  var acc = document.getElementsByClassName("question");
  var i;
  for (i = 0; i < acc.length; i++) {
    if (item === `${i}`) {
      var panel = document.getElementById(`p${i}`);
      if (panel.style.display === "block") {
        console.log("clicked blocked");

        panel.style.display = "none";
      } else {
        console.log("clicked no");

        panel.style.display = "block";
      }
    }
    // });
  }
}
