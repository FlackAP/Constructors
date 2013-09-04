describe ('potions', function(){
	beforeEach(function(){
		Hero = new player(400,400)
	})

	it ('should add hp to player when used', function () {
		if (Hero.hp < 500) {
  		healthPotion.use(this.items, 1);
  		expect(Hero.hp).toBe(410)
  	}
  	});
  		
  		
});