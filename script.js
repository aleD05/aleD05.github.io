//Fact Generator
var factList = ["1 in every 3 bites of the food we eat is directly dependent on bee pollination.","Bees aren't the only pollinators in our ecosystem!","Bees fly an average of 55,000 miles to produce one pound of honey.","Caffeine is actually a chemical that a plant produces to repulse harmful insects… except for bees, which are attracted by it and therefore help the plant with pollination.","Bees can age backwards!","Non-bee pollinators include flies, beetles, moths, butterflies, wasps, ants, birds, and bats, among others.",  "Bees invented a dance scientists call the “waggle dance” to communicate with each other about where to find the best sources of food.",];
var factButton = document.getElementById("factButton");
var fact = document.getElementById("fact");
var count = 0;

factButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count += 1;
  if (count  == factList.length) {
    count = 0;
  }
}
