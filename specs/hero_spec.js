const Hero = require("../hero.js");
const Food = require("../food.js");
const Task = require("../task.js")
const Rat = require("../rat.js")
const assert = require("assert");

describe("Hero", function(){
  var hero;
  var food;
  var task;
  var rat;

  beforeEach(function() {
    hero = new Hero("SuperTed", 40, "Lasagne");
    food = new Food("Chicken", 40);
    task1 = new Task("Hard", "Urgent", 20, false);
    task2 = new Task("Hard", "Non-Urgent", 15, false);
    task3 = new Task("Easy", "Non-Urgent", 5, false);
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
    assert.strictEqual(hero.health, 80);
  });

  it("should be able to add a task", function() {
    hero.addTask(task1);
    assert.deepStrictEqual(hero.hero_tasks.length, 1);
  });

  // it("should be able to sort tasks by difficulty", function() {
  //   hero.addTask(task1);
  //   hero.addTask(task2);
  //   hero.addTask(task3);
  //   assert.deepStrictEqual(hero.sortDifficulty(), ["Easy", "Hard", "Hard"]);
  // });

  // it("should be able to eat poisoned food", function() {
  //   rat.touchFood(food);
  //   hero.eat(food);
  //   assert.strictEqual(hero.health, 30)
  //
  // });

});
