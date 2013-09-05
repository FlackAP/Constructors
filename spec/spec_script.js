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

    it ('should reduce hp of player based on defense value of target', function() {
      Hero2= new player(500, 999);
      punchingBag = new undead(500, 40, 90);
      Hero2.jab(punchingBag);
      expect(Hero2.hp).toBe(460);
    });
  });

  describe('kick', function() {

    it('should reduce players health by targets attack value plus half of the amount of extra damage inflicted', function() {
       HeroTest= new player(500,60);
       punchingBag = new undead(300,0,40);
       HeroTest.kick(punchingBag);
       expect(Hero2.hp - (.5)*randomkick).toEqual(500 - (punchingBag.attack + (.5)*randomkick));
    });

    it('should reduce targets health by players attack value plus value of randomkick', function() {
      HeroTest= new player(500,60);
      punchingBag = new undead(300,0,0);
      HeroTest.kick(punchingBag);
      expect(punchingBag.hp).toBe(300 - (60 + randomkick));
    });

  }); 
});

describe('undead', function () {

  it('should use attack value to subtract hp from target when hostile', function () {
    Hero= new player(400,20);
    CryptLord= new undead(30,40,100);
    CryptLord.hostile(Hero);
    expect(Hero.hp).toBe(300)
  });

  describe('miniboss', function(){
    it('should increase its hp, attack, and defense when changing to a miniboss', function (){
      CryptLord= new undead(30,40,100);
      CryptLord.miniboss();
      expect(CryptLord.hp).toBe(230);
    });

    it('should change its type to miniboss', function (){
      CryptLord= new undead(30,40,100);
      CryptLord.miniboss();
      expect(CryptLord.type).toBe("miniboss");
    });
  });
    


  describe('selfDestruct', function() {

    it ('should damage the target', function () {
      Hero= new player(400,20);
      CryptLord= new undead(30,20);
      CryptLord.selfDestruct(Hero);
      expect(Hero.hp).toBe(250);
    });

    it ('should reduce own hp to zero', function () {
      Hero= new player(400,20);
      CryptLord= new undead(30,20);
      CryptLord.selfDestruct(Hero);
      expect(CryptLord.hp).toBe(0);
    });

  });  
});

