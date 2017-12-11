const Rat = function(name){
  this.name = name;
}

Rat.prototype.touchFood = function(food){
  food.replenishment_value = -10;
}






module.exports = Rat;
