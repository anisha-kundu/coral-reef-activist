/* .js files add interaction to your website */

var funFactButton = document.getElementById("funFactButton");
var factList = ["Up to half of the world's coral reefs have already been lost or severely damaged.", "Coral reefs are sometimes called the 'rainforests of the sea'.", "Some scientists predict that by 2085, oceans will be acidic enough for coral reefs to dissolve around the world.", "A toxin from coral reef bacteria has the potential to become the next cancer drug.", "The annual economic value of coral reefs is estimated to be between $30–375 billion, as it helps tourism and fisheries, and protects shorelines."];

var funFact = document.getElementById("funFact");
var clickCount = 0; // Counts number of clicks by user
funFactButton.addEventListener("click", displayFact);

function displayFact(){
  funFact.innerHTML = factList[clickCount]; //displays fact from array (factList) based on clickCount.
  clickCount = clickCount + 1; // Adds to click count

  //resets clickCount, loops back around array.
  if (clickCount == factList.length){
    clickCount = 0;
  }
}