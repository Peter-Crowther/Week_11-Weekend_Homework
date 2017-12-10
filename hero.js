const Hero = function(name, health, favourite_food, hero_tasks) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.hero_tasks = [];
}

Hero.prototype.talk = function() {
  return `My name is ${this.name}`
}

Hero.prototype.eat = function(food){
  if (food.name === this.favourite_food) {
    this.health += food.replenishment_value * 1.5;
  }else {
    this.health += food.replenishment_value;
  }
}

Hero.prototype.addTask = function(task) {
  this.hero_tasks.push(task);
}

Hero.prototype.sortDifficulty = function(hero_tasks) {
  result = []
  for(task of hero_tasks){
    result.push(task.difficulty)
  }
  return result.sort()
}







module.exports = Hero;
