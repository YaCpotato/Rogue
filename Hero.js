var Hero = function(){
    this.hp=100;
    this.mp=50;
  }
  
  Hero.prototype.greeting = function(){
    console.log('勇者の冒険');
  };
  
  Hero.prototype.attack = function(target){
    console.log('勇者の攻撃！');
    target.hp--;
  }
  
  Hero.prototype.setHP = function(hp){
    this.hp = hp;
  };
  