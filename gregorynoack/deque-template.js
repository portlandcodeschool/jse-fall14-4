//-------
// Part a): build a deque factory
function makeDeque(arr) {
	// ...
	var deck = {arr:arr};
	deck.top = makeDeque.top;
	deck.bottom = makeDeque.bottom;
	deck.pop = makeDeque.pop;
	deck.push = makeDeque.push;
	deck.shift = makeDeque.shift;
	deck.unshift = makeDeque.unshift;
	deck.cut = makeDeque.cut;
	deck.map = makeDeque.map;
	deck.sort = makeDeque.sort;
	return deck;
};
makeDeque.top = function() {
	var end = this.arr.length-1;
	return this.arr[end];
};
makeDeque.bottom = function() {
	return this.arr[0];
};



makeDeque.pop = function() {
	return this.arr.pop();
};

makeDeque.push = function(val) {
	return this.arr.push(arr[val]);
};

makeDeque.shift = function() {
	this.pop();
	return this.top();
};
makeDeque.unshift = function(val) {
	return this.arr.unshift(val);
};
makeDeque.cut = function(offset) {
	var cutDeck = this.arr.splice(Math.round(this.arr.length / 2), this.arr.length-1);
	return this.arr = cutDeck.concat(this.arr);
};
makeDeque.map = function(convertValFn) {
	return (this.arr.map(convertValFn));
};
makeDeque.sort = function(compareValsFn) {
	return (this.arr.sort(compareValsFn));
};

/* make array of 52 card objects here, using your code from Problem 1) */;
// At this point, data looks like Fig.1
function makeCard(id) {
  var card = {id:id, rank:0, suit:1, color:"", cardName:"", arrRank:[], arrSuit:[]};
  var id= id;
  card.rank = makeCard.rank;
  card.suit = makeCard.suit;
  card.color = makeCard.color;
  card.cardName = makeCard.cardName;
  card.isCard = makeCard.isCard;
  
  card.arrRank = ["","Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
  card.arrSuit = ["","Hearts","Diamonds","Spades","Clubs"];
  card.rank(id);
  card.suit(id);
  card.color(id);
  card.cardName(id);

return card;
}

makeCard.rank = function() { 
    return Math.floor((this.id / 4)+1);
}
makeCard.suit = function() {
    return (this.id % 4) + 1;
}

makeCard.color = function() {
    return (this.suit() < 3 ? "red" : "black");
}
makeCard.cardName = function() {
   // return this.name = this.arrRank[r] + " of " + this.arrSuit[s];

   return this.arrRank[this.rank()] + " of " + this.arrSuit[this.suit()];
}


var someCards = [];
for (var id = 0; id < 52; id++) {
	someCards.push(makeCard(id));
};


var cardDex = makeDeque(someCards);


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

