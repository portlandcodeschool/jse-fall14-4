//-------
// Part a): build a deque factory
function makeDeque(values) {
	var newDeck = { // empty opject w/ each item in it.
	var newArray = values.slice();
	}
};

makeDeque.top = function() {
	return this.newValues.length
};

makeDeque.bottom = function() {
	return this.newValues[0];
};

makeDeque.pop = function() {
	return this.newValues.pop();

};
makeDeque.push = function(val) {
	// remove and return the bottom element (first added)
};

makeDeque.shift = function() {
	//...
};
makeDeque.unshift = function(val) {
	//...
};

makeDeque.cut = function(offset) {
	//...
};

makeDeque.map = function(convertValFn) {
	//...
};

makeDeque.sort = function(compareValsFn) {
	//...
};

var someCards = /* make array of 52 card objects here, using your code from Problem 1) */;
// At this point, data looks like Fig.1

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

