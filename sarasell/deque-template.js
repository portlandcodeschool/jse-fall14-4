//-------
// Part a): build a deque factory
function makeDeque(values) {
	var array = values.slice;
	array.top = makeDeque.top;
	array.bottom = makeDeque.bottom;
	array.pop = makeDeque.pop;
	array.push = makeDeque.push;
	array.shift = makeDeque.shift;
	array.unshift = makeDeque.unshift;
	array.cut = makeDeque.cut;
	array.map = makeDeque.map;
	array.sort = makeDeque.sort;
	return array;
};

makeDeque.top = function() {
	return this.array[this.array.length-1];
};

makeDeque.bottom = function() {
	return this.array[0];
};

makeDeque.pop = function() {
	this.array.pop();
};

makeDeque.push = function(val) {
	this.array.push(val);
	return this.array;
};

makeDeque.shift = function() {
	this.array.shift();
	return this.array;
};

makeDeque.unshift = function(val) {
	this.array.unshift();
	return this.array;
};

makeDeque.cut = function(offset) {
	var makeDeque2 = makeDeque.slice(25,51); 
	var 3 = makeDeque.concat(makeDeque2);
};

makeDeque.map = function(convertValFn) {
	return this.array.map(convertValFn);
};

makeDeque.sort = function(compareValsFn) {
		return this.array.sort(compareValsFn);
	}
};

//PART B ANSWER

function makeCardSet() {
    var cardSet = [];
    for (var id = 0; id < 52; id++) {
    cardSet.push(makeCard(id))  
    }  
    return cardSet
};

var someCards = makeCardSet();

//-------
var deckOfCards = makeDeque(someCards);
function sortByCardID(cardA,cardB){
	return cardA.cardID - cardB.cardID;
}
// sort it:
deckOfCards.sort(sortByCardID);

// sort it differently:
function sortByCardName(cardA,cardB){
	cardA.cardName < cardB.cardName;
	return sortByCardName.reverse;
}
deckOfCards.sort(sortByCardName);

//-------
// Part c): build another deque instance:
var someNames = ["Adam","Dallas","Greg","Jack","Joel","Mike","Natalie","Sara","Stacey","Tristan"];
var deckOfNames = makeDeque(someNames);
function sortBySecondLetter(nameA,nameB) {
	return nameA.charAt(2) < nameB.charAt(2);
}
deckOfNames.sort(sortBySecondLetter);

