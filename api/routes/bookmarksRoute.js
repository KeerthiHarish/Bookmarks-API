'use strict';

// var express = require('express');
// var bookmarkRouter = express.Router();

let bookmarkControl = require('../controllers/bookmarksController');

// bookmarkRouter.get('/', (req, res) => bookmarkControl.getAllBookmarks(req, res))
//               .get('/:id', (req, res) => bookmarkControl.getBookmarkById(req, res))
//               .post('/', (req, res) => bookmarkControl.createBookmark(req, res))
//               .put('/:bId/folder/fId', (req, res) => bookmarkControl.updateBookmarkWithFolder(req, res))
//               .delete('/:id', (req, res) => bookmarkControl.deleteBookmark(req, res));

// module.exports = bookmarkRouter;

module.exports = (app) => {
  app.route('/bookmarks')
      .get(bookmarkControl.getAllBookmarks)
      .post(bookmarkControl.createBookmark);

  app.route('/bookmarks/:id')
      .get(bookmarkControl.getBookmarkById)
      .delete(bookmarkControl.deleteBookmark)

  app.route('/bookmarks/:bid/folder/:fid')
      .put(bookmarkControl.updateBookmarkWithFolder)
}
