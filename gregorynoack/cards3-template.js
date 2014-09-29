function makeCard(id) {
if(typeof id !== "number" || id > 51 || id <= 0){
    var card = {};
}else
  var card = {rank:0, suit:1, color:"", cardName:"", arrRank:[], arrSuit:[]};
  card.mcID = id;
  card.rank = makeCard.rank;
  card.suit = makeCard.suit;
  card.color = makeCard.color;
  card.cardName = makeCard.cardName;
  card.isCard = makeCard.isCard;
  
  card.arrRank = ["","Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
  card.arrSuit = ["","Hearts","Diamonds","Spades","Clubs"];
  card.rank(id);
  card.suit(id);
  card.color(id);
  card.cardName(id);

return card;
}

makeCard.rank = function() { 
    var id = this.mcID;
    return Math.floor((id / 4)+1);
}
makeCard.suit = function() {
    var id = this.mcID;
    return (id % 4) + 1;
}

makeCard.color = function() {
    return (this.suit() < 3 ? "red" : "black");
}
makeCard.cardName = function() {
   // return this.name = this.arrRank[r] + " of " + this.arrSuit[s];

   return this.arrRank[this.rank()] + " of " + this.arrSuit[this.suit()];
}
makeCard.isCard = function(card) { // --> true,false
  // return true if card is a valid card instance made by this factory
  var id = this.mcID;
  if(card.rank !== this.rank){
    return false;
    }else{
        return true;
    }
}

// Testing suite...
function assert(claim,message) {
    if (!claim) console.error(message);
}

// card instances needed for assertions:
var card0 = makeCard(0);
var card3 = makeCard(3);
var card5 = makeCard(5);
var card51 = makeCard(51);


// Test instance methods:
assert(card0.rank()===1,  "Test 1 failed");
assert(card3.rank()===1,  "Test 2 failed");
assert(card51.rank()===13,"Test 3 failed");
assert(card0.suit()===1,  "Test 4 failed");
assert(card5.suit()===2,  "Test 5 failed");
assert(card51.suit()===4, "Test 6 failed");
assert(card0.color()==='red',   "Test 10 failed");
assert(card3.color()==='black', "Test 11 failed");
assert(card5.cardName()==='Two of Diamonds', "Test 12 failed");
assert(card51.cardName()==='King of Clubs',  "Test 13 failed");

// Test makeCard.isCard:
assert(makeCard.isCard(card0),  "Test 21 failed")
assert(makeCard.isCard(card51), "Test 22 failed")
assert(!makeCard.isCard(0),    "Test 23 failed")
assert(!makeCard.isCard({}),   "Test 24 failed")


// Test card-making results:
assert(!makeCard(52),"Test 26 failed");
assert(!makeCard("0"),"Test 27 failed");
assert(!makeCard(-1),"Test 28 failed");
assert(!makeCard(false),"Test 30 failed");
assert(!makeCard(true),"Test 31 failed");


// Test that methods are shared:
assert(card0 !== card3, "Test 50 failed"); //first prove different cards
assert(card0.rank === card3.rank, "Test 51 failed");
assert(card0.suit === card3.suit, "Test 52 failed");
assert(card0.cardName === card3.cardName, "Test 53 failed");
//etc...



