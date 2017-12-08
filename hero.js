const Hero = function(name, health, favourite_food, hero_tasks) {
  this.name = name;
  this.health = 100;
  this.favourite_food = favourite_food;
  this.hero_tasks = [];
}

Hero.prototype.talk = function() {
  return `My name is ${this.name}`
}





module.exports = Hero;
