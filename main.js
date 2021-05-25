var desc = ["designer","illustrator","engineer"];
var index = 1;
setInterval(altDesc,8000);

function altDesc() {
  document.getElementById("description").innerHTML = desc[index];
  index++;
  if (index==desc.length){
    index = 0;
  }
}


function icon_click(){
  var nav = document.getElementById('nav-bar');
  if (nav.className == "navbar" || nav.className =="navbar off"){
    nav.className = "navbar on";
  }
  else {
    nav.className="navbar off";
    setTimeout(function(){nav.className="navbar"},1000);
  }
}

function openCaption(){
  var button = document.getElementsByClassName('caption-button');
  if (button.className == "caption-button" || button.className =="caption-button close"){
    button.className = "caption-button open";
  }
  else {
    button.className="caption-button close";
  }
}

function toggleNightMode(){
  mode = document.getElementById('nightmode');

  colorSet = document.documentElement;

  newBG = getComputedStyle(colorSet).getPropertyValue('--secondary-color');
  newPrim = getComputedStyle(colorSet).getPropertyValue('--neg-primary-color');
  newSecond =getComputedStyle(colorSet).getPropertyValue('--bg-color');
  newNegative = getComputedStyle(colorSet).getPropertyValue('--primary-color');

  colorSet.style.setProperty('--bg-color',newBG);
  colorSet.style.setProperty('--primary-color',newPrim);
  colorSet.style.setProperty('--secondary-color',newSecond);
  colorSet.style.setProperty('--neg-primary-color',newNegative);

  if(mode.innerHTML=='day mode'){
    mode.innerHTML='night mode';
  }
  else{
    mode.innerHTML='day mode';
  }

}
