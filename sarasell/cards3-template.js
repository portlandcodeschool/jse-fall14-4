var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                 'Jack','Queen','King'];
var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

function makeCard(id) {
    var card = {cardID: id};
    card.rank = makeCard.rank;
    card.suit = makeCard.suit;
    card.color = makeCard.color;
    card.cardName = makeCard.cardName;
    return card;
};


makeCard.isValid = function(num,low,high) { // Returns--> NaN, true
        if ((typeof num)!="number") //wrong type
            return NaN;
        if (num%1 !== 0) //non-integer
            return NaN;
        if (num<low || num>high) //out of range
            return NaN;
        return true;
    },

makeCard.rank = function(card) { // --> 1..13, NaN
        return this.isValid(card,0,51) &&
            Math.floor(card/4)+1;
    },

makeCard.suit = function(card) { // --> 1..4, NaN
        return this.isValid(card,0,51) &&
            (card%4)+1;
    },

makeCard.cardID = function(rank,suit) { // --> 0..51, NaN
        return this.isValid(rank,1,13) &&
                this.isValid(suit,1,4) &&
                ((rank-1)*4 + (suit-1));
    },
    
makeCard.color = function(card) { // -->"red,"black",NaN
        var suit=this.suit(card);
        return suit && ((suit<3)? "red": "black");
    },

makeCard.cardName = function(card) { //--> string, NaN
        var rank = makeCard.rank(card);
        var suit = makeCard.suit(card);
        return rank && suit && (rankNames[rank]+' of '+suitNames[suit]);
    };

makeCardSet = function() {
    var cardSet = [];
    for (var id = 0; id < 52; id++) {
    cardSet.push(makeCard(id))  
    }  
    return cardSet
};

var someCards = makeCardSet();

//-----------------------
// Methods to be called through factory:
//-----------------------

makeCard.isCard = function(card) { // --> true,false
    // return true if card is a valid card instance made by this factory

}


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



