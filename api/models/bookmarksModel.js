'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookmarkSchema = new Schema ({
  title: {
    type: String,
    required: "Please enter a title for bookmark"
  },
  bookmarkURL: {
    type: String,
    required: "Please enter a valid URL"
  },
  folder: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bookmark', bookmarkSchema)
