const Task = require("../task.js");
const assert = require("assert");

  describe("Task", function() {
    var task;

    beforeEach(function() {
      task = new Task("hard", "urgent", 22, false)
    });

    it("should have difficulty, urgency, reward, taskStatus", function(){
      assert.strictEqual(task.difficulty, "hard");
      assert.strictEqual(task.urgency, "urgent");
      assert.strictEqual(task.reward, 22);
      assert.strictEqual(task.taskStatus, false);
    });

    // it("should be able to mark a task as complete", function() {
    //   assert.strictEqual(task.markTaskComplete(), true);
    // });

  });
