'use strict';

// var express = require('express');
// var folderRouter = express.Router();

let folderControl = require('../controllers/foldersController');

// folderRouter.get('/', (req, res) => folderControl.getAllFolders(req, res))
//               .get('/:id', (req, res) => folderControl.getFolderById(req, res))
//               .post('/', (req, res) => folderControl.createFolder(req, res))
//               .put('/:bId/folder/fId', (req, res) => folderControl.updateBookmarkWithFolder(req, res))
//               .delete('/:id', (req, res) => folderControl.deleteFolder(req, res));

// module.exports = folderRouter;

module.exports = (app) => {
  app.route('/folders')
    .get(folderControl.getAllFolders)
    .post(folderControl.createFolder)

  app.route('/folders/:id')
      .delete(folderControl.deleteFolder)
}
