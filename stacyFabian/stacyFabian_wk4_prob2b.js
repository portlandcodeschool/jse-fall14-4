// factory from last homework

function makeCard(id) {
    if ((typeof id)!="number")
        return false;
    if (id%1 !== 0)
        return false;
    if (id<0 || id>51)
        return false;

    var newCard = {
        id: id,
        rank: makeCard.rank,
        suit: makeCard.suit,
        color: makeCard.color,
        name: makeCard.cardName,
    };
    return newCard;
}

makeCard.rank = function() {
    console.log("rank: " + Math.floor((this.id/4)+1));
    console.log("rank this.id: " + this.id);
    return Math.floor((this.id/4)+1);
};

makeCard.suit = function() {
    console.log("suit: " + ((this.id%4)+1));
    console.log("suit this.id: " + this.id);
    return ((this.id%4)+1);
};
   
makeCard.color = function() {
    var cardSuit = this.suit();
    console.log("cardSuit: " + cardSuit);
    console.log("this.suit(this.id): " + this.suit());
    return cardSuit && ((cardSuit<3)? "red": "black");
};

var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];

var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

makeCard.cardName = function() {
    var cardRank = this.rank(this.id);
    var cardSuit = this.suit(this.id);
    return (rankNames[cardRank]+' of '+suitNames[cardSuit]);
};


var deckOfCards = makeDeque(someCards);
	var someCards = [];
	for (var id=0; id<52; id++) {
		someCards.push(makeCard[id]);
	};

	return deckOfCards



