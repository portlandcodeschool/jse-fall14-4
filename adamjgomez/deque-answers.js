//-------
// Part a): build a deque factory
function makeDeque(values) {
  // ...
  return {
     array:  [],
     top: makeDeque.top,
     bottom: makeDeque.bottom,
     pop: makeDeque.pop,
     push: makeDeque.push,
     shift: makeDeque.shift,
     unshift: makeDeque.unshift,
     cut: makeDeque.cut,
     map: makeDeque.map,
     sort: makeDeque.sort,



    }
  
};

makeDeque.top = function() {

  return this.array[this.array.length-1];


  //...
};
makeDeque.bottom = function() {
  //...
};

makeDeque.pop = function() {

  return this.array.pop(value);
  //...
};
makeDeque.push = function(val) {

  makeDeque.array.pop(val)
  //...
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