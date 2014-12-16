var testArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var testArray2 = ["Now", "is", "the", "time", "for", "all", "good", "men", "to", "come", "to", "the", "aid", "of", "their", "country"];

// Part a): build a deque factory
function makeDeque(values) {
	var newDeque = {};
	newDeque.arrayCopy = [];

	for(var i = 0; i<(values.length); i++){
		newDeque.arrayCopy[i] = values[i];
	};
	
	newDeque.top = makeDeque.top;
	newDeque.bottom = makeDeque.bottom;
	newDeque.pop = makeDeque.pop;
	newDeque.push = makeDeque.push;
	newDeque.shift = makeDeque.shift;
	newDeque.unshift = makeDeque.unshift;
	newDeque.cut = makeDeque.cut;
	newDeque.sort = makeDeque.sort;
	newDeque.shuffleFaux = makeDeque.shuffleFaux;
	newDeque.shuffleReal = makeDeque.shuffleReal;
	newDeque.convertValFn = makeDeque.convertValFn;

	return newDeque;
};

makeDeque.top = function() {
	var lastItem = -1;
	for(var key in this.arrayCopy){lastItem++};
	return this.arrayCopy[lastItem];
};

makeDeque.bottom = function() {
	return this.arrayCopy[0];
	
};

makeDeque.pop = function() {
	var lastItem = -1;
	for(var key in this.arrayCopy){lastItem++};
	var lastElement = this.arrayCopy[lastItem];
	this.arrayCopy.splice(lastItem, 1);
	return lastElement;
};

makeDeque.push = function(val) {
	this.arrayCopy.push(val);
};

makeDeque.shift = function() {
	var bottomElement = this.bottom();
	this.arrayCopy.shift();
	return bottomElement;
};

makeDeque.unshift = function(val) {
	this.arrayCopy.unshift(val);
};

makeDeque.cut = function() {
	var lastItem = this.arrayCopy.length;
	var midpoint = Math.ceil(lastItem/2);
	var arr1=[];
	var arr2=[];
	var p = 0;
	for(var i=0; i<midpoint; i++){arr1[i] = this.arrayCopy[i]};
	for(var v = midpoint; v<lastItem; v++){arr2[p] = this.arrayCopy[v]; p++};

	this.arrayCopy = arr2.concat(arr1);
	return arr2;
};

makeDeque.sort = function() {
	this.arrayCopy = this.arrayCopy.sort(function(a, b){if(a>b)return 1; if (a<b) return -1; else return 0;});
	//I don't really understand in the assignment prompt why it talks about compareValsFn. Should that be a separate function passed in?
	//Can I put the compareValsFn within this method? Or within the factory? Or what?
};

makeDeque.map = function(convertValFn) {
	//This is a function that takes each element in an array, runs it through a function, and returns a new array with the "transformed" values in it.
	var mappedArray = convertValFn();
	return mappedArray;
};

makeDeque.convertValFn = function(){
	return this.arrayCopy;

}

//Note that the shuffleFaux method only works for cards. It's set up to work on an array of objects but not an array of strings like deckOfNames. Is that right?
makeDeque.shuffleFaux = function() {
	this.arrayCopy = this.arrayCopy.sort(function(a, b)
											{if (a.myName().charAt(0)>b.myName().charAt(2))
												return 1; 
												else return -1;})
};

makeDeque.shuffleReal = function() {
  //This stuff just lifted directly from Knuth-Fisher-Yates. Is that right? In any case, it appears to work.
	var m = this.arrayCopy.length, t, i;
	var array = this.arrayCopy;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  this.arrayCopy = array;
};

var someCards = {};
someCards = [];
//someCards.arrayOfCards = [];
for (var i = 0; i<52; i++){someCards[i] = makeCard(i);}
//for (var i = 0; i<52; i++){someCards.arrayOfCards[i] = makeCard(i);}
function makeCard(id){
	//Check the argument to make sure it's a valid card ID
	if (!((id>-1) && (id<52))) return null;
	if (typeof(id) != "number") return null;
	if ((id%1)!==0) return null;

	var newCard = {
					id:id, //Give the new object a property so it knows its own ID		
					rank:rank,//Assign each of the functions above to methods of the instance newCard
					suit:suit,
					color:color,
					myName:myName
				};

					//Define each of the functions that will be given to the instances.

					//#1 is the rank function
					function rank() {
 					   return Math.ceil((this.id+1)/4);
 					}

 					//#2 is the suit function
 					function suit(){
						return (this.id%4)+1;
 						 }

 					//#3 is the color function
 					function color(){
 							var mySuit = this.suit(this.id);
					     	if ((mySuit === 1) || (mySuit ===2))
					    	return "red";
 					    	else 
 				        	return "black";
            				}

    				//#4 is the name function which we must call differently for some reason. I'll call it myName
    				function myName(){
    					var suitName = ["Hearts", "Diamonds", "Spades", "Clubs"];
    					var rankName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven","Eight", "Nine", "Ten", "Jack", "Queen", "King"]
							var fullName = rankName[this.rank(this.id)-1] + " of " + suitName[this.suit(this.id)-1];
							return fullName;
						    }

					return newCard;

		}
	makeCard.isCard = function (object){
			if((object.id>-1) && (object.id<52) && (typeof(object) === "object") && ("rank" in object) && ("suit" in object) && ("color" in object) && ("myName" in object))
				return true;
			else return false;
			}

var deckOfCards = makeDeque(someCards);

// sort it with id 51 (king of clubs) on top (in position 51):
deckOfCards.arrayCopy.sort(function(a, b){return a.id-b.id});


// sort it alphabetically by name of card:
deckOfCards.arrayCopy.sort(function(a, b){
							var nameA = a.myName().toLowerCase();
							var nameB = b.myName().toLowerCase();
							if (nameA.charAt(0) < nameB.charAt(0)) //sort string ascending
 							 return -1 
 							if (nameA.charAt(0) > nameB.charAt(0))
 							 return 1
 							return 0 //default return value (no sorting)
							});

//-------
// Part d) build another deque instance:
var someNames = ["Adam", "Joel", "Jack", "Stacy", "Dallas", "Sara", "Natalie", "Greg", "Tristan", "Andrea"];
var deckOfNames = makeDeque(someNames);
//Sort that new deque by the second letter in the name
deckOfNames.arrayCopy.sort(function(a,b){return a.charAt(1)>b.charAt(1)})