function makeCard(id) {
    var card = {cardId: id};
    card.rank = makeCard.rank;
    card.suit = makeCard.suit;
    card.cardColor = makeCard.cardColor;
    card.cardName = makeCard.cardName;
    if (makeCard.isCard(card) === true) {
      return card;
    } else
    return null;
}

//-----------------------
// Methods to be called through factory:
//-----------------------

makeCard.isCard = function(card) { // --> true,false
    if ((typeof card)!="object") {
            return null;
    }
    if (!("cardId" in card) || !card.rank || !card.suit || !card.cardColor || !card.cardName) {
        return null;
    }
    if ((typeof card.cardId)!="number" || card.cardId%1 !== 0 || 
            card.cardId < 0 || card.cardId > 51) {
        return null;
    }
    return true;
}

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function() { // --> 1..13, NaN
    return makeCard.isCard(this) &&
            Math.floor(this.cardId/4)+1;
};

makeCard.suit = function() { // --> 1..4, NaN
    return makeCard.isCard(this) &&
            (this.cardId%4)+1;
};
   
makeCard.cardColor = function() { // -->"red,"black",NaN
    var suit=this.suit();
    return suit && ((suit<3)? "red": "black");
};

makeCard.cardName = function() { //--> string, NaN
    var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    var cardRank = this.rank() - 1;
    var cardSuit = this.suit() - 1;
    return cardRank && cardSuit && (ranks[cardRank] + " of " + suits[cardSuit]);
};

// Testing suite...
function assert(claim,message) {
    if (!claim) console.error(message);
}

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
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");


// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); 
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.cardName === card3.cardName, "Test 53 failed");
//etc...