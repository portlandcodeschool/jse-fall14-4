//-------
// Part a): build a deque factory
function makeDeque(values) {
	return {
			array	: values.slice(),
			top 	: makeDeque.top,
			bottom 	: makeDeque.bottom,
			pop		: makeDeque.pop,
			push	: makeDeque.push,
			shift	: makeDeque.shift,
			unshift	: makeDeque.unshift,
			cut		: makeDeque.cut,
			sort	: makeDeque.sort,
			map		: makeDeque.map,
	};
}

makeDeque.top = function() {
	return this.array[this.array.length-1];
};

makeDeque.bottom = function() {
	return this.array[0];
};

makeDeque.pop = function() {
	return this.array.pop();
};

makeDeque.push = function(val) {
	return this.array.push(val);
};

makeDeque.shift = function() { // this is like pop but at the beginning of the array
	return this.array.shift();
};

makeDeque.unshift = function(val) {
	return this.array.unshift(val);
};

makeDeque.cut = function() {
	var frontLength = Math.ceil(this.array.length/2);
	var frontSection = [];
	if (frontLength == this.array.length) return ("Array has 0 index values");
	for (var i=0; i<frontLength; i++) {
		frontSection.splice(i,0,(this.array[i]));
	}
	var endSection = this.array.splice((frontLength+1),frontLength);
	return endSection.concat(this.array);
};

makeDeque.map = function(convertValFn) {
	return this.array.map(convertValFn);
};

makeDeque.sort = function(compareValsFn) {
	return this.array.sort(compareValsFn);
};


// b) [Easy, 1/2 hr] Use your makeCard factory from Problem 1) to create someCards, an array of 52 different card objects. The factory should have given each card some methods to retrieve its own name, color, etc.

// Factory from week 4 (same week hmwk), prob 1

function makeCard(id) {
    if ((typeof id)!="number")
        return false;
    if (id%1 !== 0)
        return false;
    if (id<0 || id>51)
        return false;

    var newCard = {
        id: id,
        rank: makeCard.rank,
        suit: makeCard.suit,
        color: makeCard.color,
        name: makeCard.cardName,
    };
    return newCard;
}

makeCard.rank = function() {
    console.log("rank: " + Math.floor((this.id/4)+1));
    console.log("rank this.id: " + this.id);
    return Math.floor((this.id/4)+1);
};

makeCard.suit = function() {
    console.log("suit: " + ((this.id%4)+1));
    console.log("suit this.id: " + this.id);
    return ((this.id%4)+1);
};
   
makeCard.color = function() {
    var cardSuit = this.suit();
    console.log("cardSuit: " + cardSuit);
    console.log("this.suit(this.id): " + this.suit());
    return cardSuit && ((cardSuit<3)? "red": "black");
};

var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];

var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

makeCard.cardName = function() {
    var cardRank = this.rank(this.id);
    var cardSuit = this.suit(this.id);
    return (rankNames[cardRank]+' of '+suitNames[cardSuit]);
};

// Part b): build a deque instance:

var someCards = [];  // array of 52 card objects
	for (var id=0; id<52; id++) {
		someCards.push(makeCard[id]);
	}
	return someCards;
}

// Part c)

var deckOfCards = makeDeque(someCards)
for 
	return deckOfCards;
}

someCards = makeCardDeck;







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



