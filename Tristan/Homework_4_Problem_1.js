
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
