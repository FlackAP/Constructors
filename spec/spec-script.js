describe ('potions', function(){
	beforeEach(function(){
		player.hp.val(400)
	});
	it ('should add hp to player when used', function () {
		if (Hero.hp < 500) {
  		Hero.hp += 10;
  		expect(hero.hp).toBe(410)
  	});
  		
  		
});