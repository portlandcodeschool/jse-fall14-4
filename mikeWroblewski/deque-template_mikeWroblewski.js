//-------
// Part a): build a deque factory
	function makeDeque(values) {
		
		var newDeque = {arr: values};

		newDeque.top = makeDeque.top;

		newDeque.bottom = makeDeque.bottom;

		newDeque.pop = makeDeque.pop;

		newDeque.push = makeDeque.push;

		newDeque.shift = makeDeque.shift;

		newDeque.unshift = makeDeque.unshift;

		newDeque.cut = makeDeque.cut;

		newDeque.map = makeDeque.map;

		newDeque.sort = makeDeque.sort;

		newDeque.shuffle = makeDeque.shuffle;

		newDeque.outcast = [];

		newDeque.checkVal = makeDeque.checkVal;

		return newDeque;
	};

makeDeque.top = function() {
	var end = this.arr.length-1;
	return this.arr[end];
};
makeDeque.bottom = function() {
	return this.arr[0];
};

makeDeque.pop = function() {
	// push this popped element to the outcast array
	var popped = this.arr.pop();
	if (popped !== undefined) {
		this.outcast.push(popped);
	}
	return popped;
};

makeDeque.push = function(val) {
	return this.checkVal(val) && this.arr.push(val);
};

makeDeque.shift = function() {
	var shifted = this.arr.shift();
	if (shifted !== undefined) {
		this.outcast.push(shifted);
	}
	return shifted;
};

makeDeque.unshift = function(val) {
		return this.checkVal(val) && this.arr.unshift(val);
};

makeDeque.cut = function() {
	var cutDeck = this.arr.splice(Math.round(this.arr.length / 2), this.arr.length-1);
	
	return this.arr = cutDeck.concat(this.arr);
};

makeDeque.map = function(convertValFn) {
	return (this.arr.map(convertValFn));
};

makeDeque.sort = function(compareValsFn) {
	return (this.arr.sort(compareValsFn));
};



// Part b): make array of 52 card objects here, using your code from Problem 1)


// At this point, data looks like Fig.1


var someCards = [];
for (var id = 0; id < 52; id++) {
	someCards.push(makeCard(id));
};



// use arr.concat() -- use to copy new arry for a new deck




//-------
// Part c): build a deque instance:
var deckOfCards = makeDeque(someCards); // copy the array
// sort it:
deckOfCards.sort(cardSortID); 

var cardSortID = function(a,b) {
	if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    return 0;
};
// At this point, data looks like Fig.2

// sort it differently:
deckOfCards.sort(cardSortName);

var cardSortName = function(a,b){
	if (a.name() < b.name()) {
        return -1;
    }
    if (a.name() > b.name()) {
        return 1;
    }
    return 0;	
};

//-------
// Part d): build another deque instance:
var someNames = ["Dallas",
				 "Adam",
				 "Sara",
				 "Stacy",
				 "Natalie",
				 "Jack",
				 "Greg",
				 "Joel",
				 "Tristan",
				 "Mike"];

var deckOfNames = makeDeque(someNames);

deckOfNames.sort(sortBy2ndLetter);

var sortBy2ndLetter = function(a,b) {
	if (a.charAt(1) < b.charAt(1)) {
		return -1;
	}
	if (a.charAt(1) > b.charAt(1)) {
		return 1;
	}
	return 0;
};

var theFinalName = deckOfNames.top();


// Part e): comparison function for sort to shuffle deck

var sortShuffle = function() {
	return Math.round(Math.random() - 0.5);
};


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
};




// Part f): 

makeDeque.checkVal = function(val) { // returns true if val was outcast
	var foundAt = this.outcast.indexOf(val);
	
	if (foundAt < 0) {// -1 if not found
			return false;
	} else {
	// else found; excise from outcast array
	this.outcast.splice(foundAt,1);
	return true;
	}
}



