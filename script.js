Inventory= function (items) {
	this.items= items || [];

	this.pickUp = function (item) {  //will push items into array
		this.items.push(item)
  	};

  	this.use = function (items, itemIndex) {
  	 if (this.items[itemIndex].charges < 0) {
      console.log('this potion is empty!')
     }
     else { 
        this.items[itemIndex].charges --;
  		  console.log('YA USED IT');
  		  if (Hero.hp < 500) {
  		  Hero.hp += 10;
  		  }
  		  else {
  		  	console.log('health is full!')
  		  }
      }  
  	};

 this.drop = function (items, itemIndex) {
      this.items[itemIndex].charges = 0;
      this.items[itemIndex].condition = "broken";
      return("You broke the " + this.items[itemIndex].size + " potion. Great Job!")
    }

  	this.refill = function (items, itemIndex) {
  		if (this.items[itemIndex].charges < this.items[itemIndex].capacity) {
  		this.items[itemIndex].charges ++;
  		console.log('YA FILLED IT')
  		}
  		else {
  			console.log('You cannot carry anymore!')
  		}	
  	}

};

var healthPotion= new Inventory()

healthPotion.pickUp ({size:"large", capacity:25, charges:20})
healthPotion.pickUp ({size:"medium", capacity:15, charges:10})
healthPotion.pickUp ({size:"small", capacity:7, charges:5})


player = function(hp, attack, name){
	this.hp = hp;
	this.attack = attack;
  this.name = name; 

	this.jab = function (target) {
		if (target.hp > 0) {
			target.hp -= this.attack;
      this.hp -= target.def
		}
    if (target.hp < 1) {
      console.log('you have slain this monster!')
    }
    return ("your target has " + target.hp + "hp and Hero has " + Hero.hp +'hp.');
	};

  this.kick = function (target) {
    randomkick = Math.floor(Math.random(50)*50);
    if (target.hp > 0) {
      target.hp -= this.attack;
      target.hp -= randomkick;
      this.hp -= target.attack;
      this.hp -= (.5)*randomkick;
    }
    if (target.hp < 1) {
      console.log('you have slain this monster!')
    }
    return ('your kick landed for an extra ' + randomkick + ' points. Your target now has' + target.hp + 'hp and Hero has ' + Hero.hp +'hp.')
  };

  this.run= function() {
    randomnumber = Math.floor(Math.random(30)*30);
    this.hp -= randomnumber;
    return ('you ran away, but tripped on a pebble and lost ' + randomnumber+ 'hp!')
  }

  this.meditate= function() {
    randomattack = Math.floor(Math.random(30)*30);
     this.attack += randomattack;
     this.hp -= randomattack;
    return ('you have meditated on the battlefiend and gained ' + randomattack +
      "attack power, but you have neglected your physical self and have lost "
       + randomattack + "hp")
  }

};

var Hero = new player(500,50, "Hero")


undead = function(hp, def, attack){
	this.hp = hp;
	this.def = def;
  this.attack = attack;

  this.miniboss= function(hp, def, attack) {
    this.hp += 200;
    this.def += 40;
    this.attack += 80; 
    this.type= "miniboss"
  }

  this.hostile = function(target) {
    this.condition = "hostile"
    target.hp -= this.attack;
    console.log('The undead creature lunges out of darkness and hits you for ' + this.attack + 'hp')
  }

  this.selfDestruct = function(target) {
    this.hp = 0;
    target.hp -= 150;
    console.log ('The undead creature explodes and damages you for 150hp!') 
  }

};

var CryptLord = new undead(200,50,60)






