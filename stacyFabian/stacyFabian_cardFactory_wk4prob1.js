// Stacy Fabian
// HMWK Wk 4, Problem 1

function makeCard(id) {
    if ((typeof id)!="number")
        return ("Hey dude, put in a number.");
    if (id%1 !== 0)
        return ('Hey man, put in a WHOLE number!');
    if (id<0 || id>52)
        return ("Come on...the number must be between 0 and 51.");

    var newCard = {};
    newCard.id = id;
    newCard.rank = makeCard.rank;
    newCard.suit = makeCard.suit;
    newCard.color = makmakeCard.color;
    newCard.name = makeCard.cardName;
    return newCard
}

//-----------------------
// Methods to be called through factory:
//-----------------------

makeCard.isCard = function(card) {
    if ((typeof card.id)!="number") {
        return false;
    }
    else if (card.id%1 !== 0) {
        return false;
    }
    else if (card.id<0 || card.id>51) {
        return false;
    } else {
        return true;
    }
}
 // --> true,false
    // return true if card is a valid card instance made by this factory
    // is card an object w/ right parameters

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

this.rank = function(id) {
    return Math.floor(id/4)+1;
};

this.suit = function(id) {
    return ((id%4)+1);
};
   
this.color = function(id) {
    var cardSuit = suit(id);
    return cardSuit && ((cardSuit<3)? "red": "black");
};

rankNames: ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];

suitNames: ['','Hearts','Diamonds','Spades','Clubs'];

this.cardName = function() {
    var cardRank = rank(id);
    var cardSuit = suit(id);
    return cardRank && cardSuit && (rankNames[cardRank]+' of '+suitNames[cardSuit]);
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



