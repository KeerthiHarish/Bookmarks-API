'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FolderSchema = new Schema ({
  name: {
    type: String,
    required: "Please enter a folder name"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Folder', FolderSchema)
