var john = new Hero();
john.greeting();

var slime = new Slime();

$('#enemyAttack').click(function() {
  slime.attack(john);
})

$('#heroAttack').click(function() {
  john.attack(slime);
})