//-------
// Part a): build a deque factory
function makeDeque(values) {
	var newDeque = values.slice(); 
	
};

makeDeque.top = function() {
	//return the element on top (end of array) of the deque
};
makeDeque.bottom = function() {
	//return the element on bottom (beginning of array) of the deque
};

makeDeque.pop = function() {
	//remove and return the top (end of array) element
};
makeDeque.push = function(val) {
	//add an element to the top (end of array)
};

makeDeque.shift = function() {
	//remove and return the bottom (beginning of array) element
};
makeDeque.unshift = function(val) {
	//add an element to the bottom (beginning of array)
};

makeDeque.cut = function() {
	//split the deque at the middle, then swap the two halves. 
	//If there are an odd number of deque elements, split just above 
	//the middle element. The element just below the split will become 
	//the new top element when the halves are swapped.
};

makeDeque.map = function(convertValFn) {
	//return an array whose elements are derived from the values in 
	//deque, converting each value with the function convertValFn(val)
};

makeDeque.sort = function(compareValsFn) {
	//reorder all elements of the deque according to the comparison 
	//defined by the function compareValsFn, passed as an argument to 
	//sort. compareValsFn(a,b) should return a positive number whenever 
	//value a belongs somewhere below value b in the sorted result, and 
	//a negative number whenever a belongs above b. (Zero means they're 
	//equivalent: either may come first.)
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

