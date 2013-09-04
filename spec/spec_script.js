describe ('potions', function(){
	beforeEach(function(){
		Hero = new player(400,40)
	})

	it ('should add hp to player when used', function () {
		if (Hero.hp < 500) {
  		healthPotion.use(this.items, 1);

  		expect(Hero.hp).toBe(410)
  	}
  });

  it ('should not add hp if players health is full', function () {
  	if (Hero.hp = 500) {
  		healthPotion.use(this.items, 1);
  		expect(Hero.hp).toBe(500)
  	}
  });
  
  it ('should lose one charge each time they are used', function () {
  	if (healthPotion.items[1].charges = 10) {
  		healthPotion.use(this.items, 1);
  		expect(healthPotion.items[1].charges).toBe(9)
	 }
	 });

  it ('should gain one charge each time it is refilled', function () {
  	if (healthPotion.items[1].charges = 10) {
  		healthPotion.refill(this.items, 1);
  		expect(healthPotion.items[1].charges).toBe(11)
  	}	
  });

  it ('should not add hp when empty', function () {
  	healthPotion.items[1].charges = 0;
  	healthPotion.use(this.items, 1);
  	expect(Hero.hp).toBe(410)	 
  });

  it ('should set condition of potion to broken if dropped', function () {
    healthPotion.drop(this.items, 1);
    expect(healthPotion.items[1].condition).toBe("broken")
  })
  		
});

describe ('player', function(){

  it('should lose a randomly generated amount of hp if running away', function () {
    Hero.hp = 500;
    Hero.run();
    expect(500-randomnumber).toBe(Hero.hp)
  });

  it('should gain attack when meditating', function() {
   Hero.attack = 60;
   Hero.meditate();
   expect(60+randomattack).toBe(Hero.attack);
  });

  it ('should lose hp when meditating', function () {
    Hero.hp =400;
    Hero.meditate();
    expect(400-randomattack).toBe(Hero.hp);
  });

  describe('jab', function(){

    it('should reduce hp of target based on attack value of player', function() {
      Hero2 = new player(500,999);
      punchingBag = new undead(999,10);
      Hero2.jab(punchingBag);
      expect(punchingBag.hp).toBe(0);
    });

  })


});

