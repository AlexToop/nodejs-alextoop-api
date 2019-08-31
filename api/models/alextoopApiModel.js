'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Please enter the title of content'
  },
  content: {
    type: String,
    required: 'Please enter the main body of content'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);