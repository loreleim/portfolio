var $itemOne = document.getElementById("itemOne");
var likeList = ["poscas", "spreadsheets", "vintage maps", "chicken"];

function randomItem() {
  var randomIndex = Math.floor(Math.random() * likeList.length);
  var randomLike = likeList[randomIndex];
  $itemOne.innerHTML = randomLike;
}
