Inventory= function (items) {
	this.items= items || [];

	this.add = function (item) {  //will push items into array
		this.items.push(item)
  	};

  	this.use = function (items, itemIndex) {
  		this.items[itemIndex].charges --;
  		console.log('YA USED IT');
  		if (Hero.hp < 500) {
  		Hero.hp += 10;
  		}
  		else {
  			console.log('health is full!')
  		}
  	}

  	this.refill = function (items, itemIndex) {
  		if (this.items[itemIndex].charges < this.items[itemIndex].capacity) {
  		this.items[itemIndex].charges ++;
  		console.log('YA FILLED IT')
  		}
  		else {
  			function display_alert() {
  			alert("You cannot carry anymore!");
  			}
  			console.log('You cannot carry anymore!')
  		}	
  	}
};

var healthPotion= new Inventory()

healthPotion.add ({slot:1, size:"large", capacity:25, charges:20})
healthPotion.add ({slot:2, size:"medium", capacity:15, charges:10})
healthPotion.add ({slot:3, size:"small", capacity:7, charges:5})


player = function(hp, attack){
	this.hp = hp;
	this.attack = attack;

	this.jab = function () {
		if (undead.hp > 0) {
			undead.hp --
		}
		
	};
};

var Hero = new player(500,50)
var Minion1 = new player(100, 20)
var Minion2 = new player(75, 30)

undead = function(hp, def){
	this.hp = hp;
	this.def = def;

};

CryptLord = new undead(200,50)