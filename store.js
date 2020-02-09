var $itemOne = document.getElementById("itemOne");
var $itemTwo = document.getElementById("itemTwo");
var $itemThree = document.getElementById("itemThree");
var likeList = ["posca markers", "spreadsheets", "topographic maps", "azuki beans", "pogs", "pocket notebooks", "menpachi"];
var randomIndex = Math.floor(Math.random() * likeList.length);
var randomLike = likeList[randomIndex];

$itemOne.innerHTML = likeList[0] + ",";
$itemTwo.innerHTML = likeList[1] + ",";
$itemThree.innerHTML = "& " + likeList[2] + "!";

function randomItem() {
  var randomIndex = Math.floor(Math.random() * likeList.length);
  var randomLike = likeList[randomIndex];
  $itemOne.innerHTML = randomLike;
}
