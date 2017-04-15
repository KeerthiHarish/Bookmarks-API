'use strict';

let mongoose = require('mongoose')
let Folder = mongoose.model('Folder');
let Bookmark = mongoose.model('Bookmark')

exports.getAllFolders = (req, res) => {
  Folder.find().sort({createdAt: 'desc'}).exec((err, Folders) =>{
    if(err)
      res.send(err);
    res.json(Folders);
  })
}

exports.createFolder = (req, res) => {
  let newFolder = new Folder(req.body)
  newFolder.save((err, savedFolder) => {
    if(err)
      res.send(err)
    res.json(savedFolder);
  })
}

exports.deleteFolder = function(req, res) {
  var id = req.params.id
  Folder.findByIdAndRemove(id, (err, result) => {
    if(err)
      res.send(err);
    let updateCondition = { folder: result.name }
    let updateValue = {$set: { folder: null }}
    let updateOptions = {multi: true}
    Bookmark.update(updateCondition, updateValue, updateOptions)
    res.json(result);
  });
}
