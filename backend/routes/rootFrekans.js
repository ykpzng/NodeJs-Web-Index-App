const express = require('express');
const router = express.Router();
const fetchData = require('../controllers/fetchDataContr');
const editData = require('../controllers/editDataContr');

router.post('/', function (req, res, next) {
  let url = req.body.url;
  console.log("root frekans url: ", url)
  fetchData(url)
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

      result.sort((a, b) => parseFloat(b.val) - parseFloat(a.val));
      res.send(JSON.stringify(result));
      next();
    })
    .catch(console.error);

});

module.exports = router;