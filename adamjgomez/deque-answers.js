function makeCard(ID) {
  var card = {id:ID, typeof: "Card"};
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
  if (!(card.typeof == "Card")) {
    return false;
  } else if (card.cardRank() === NaN) {
    return false;
  } else if (card.cardSuit() === NaN) {
    return false;
  } else if (card.cardColor() === NaN) {
    return false;
  } else if (card.cardName() === NaN) {
    return false;
  } else if (0 < card.id > 52) {
    return false;
  } else {
    return true;
  }
};

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function() { // --> 1..13, NaN
  if (this.id < 0 || this.id > 52 || typeof this.id !== "number" || this.id % 1 !== 0) { return NaN;}
  return Math.floor((this.id / 4) + 1);
};

makeCard.suit = function() { // --> 1..4, NaN
  if (this.id < 0 || this.id > 52 || typeof this.id !== "number" || this.id % 1 !== 0) { return NaN;}
  return (this.id % 4) + 1;
};
   
makeCard.colorz = function() { // -->"red,"black",NaN
  if (this.id < 0 || this.id > 52 || typeof this.id !== "number" || this.id % 1 !== 0) { return NaN;}
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
    if (this.id < 0 || this.id > 52 || typeof this.id !== "number" || this.id % 1 !== 0) { return NaN;}
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
assert(card0.cardRank()===1,  "Test 1 failed");
assert(card3.cardRank()===1,  "Test 2 failed");
assert(card51.cardRank()===13,"Test 3 failed");
assert(card0.cardSuit()===1,  "Test 4 failed");
assert(card5.cardSuit()===2,  "Test 5 failed");
assert(card51.cardSuit()===4, "Test 6 failed");
assert(card0.cardColor()==='red',   "Test 10 failed");
assert(card3.cardColor()==='black', "Test 11 failed");
assert(card5.cardName()==='Two of Diamonds', "Test 12 failed");
assert(card51.cardName()==='King of Clubs',  "Test 13 failed");

// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed");
assert(makeCard.isCard(card51), "Test 22 failed");
assert(!makeCard.isCard(0),    "Test 23 failed");
assert(!makeCard.isCard({}),   "Test 24 failed");

// Test card-making results:
assert(!makeCard.isCard(52),"Test 26 failed");
assert(!makeCard.isCard("0"),"Test 27 failed");
assert(!makeCard.isCard(-1),"Test 28 failed");
assert(!makeCard.isCard(false),"Test 30 failed");
assert(!makeCard.isCard(true),"Test 31 failed");

// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.cardRank === card3.cardRank, "Test 51 failed");
assert(card0.cardSuit === card3.cardSuit, "Test 52 failed");
assert(card0.cardName === card3.cardName, "Test 53 failed");
// etc...











//-------
// Part a): build a deque factory
function makeDeque(values) {
  // ...
  var array = [];
  for (i = 0; i < 51; i++) {
    array.push(makeCard(i));

  }
  return {
     array: array,
     top: makeDeque.top,
     bottom: makeDeque.bottom,
     pop: makeDeque.pop,
     push: makeDeque.push,
     shift: makeDeque.shift,
     unshift: makeDeque.unshift,
     cut: makeDeque.cut,
     map: makeDeque.map,
     sort: makeDeque.sort,



    }
  
};

makeDeque.top = function() {

  return this.array[this.array.length-1];


  //...
};
makeDeque.bottom = function() {
  //...
  return this.array[0];

};

makeDeque.pop = function() {

  return this.array.pop(value);
  //...
};
makeDeque.push = function(val) {

  makeDeque.array.push(val)
  //...
};

makeDeque.shift = function() {
  //...
};
makeDeque.unshift = function(val) {
  //...
};

makeDeque.cut = function(offset) {
  //...
};

makeDeque.map = function(convertValFn) {
  //...
};

makeDeque.sort = function(compareValsFn) {
  //...
};

var someCards = /* make array of 52 card objects here, using your code from Problem 1) */;
// At this point, data looks like Fig.1

//-------
// Part b): build a deque instance:
var deckOfCards = makeDeque(someCards);
// sort it:
deckOfCards.sort(/* something here */);
// At this point, data looks like Fig.2

// sort it differently:
deckOfCards.sort(/* something different here */);

//-------
// Part c): build another deque instance:
var someNames = /* make array of names here */;
var deckOfNames = makeDeque(someNames);
deckOfNames.sort(/* something here */);