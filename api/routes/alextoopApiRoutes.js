'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/alextoopApiController');


  app.route('/content')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/content/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};