var itemOne = document.getElementById("itemOne");
var itemTwo = document.getElementById("itemTwo");
var itemThree = document.getElementById("itemThree");
var likeList = [
  "posca markers",
  "spreadsheets",
  "topographic maps",
  "azuki beans",
  "pogs",
  "pocket notebooks",
  "menpachi",
  "monstera variegata",
  "mini meat jun",
  "hinode rice",
  "a good pair of pants",
  "chicago pigeons",
  "@wabashartdrop",
  "simple green",
  "baby dill pickles"
];

itemOne.innerHTML = likeList[0] + ",";
itemTwo.innerHTML = likeList[1];
itemThree.innerHTML = " & " + likeList[2] + "!";

function randomItem() {
  document.getElementById("itemOne").innerHTML =
    likeList[Math.floor(Math.random() * likeList.length)] + ",";
}

function randomTwo() {
  document.getElementById("itemTwo").innerHTML =
    likeList[Math.floor(Math.random() * likeList.length)];
}

function randomThree() {
  document.getElementById("itemThree").innerHTML =
    " & " + likeList[Math.floor(Math.random() * likeList.length)] + "!";
}
