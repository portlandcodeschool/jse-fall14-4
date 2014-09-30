//-------
// Part a): build a deque factory
function convertValFn(val){

};

var valQues = [100,4,3,67, 'poo',5,'hi','last'];

function makeDeque(values) {

	var deque = []; //{}; 

	for(var key in values){

		if(values.hasOwnProperty(key)){

			deque[key] = values[key];
		}
	}

	return values  = {

		deque: deque,

		top: makeDeque.tTop,

		bottom: makeDeque.bBottom,

		pop: makeDeque.pop,

		push: makeDeque.push,

		shift: makeDeque.shift,

		unshift: makeDeque.unshift,

		cut: makeDeque.cut,

		map: makeDeque.map,

		sort: makeDeque.sort
	};
};

makeDeque.tTop = function() {
	
	return this.deque[this.deque.length -1];

	//return(this.deque[Object.keys(this.deque).length -1]);
};
makeDeque.bBottom = function() {

	return this.deque[0];
	
};

makeDeque.pop = function() {

	return this.deque.pop();

	//delete this.deque[Object.keys(this.deque).length -1];
	 
};
makeDeque.push = function(val) {
	
	this.deque.push(val);

	//this.deque[Object.keys(this.deque).length] = val;
};

makeDeque.shift = function() {

	return this.deque.shift();

};
makeDeque.unshift = function(val) {

	return this.deque.unshift(val);
};

makeDeque.cut = function(offset) {

	var values = this.deque.splice(Math.ceil(this.deque.length/2), this.deque.length-1);
	
	return this.deque = values.concat(this.deque);

};

makeDeque.map = function(convertValFn) {

	return this.deque.map(convertValFn);
	
};

makeDeque.sort = function(compareValsFn) {

		return this.deque.sort(compareValsFn);	
};




//b) 
var someCards = []; 

for(var id = 0; id < 52; id++){

	someCards.push(makeCard(id));
}



//c)
var deckOfCards = makeDeque(someCards);
// sort it:



var deck = makeDeque(someCards);

deck.sort(compareValsFnId);

deck.cut();

deck.top().getName();

-->//'Seven of Diamonds' IT WORKED


var compareValsFnId = function(a,b){

	if(a.id < b.id){

		return -1;
 	}
 	if(b.id > a.id){

 		return 1;
 	}
 	else{

 		return 0;
 	}
}


var deck = makeDeque(someCards);

deck.sort(compareValsFnNm);

deck.bottom().getName();
--> //Ace of Clubs

deck.top().getName();
-->//Two of Spades

var compareValsFnNm = function(a,b){

	if(a.getName() < b.getName()){

			return -1;
 	}
 	if(a.getName() > b.getName()){

 			return 1;
 	}
 	else{

 		return 0;
 	}
}


//d)

var someNames = ['mike','jack','greg','adam','natalie','dan','sara','tristan','stacy'];


var deckOfNames = makeDeque(someNames)

var compareValsFnClNm = function(a,b){

	if(a.charAt(1) < b.charAt(1)){

			return -1;
 	}
 	if(a.charAt(1) > b.charAt(1)){

 			return 1;
 	}
 	else{

 		return 0;
 	}
};

//deckOfNames.sort(compareValsFnClNm)
-->
["mike", "jack", "greg", "adam", "natalie", "dan", "sara", "tristan", "stacy"]
deckOfNames.sort(compareValsFnClNm)
["jack", "natalie", "dan", "sara", "adam", "mike", "greg", "tristan", "stacy"]





















// At this point, data looks like Fig.2

// sort it differently:
deckOfCards.sort(/* something different here */);

//-------
// Part c): build another deque instance:
var someNames = /* make array of names here */;
var deckOfNames = makeDeque(someNames);
deckOfNames.sort(/* something here */);

