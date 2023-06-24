let myInfo = document.getElementById("myInfo");
let github = document.getElementById("github");
let work = document.getElementById("work");

function displayOnglet(onglet) {
  if (onglet == 'myInfo') {
    let ul = document.querySelector(".myInfo");
    ul.style.display = "block";
  }
  // else if (onglet == 'github') {
  //   let ul = document.querySelector(".github");
  //   ul.style.display = "block";
  // }
  // else if (onglet == 'work') {
  //   let ul = document.querySelector(".work");
  //   ul.style.display = "block";
  // }
}
function undisplayOnglet(onglet) {
  if (onglet == 'myInfo') {
    let ul = document.querySelector(".myInfo");
    ul.style.display = "none";
  }
  // else if (onglet == 'github') {
  //   let ul = document.querySelector(".github");
  //   ul.style.display = "none";
  // }
  // else if (onglet == 'work') {
  //   let ul = document.querySelector(".work");
  //   ul.style.display = "none";
  // }
}