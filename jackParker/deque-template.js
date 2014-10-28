//-------
function makeDeque(values) {

	newArr = [];
	
	for(count = 0; count < values.length; count++) {
		
		newArr.push(values[count]);
		
	}
	
	var deck = {
		
		arr:		newArr,
		removed:	{},
		top: 		makeDeque.top,
		bottom: 	makeDeque.bottom,
		pop:		makeDeque.pop,
		push:		makeDeque.push,
		shift:		makeDeque.shift,
		unshift:	makeDeque.unshift,
		cut:		makeDeque.cut,
		map:		makeDeque.map,
		sort:		makeDeque.sort,
		shuffle:	makeDeque.shuffle
			
	}
	
	return deck;
	
};

// return the element on top of the deque
makeDeque.top = function() {
	
	return this.arr[this.arr.length - 1];
	
};

// return the element on bottom of the deque
makeDeque.bottom = function() {
	
	return this.arr[0];
	
};

// remove and return the top element
makeDeque.pop = function() {

	var topElement = this.arr[this.arr.length - 1];
	this.removed[topElement.id] = topElement;
	this.arr.pop();
	return topElement;
	
};

// add an element to the top
makeDeque.push = function(val) {
	
	if(!(val.id in this.removed)) {
		
		console.error('ERROR: You can\'t add a card to the deck that\'s already there!');
		return false;
		
	}
	
	this.arr.push(val);
	
	delete this.removed[val.id];
	
};

// remove and return the bottom element
makeDeque.shift = function() {
	
	var shifted = this.arr.shift();
	this.removed[shifted.id] = shifted;
	return shifted;
	
};

// add an element to the bottom
makeDeque.unshift = function(val) {
	
	if(!(val.id in this.removed)) {
		
		console.error('ERROR: You can\'t add a card to the deck that\'s already there!');
		return false;
		
	}
	
	this.arr.unshift(val);
	
	delete this.removed[val.id];
	
};

// split the deque at the middle, then swap the two halves
makeDeque.cut = function() {
	
	var arrTop = this.arr.splice(0, Math.floor(this.arr.length / 2));
	this.arr = this.arr.concat(arrTop);
	
};

// reorder all elements of the deque according to the comparison
makeDeque.sort = function(compareValsFn) {
	
	return this.arr.sort(compareValsFn);
	
};

// return an array whose elements are derived from the values in deque
makeDeque.map = function(convertValFn) {

	return this.arr.map(convertValFn);

};

// shuffle the deque (ineffective)
makeDeque.shuffleBad = function(shuffleFn) {
	
	return this.arr.sort(shuffleFn);
	
}

makeDeque.shuffle = function() {
	
	
	
	var array = this.arr,
		m = array.length, 
		t, 
		i;
	
	// While there remain elements to shuffle…
	while (m) {
	
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);
		
		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
		
	}
	
	return array;
	
}

// make array of 52 card objects here, using your code from Problem 1
var someCards = [];

for(count = 0; count < 52; count++) {
	
	someCards.push(makeCard(count));
	
}

var sortAsc = function(a, b) {

	if (a.id > b.id) {
	
		return 1;
	
	}
	
	if (a.id < b.id) {
	
		return -1;
	
	}
	
	return 0;
	
}

var sortDesc = function(a, b) {
	
	if (a.id < b.id) {
	
		return 1;
	
	}
	
	if (a.id > b.id) {
	
		return -1;
	
	}
	
	return 0;
	
}

var sortAlpha = function(a, b) {
	
	var nameA = a.name().toLowerCase(),
		nameB = b.name().toLowerCase();
		
	if(nameA < nameB) {
	
		return -1;
		
	}
	
	if (nameA > nameB) {
		
		return 1;
			
	}
	
	return 0;
	
}

var sortAlphaLtrTwo = function(a, b) {
	
	var nameA = a.toLowerCase(),
		nameB = b.toLowerCase();
		
	if(nameA[1] < nameB[1]) {
	
		return -1;
		
	}
	
	if (nameA[1] > nameB[1]) {
		
		return 1;
			
	}
	
	return 0;
	
}

var shuffleBadFn = function(a, b) {
	
	return (Math.round(Math.random()) - 0.5);
	
}

var mapID = function(el) {
	
	console.log(el.id);
	
}

var mapName = function(el) {
	
	console.log(el.name());
	
}

var everyone = makeDeque(['Joel', 'Mike', 'Stacey', 'Dan', 'Dallas', 'Adam', 'Greg']);