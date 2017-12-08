const Hero = require("../hero.js");
const assert = require("assert");

describe("Hero", function(){
  var hero;

  beforeEach(function() {
    hero = new Hero("SuperTed", 100, "Lasagne", [])
  });

  it("should have a name, health, favourite food and empty tasks", function(){
    assert.strictEqual(hero.name, "SuperTed");
    assert.strictEqual(hero.health, 100);
    assert.strictEqual(hero.favourite_food, "Lasagne")
    assert.deepStrictEqual(hero.hero_tasks.length, 0)
  });

  it("should be able to talk", function() {
    assert.strictEqual(hero.talk(), "My name is SuperTed");
  });

});
