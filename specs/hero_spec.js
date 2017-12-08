const Hero = require("../hero.js");
const Food = require("../food.js");
const assert = require("assert");

describe("Hero", function(){
  var hero;
  var food;

  beforeEach(function() {
    hero = new Hero("SuperTed", 40, "Lasagne");
    food = new Food("Lasagne", 40);
  });

  it("should have a name, health, favourite food and empty tasks", function(){
    assert.strictEqual(hero.name, "SuperTed");
    assert.strictEqual(hero.health, 40);
    assert.strictEqual(hero.favourite_food, "Lasagne")
    assert.deepStrictEqual(hero.hero_tasks.length, 0)
  });

  it("should be able to talk", function() {
    assert.strictEqual(hero.talk(), "My name is SuperTed");
  });

  it("should be able to eat food", function() {
    hero.eat(food);
    assert.strictEqual(hero.health, 100);
  });

});
