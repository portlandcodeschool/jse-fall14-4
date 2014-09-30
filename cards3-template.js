
function makeCard(id) {

    if(typeof(id) == 'number' && id < 52 && id > -1){

       var cardRankArr = ['','Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

        var cardSuitArr = ['','Hearts','Diamonds', 'Spades', 'Clubs'];

        return{ id: id,

                myCardRankArr: cardRankArr,

                myCardSuitArr: cardSuitArr,

                getCard: makeCard.isCard,

                getRank: makeCard.rank,

                getSuit: makeCard.suit,

                getColor: makeCard.colorz,

                getName: makeCard.cardName
            };
    }        
};

makeCard.isCard = function(card) {

    if(card !== undefined){
        
        if((typeof(card) == 'number') || Object.keys(card).length === 0){
        
            return false;
        }

        if (card.id >= 52){

            return false;
        
        }else{

            return true;
        }
    }else{

        if(!(typeof(this.id) == 'number')){

            return false;

        }

        if(this.id >= 52){

            return false;
        
        }else{

            return true;
        }
    }
};


makeCard.rank = function() {
    if(!(typeof(this.id) == 'number')){
        
        return 'invalid input, is NaN';
    
    }else{
        
        return Math.floor((this.id/4) + 1);
    }
};

makeCard.suit = function() {
    
    return (this.id % 4) + 1;

};
   
makeCard.colorz = function() { 

    var cardSuit = this.getSuit();
    
    if(cardSuit < 3){
    
        var result = 'red';
    
    }else{
    
        result = 'black';
    
    }
    
    return result;

};


makeCard.cardName = function() { 
    
    var cardRank = this.getRank();
    
    var cardSuit = this.getSuit();

    return this.myCardRankArr[cardRank] + ' of ' + this.myCardSuitArr[cardSuit];
    
};

function assert(claim,message) {
    if (!claim) console.error(message);
}

var card0 = makeCard(0);
var card3 = makeCard(3);
var card5 = makeCard(5);
var card51 = makeCard(51);


// Test instance methods:
assert(card0.getRank()===1,  "Test 1 failed");
assert(card3.getRank()===1,  "Test 2 failed");
assert(card51.getRank()===13,"Test 3 failed");
assert(card0.getSuit()===1,  "Test 4 failed");
assert(card5.getSuit()===2,  "Test 5 failed");
assert(card51.getSuit()===4, "Test 6 failed");
assert(card0.getColor()==='red',   "Test 10 failed");
assert(card3.getColor()==='black', "Test 11 failed");
assert(card5.getName()==='Two of Diamonds', "Test 12 failed");
assert(card51.getName()==='King of Clubs',  "Test 13 failed");

// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed");
assert(makeCard.isCard(card51), "Test 22 failed");
assert(!makeCard.isCard(0),    "Test 23 failed");
assert(!makeCard.isCard({}),   "Test 24 failed");


// Test card-making results:
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");


// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed");           //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.name === card3.name, "Test 53 failed");
//etc...



