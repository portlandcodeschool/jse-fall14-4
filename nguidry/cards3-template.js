function makeCard(id) {
    //if (id < 0 || id > 51 || typeof id !== "number" || id % 1 !== 0) {
      //  return NaN;
    //}
    var card = {};
    card.rank = makeCard.rank;
    card.suit = makeCard.suit;
    card.color = makeCard.color;
    card.cardName = makeCard.cardName;
    return card;
}
//need to test

//-----------------------
// Methods to be called through factory:
//-----------------------

//makeCard.isCard = function(card) { // --> true,false

//}

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function(card) { // --> 1..13, NaN
    return Math.floor((this/4) + 1);
};

makeCard.suit = function(card) { // --> 1..4, NaN
    return (this % 4) + 1;
};
   
makeCard.color = function(card) { // -->"red,"black",NaN
    if (this.suit() < 2) {
            return "red";
        } else {
            return "black";
          }
};

makeCard.cardName = function(card) { //--> string, NaN
    // This method can't have the key 'name' within the makeCard function,
    // but instance objects can store a reference to it called 'name'
        var faces = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        var cardFace = card.rank() - 1;
        var cardSuit = card.suit() - 1;

        return faces[cardFace] + " of " + suits[cardSuit];
    }




// Testing suite...
function assert(claim,message) {
    if (!claim) console.error(message);
}

// card instances needed for assertions:
var card0 = makeCard(0);
Object.getOwnPropertyNames(card0).forEach(function(val, idx, array) {
  console.log(val + ' -> ' + card0[val]);
});


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
assert(card3.color()==='black', "Test 11 failed"); //this test passed
assert(card5.cardName()==='Two of Diamonds', "Test 12 failed");
assert(card51.cardName()==='King of Clubs',  "Test 13 failed");

// Test makeCard.isCard:
//assert(makeCard.isCard(card0),  "Test 21 failed");
//assert(makeCard.isCard(card51), "Test 22 failed");
//assert(!makeCard.isCard(0)),    "Test 23 failed");
//assert(!makeCard.isCard({})),   "Test 24 failed");


// Test card-making results:
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");


// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed"); //this test passed
assert(card0.suit === card3.suit, "Test 52 failed"); //this test passed
assert(card0.card === card3.cardName, "Test 53 failed");
//etc...

