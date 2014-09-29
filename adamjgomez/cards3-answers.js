function makeCard(ID) {




  var card = {id:ID};
  card.cardRank = makeCard.rank;
  card.cardSuit = makeCard.suit;
  card.cardColor = makeCard.colorz;
  card.cardName = makeCard.namez;

  return card;

};


//-----------------------
// Methods to be called through factory:
//-----------------------

makeCard.isCard = function(card) { // --> true,false
    // return true if card is a valid card instance made by this factory

};

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function() { // --> 1..13, NaN
  if (this.id < 0 || this.id > 51 || typeof this.id !== "number" || this.id % 1 !== 0) { return NaN;}
  return Math.floor((this.id / 4) + 1);
};

makeCard.suit = function() { // --> 1..4, NaN
  if (this.id < 0 || this.id > 51 || typeof this.id !== "number" || this.id % 1 !== 0) { return NaN;}
  return (this.id % 4) + 1;
};
   
makeCard.colorz = function() { // -->"red,"black",NaN
  if (this.id < 0 || this.id > 51 || typeof this.id !== "number" || this.id % 1 !== 0) { return NaN;}
  if (this.cardSuit(this.id) < 3) {
    return "red";
  } else {
    return "black";
  }
};

makeCard.cardRankArr = [ "",
              "Ace",
              "Two",
              "Three",
              "Four",
              "Five",
              "Six",
              "Seven",
              "Eight",
              "Nine",
              "Ten",
              "Jack",
              "Queen",
              "King"];

makeCard.cardSuitArr = [ "",
              "Hearts",
              "Diamonds",
              "Spades",
              "Clubs"];

makeCard.namez = function() {
    if (this.id < 0 || this.id > 51 || typeof this.id !== "number" || this.id % 1 !== 0) { return NaN;}
    var cRank = this.cardRank();
    var cSuit = this.cardSuit();

    return makeCard.cardRankArr[cRank] + ' of ' + makeCard.cardSuitArr[cSuit];
};

    


// Testing suite...
function assert(claim,message) {
    if (!claim) console.error(message);
};

// card instances needed for assertions:
var card0 = makeCard(0);
var card3 = makeCard(3);
var card5 = makeCard(5);
var card51 = makeCard(51);


// Test instance methods:
assert(card0.rank()===1,  "Test 1 failed");
assert(card3.rank()===1,  "Test 2 failed");
assert(card51.rank()===13,"Test 3 failed");
assert(card0.suit()===1,  "Test 4 failed");
assert(card5.suit()===2,  "Test 5 failed");
assert(card51.suit()===4, "Test 6 failed");
assert(card0.color()==='red',   "Test 10 failed");
assert(card3.color()==='black', "Test 11 failed");
assert(card5.name()==='Two of Diamonds', "Test 12 failed");
assert(card51.name()==='King of Clubs',  "Test 13 failed");

// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed");
assert(makeCard.isCard(card51), "Test 22 failed");
assert(!makeCard.isCard(0),    "Test 23 failed");
assert(!makeCard.isCard({}),   "Test 24 failed");


// Test card-making results:
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");


// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.name, "Test 53 failed");
// etc...



