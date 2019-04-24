var Slime = function(){
    this.hp=10;
    this.mp=3;
    console.log('スライムが現れた');
  }
  
  Slime.prototype.attack = function(target){
     console.log('スライムの攻撃！');
     target.hp--;
  }
  
  Slime.prototype.setHP = function(hp){
    this.hp = hp;
  }
  
  Slime.prototype.Dead = function(){
    console.log('スライムを倒した')
  }
  
  