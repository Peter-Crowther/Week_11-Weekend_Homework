const Task = function(difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.taskStatus = false;
}

Task.prototype.changeTaskStatus = function() {
  this.taskStatus = !this.taskStatus;
}



module.exports = Task;
