const Hero = require("../hero.js");
const assert = require("assert");

describe("Hero", function(){
  var hero;

  beforeEach(function() {
    hero = new Hero("SuperTed", 100, "Lasagne")
  });

  it("should be able to talk", function() {
    assert.strictEqual(hero.talk(), "My name is SuperTed")
  });

});
