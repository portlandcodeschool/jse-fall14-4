//-------
// Part a): build a deque factory
function makeDeque(values) {
	var deque = {};
	deque.arr = values.splice();
	deque.top = makeDeque.top;
	deque.bottom = makeDeque.bottom;
	deque.pop = makeDeque.pop;
	deque.push = makeDeque.push;
	deque.shift = makeDeque.shift;
	deque.unshit = makeDeque.unshift;
	deque.cut = makeDeque.cut;
	deque.map = makeDeque.map;
	deque.sort = makeDeque.sort; 
};

makeDeque.top = function() {
	return this.arr[(this.arr.length)]; 
};
makeDeque.bottom = function() {
	return this[0];
};

makeDeque.pop = function() {
	return this.arr.pop();
};
makeDeque.push = function(val) {
	this.arr.push(val);
};

makeDeque.shift = function() {
	return this.arr.shift();
};
makeDeque.unshift = function(val) {
	this.arr.unshift(val);
};

makeDeque.cut = function() {
	var arr1 = [];
	var arr2 = [];
	if (this.arr.length%2 !== 0) {
		arr1 = this.arr.splice(0, (Math.ceil(this.arr.length/2)));
		arr2 = this.arr.splice((Math.ceil(this.arr.length/2)), this.arr.length);
		this.arr = arr2.concat(arr1).splice();
	} else {
		arr1 = this.arr.splice(0, (this.arr.length/2));
		arr2 = this.arr.splice((this.arr.length/2), this.arr.length);
		this.arr = arr2.concat(arr1).splice();
	}
};

makeDeque.map = function(convertValFn) {
	return this.arr.map(convertValFn);
};

makeDeque.sort = function(compareValsFn) {
	//needs more re: his description of inputs
	return this.arr.sort(compareValsFn);
};



//-------
// Part b): 
var someCards = [];
for (var id = 0; id < 52; ++id) {
	someCards.push(makeCard(id));
}

// Part C
// build a deque instance:
// Write a comparison function to sort deck by card ID, with card 51 (King of Clubs) on top. 
// Make sure the sorted deck passes the tests below:

var deckOfCards = makeDeque(someCards);

deckOfCards.sort(function (a, b) {
  if (this.arr[a].cardId < this.arr[b].cardId) {
    return 1;
  }
  if (this.arr[a].cardId > this.arr[b].cardId) {
    return -1;
  }
  return 0;
});

deckOfCards.cut();
assert(deckOfCards.top().cardName() === 'Seven of Diamonds', 'Failed Seven of Diamonds test');



//Now sort the deck by card name, alphabetically from bottom to top. 
//(Hint: You'll need to write a new comparison function.)

deckOfCards.sort(function (a, b) {
  if (this.arr[a].cardName > this.arr[b].cardName) {
    return 1;
  }
  if (this.arr[a].cardName < this.arr[b].cardName) {
    return -1;
  }
  return 0;
});

assert(deckOfCards.bottom().cardName() === 'Ace of Clubs', 'Failed Ace of Clubs test');
assert(deckOfCards.top().cardName() === 'Two of Spades', 'Failed Two of Spades test');

// Part D

var everyone = makeDeque(["Sara", "Stacy", "Adam", "Dallas", "Dan", "Joel", "Tristan", "Mike", "Jack"]);
everyone.sort((a, b) {
  if (this.arr[a].charAt(1) > this.arr[b].charAt(1)) {
    return 1;
  }
  if (this.arr[a].charAt(1) < this.arr[b].charAt(1)) {
    return -1;
  }
  return 0;
});

var theFinalName = everyone[(this.arr.length)]; 
assert(everyone.top() === theFinalName, 'Failed name test');

// Part E

//In your factory, add a deque method shuffle() which shuffles the elements into a 
//random order. First, try the easy (but slow and ineffective) way by using Array.sort() 
//with a comparison function returning a random result.

deque.shuffle = makeDeque.shuffle;

makeDeque.shuffle = function() {
	return this.arr.sort(function() {return 0.5 - Math.random()});
}

//Then do it properly using the in-place Knuth-Fisher-Yates algorithm.

makeDeque.shuffle = function() {
  var m = this.arr.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.arr[m];
    this.arr[m] = this.arr[i];
    this.arr[i] = t;
  }

  return this.arr;
}

//With the new factory definition, create a new deckOfCards and shuffle it. 

var newDeckOfCards = makeCard(someCards);
newDeckOfCards.shuffle();

//Use its map(...) method with a custom callback function to view the shuffled elements 
//by card.id. Then use map(...) with a different callback function to view them by card.name().

newDeckOfCards.map(); //needs the callback function!!

// Part F
// Improve your deque implementation to ensure that no one can add unauthorized elements 
// to it (e.g. extra Aces). Change anything necessary so that push(val) and unshift(val) 
// only add val if it was part of the original deque and is currently missing (via pop() 
// or shift()).

//(Hint: each deque will need some kind of inventory of all elements released with a pop 
//or shift.)