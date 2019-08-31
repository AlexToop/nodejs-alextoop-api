'use strict';
module.exports = function(app) {
  var contentList = require('../controllers/alextoopApiController');


  app.route('/tasks')
    .get(contentList.list_all_tasks)
    .post(contentList.create_a_task);


  app.route('/tasks/:taskId')
    .get(contentList.read_a_task)
    .put(contentList.update_a_task)
    .delete(contentList.delete_a_task);
};