const Food = require("../food.js");
assert = require("assert");


describe("Food", function() {

  beforeEach(function(){
    food1 = new Food("Lasagne", 50)
  });

  it("should have a name and replenishment value", function() {
    assert.strictEqual(food1.name, "Lasagne")
    assert.strictEqual(food1.replenishment_value, 50)
  });





});
