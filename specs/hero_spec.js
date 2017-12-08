const Hero = require("../hero.js");
const Food = require("../food.js");
const Task = require("../task.js")
const assert = require("assert");

describe("Hero", function(){
  var hero;
  var food;
  var task;

  beforeEach(function() {
    hero = new Hero("SuperTed", 40, "Lasagne");
    food = new Food("Lasagne", 40);
    task1 = new Task("Hard", "Urgent", 20, false)
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

  it("should be able to add a task", function() {
    hero.addTask(task1);
    assert.deepStrictEqual(hero.hero_tasks.length, 1)
  });

});
