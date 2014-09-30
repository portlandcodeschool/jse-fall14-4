function makeCard(id) {
	
	if((typeof id) !== 'number' || (id < 0) || (id > 51)) return null;

    var card = {
	    
	    id: 	id,
	    rank: 	makeCard.rank,
	    suit: 	makeCard.suit,
	    color: 	makeCard.color,
	    name:	makeCard.cardName
	    
    };

    return card;
}

//-----------------------
// Methods to be called through factory:
//-----------------------

makeCard.isCard = function(card) { // --> true,false

	if((typeof card) !== 'object' || !('id' in card)) return false;
	
	return true;
}

//-----------------------------
// Methods called though instances (where 'this' means the instance):
//-----------------------------

makeCard.rank = function() { // --> 1..13, NaN
	
	if((typeof this.id) !== 'number' || (this.id < 0) || (this.id > 52)) return NaN;
	
	return Math.floor(this.id / 4 + 1);
	
};

makeCard.suit = function() { // --> 1..4, NaN
    
    if((typeof this.id) !== 'number' || (this.id < 0) || (this.id > 52)) return NaN;
    
    return (this.id % 4) + 1;
    
};
   
makeCard.color = function() { // -->"red,"black",NaN
    
    if((typeof this.id) !== 'number' || (this.id < 0) || (this.id > 52)) return NaN;
    
    return (this.suit(this.id) == 0 || this.suit(this.id) == 1) ? 'red' : 'black';
    
};

makeCard.cardName = function() { //--> string, NaN

	if((typeof this.id) !== 'number' || (this.id < 0) || (this.id > 52)) return NaN;
	
    var rankWords = [
		'Ace',
		'Two',
		'Three',
		'Four',
		'Five',
		'Six',
		'Seven',
		'Eight',
		'Nine',
		'Ten',
		'Jack',
		'Queen',
		'King'
	],
	
	suitWords = [
		'Hearts',
		'Diamonds',
		'Spades',
		'Clubs'
	];
	
	return rankWords[this.rank(this.id) - 1] + ' of ' + suitWords[this.suit(this.id) - 1];
    
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
//etc...



