const Task = function(difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.taskStatus = false;
}

// Task.prototype.markTaskComplete = function(taskStatus) {
//
// }



module.exports = Task;
