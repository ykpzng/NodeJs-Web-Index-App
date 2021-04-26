const express = require('express');
const router = express.Router();
const fetchData = require('../controllers/fetchDataContr')
const editData = require('../controllers/editDataContr');


router.post('/', function (req, res, next) {
  let url1 = req.body.url0;
  let url2 = req.body.urlgroup;
  console.log("root keyword url1: ", url1)
  console.log("root keyword url2: ", url2)
  if (url1) {
    fetchData(url1)
      .then(data => {
        const tags = ['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'span'];
        let objArr = [];
        for (let i = 0; i < tags.length; i++) {
          objArr.push(...editData(data, tags[i]))
        }
        var temp = {};
        var obj = null;
        for (var i = 0; i < objArr.length; i++) {
          obj = objArr[i];

          if (!temp[obj.key]) {
            temp[obj.key] = obj;
          } else {
            temp[obj.key].val += obj.val;
            temp[obj.key].score += obj.score;
          }
        }
        var result = [];
        for (var prop in temp)
          result.push(temp[prop]);

        result.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
        // result.length = 10;
        res.send(JSON.stringify(result));
        next();

      })
      .catch(console.error);
  } else {
    fetchData(url2)
      .then(data => {

        const tags = ['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'span'];
        let objArr = [];
        for (let i = 0; i < tags.length; i++) {
          objArr.push(...editData(data, tags[i]))
        }
        var temp = {};
        var obj = null;
        for (var i = 0; i < objArr.length; i++) {
          obj = objArr[i];

          if (!temp[obj.key]) {
            temp[obj.key] = obj;
          } else {
            temp[obj.key].val += obj.val;
            temp[obj.key].score += obj.score;
          }
        }
        var result = [];
        for (var prop in temp)
          result.push(temp[prop]);

        result.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
        // result.length = 10;
        res.send(JSON.stringify(result));
        next();

      })
      .catch(console.error);
  }
});

module.exports = router;