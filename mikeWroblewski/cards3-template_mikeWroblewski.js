function makeCard(id) {

    if ((id<0 && id>51) || (id === "NaN") || (typeof id === "boolean")) {
    return null;
    }

    var id = id;

    var cardRankArr = ["",
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

    var cardSuitArr = ["",
                  "Hearts",
                  "Diamonds",
                  "Spades",
                  "Clubs"];

    var newCard = {id: id, cardRankArr: cardRankArr, cardSuitArr: cardSuitArr};

    newCard.rank = makeCard.rank;

    newCard.suit = makeCard.suit;

    newCard.color = makeCard.color;

    newCard.name = makeCard.cardName;

    return newCard;

}



//-----------------------
// Methods to be called through factory:
//-----------------------

makeCard.isCard = function(card) {

    if ((card < 1 && card >= 52) || (Object.keys(card).length !== 0)) {
        return false;
    } else {
        return true;
    }

}


//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function() {
  
    var cardRank = Math.floor((this.id / 4)+1);
  
    if ((this.id>=0 && this.id<52) && (this.id % 1 === 0) && (typeof this.id !== "string")) {
        return cardRank;
    } else {
        return NaN;
    }
};


makeCard.suit = function() {
  
    var cardSuit = (this.id % 4) + 1;

    if ((this.id>=0 && this.id<52) && (this.id % 1 === 0) && (typeof this.id !== "boolean")) {
        return cardSuit;
    } else {
        return NaN;
    }
};


makeCard.color = function() {
  
    var cardSuit = this.suit();
      
    if (typeof this.id !== "number") {return NaN;}
      
    if (cardSuit < 3) {
      var result = "red";
    } else {
      return "black";
    }
      return result;
};


makeCard.cardName = function() { //--> string, NaN
// This method can't have the key 'name' within the makeCard function,
// but instance objects can store a reference to it called 'name'
// code here...
    var cardRank = this.rank();
    var cardSuit = this.suit();

    if ((this.id>=0 && this.id<52) && (this.id !== "NaN") && (typeof this.id !== "boolean")) {  
        return this.cardRankArr[cardRank] + " of " + this.cardSuitArr[cardSuit];
    } else {
        return NaN;
    }
  
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
assert(card0.color()==='red',   "Test 10 failed");
assert(card3.color()==='black', "Test 11 failed");
assert(card5.name()==='Two of Diamonds', "Test 12 failed");
assert(card51.name()==='King of Clubs',  "Test 13 failed");

// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed")
assert(makeCard.isCard(card51), "Test 22 failed")
assert(!makeCard.isCard(0),    "Test 23 failed")
assert(!makeCard.isCard({}),   "Test 24 failed")


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
//etc...



