// Stacy Fabian
// Homework #4
// Problem 2b

// **b)** _[Easy, 1/2 hr]_
// Use your _makeCard_ factory from Problem 1) to create _someCards_, an array of 52 different card objects.  The factory should have given each card some methods to retrieve its own name, color, etc.


var someCards = [];
for (var id=0; id<52; id++) {
	someCards.push(makeCard(id));
};