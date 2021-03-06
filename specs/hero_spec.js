const Hero = require("../hero.js");
const Food = require("../food.js");
const Task = require("../task.js")
const Rat = require("../rat.js")
const assert = require("assert");

describe("Hero", function(){


  beforeEach(function() {
    hero = new Hero("SuperTed", 40, "Lasagne");
    food = new Food("Chicken", 40);
    rat = new Rat("Ratty");
    task1 = new Task(3, 1, 12, false);
    task2 = new Task(2, 3, 15, false);
    task3 = new Task(1, 2, 5, false);
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

  it("should be able to sort tasks by difficulty", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortDifficulty();
    assert.deepStrictEqual(hero.hero_tasks, [task3, task2, task1]);
  });

  it("should be able to sort tasks by urgency", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortUrgency();
    assert.deepStrictEqual(hero.hero_tasks, [task1, task3, task2])
  });

  it("should be able to sort tasks by reward", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortReward();
    assert.deepStrictEqual(hero.hero_tasks, [task3, task1, task2])
  });

  it("should be able to eat poisoned food", function() {
    rat.touchFood(food);
    hero.eat(food);
    assert.strictEqual(hero.health, 30)

  });

});
