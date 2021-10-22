function accord(item) {
  var acc = document.getElementsByClassName("question");
  var i;
  for (i = 0; i <= acc.length; i++) {
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

function selectGif(item) {
  item === 1
    ? (document.getElementById("dynImg").src = "assets/chooseconnector.gif")
    : item === 2
    ? (document.getElementById("dynImg").src = "assets/TemplateCreation.gif")
    : (document.getElementById("dynImg").src = "assets/IntegrationCenter.gif");
  let steps = document.getElementsByClassName("active-step");
  let vecs = document.getElementsByClassName("active-circle");

  steps[0].classList.remove("active-step");
  vecs[0].classList.remove("active-circle");
  document.getElementById(`s${item}`).classList.add("active-step");
  document.getElementById(`vec${item}`).classList.add("active-circle");
}

var x, i, j, l, ll, selElmnt, a, b, c;
window.addEventListener("load", function (event) {
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (
    i = 0;
    i < document.getElementsByClassName("custom-select").length;
    i++
  ) {
    let newInd = i;
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    i === 0
      ? a.setAttribute("class", "select-selected dark-letters")
      : a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    i === 0
      ? b.setAttribute("class", "select-items select-hide light-background")
      : b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            console.log("hree a click", s.selectedIndex);
            console.log("hree a click", h.innerHTML);
            textChanger(newInd, h.innerHTML);
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      console.log("even", e);
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
});

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

let starter = {
  execsHTML: ["0.5 Million Executions /mo","1 Million Executions /mo", "3 Million Executions /mo"],
  prices: ["299 $ / mo","699 $ / mo", "1499 $ / mo"],
};
let scaler = {
  execsHTML: ["5 Million Executions /mo","10 Million Executions /mo", "20 Million Executions /mo"],
  prices: ["1599 $ / mo","3599 $ / mo", "5599 $ / mo"],
};

function textChanger(ind, text) {
  console.log("ind", ind);
  console.log("text", text);
  if (ind === 0) {
    if (text === starter.execsHTML[0]) {
      document.getElementById("price0").innerHTML = starter.prices[0];
    } else if (text === starter.execsHTML[1]) {
      document.getElementById("price0").innerHTML = starter.prices[1];
    } else if (text === starter.execsHTML[2]) {
      document.getElementById("price0").innerHTML = starter.prices[2];
    }
  } else {
    if (text === scaler.execsHTML[0]) {
      document.getElementById("price1").innerHTML = scaler.prices[0];
    } else if (text === scaler.execsHTML[1]) {
      document.getElementById("price1").innerHTML = scaler.prices[1];
    } else if (text === scaler.execsHTML[2]) {
      document.getElementById("price1").innerHTML = scaler.prices[2];
    }
  }
}
