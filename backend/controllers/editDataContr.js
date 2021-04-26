const stopWordClear = require('./stopWordClear');

//Türkçe karakter sorununu gideren fonksiyon
String.prototype.turkishToLower = function () {
  var string = this;
  var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
  string = string.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) { return letters[letter]; })
  return string.toLowerCase();
}
function editData(data, tag) {
  let editedData = "";
  let score = 0;
  for (const item of data) {
    if (item[tag]) {
      editedData += item[tag] + " ";
      score = item.score;
    }
  }
  let arr1 = editedData.turkishToLower().replace(/[^a-zğçıöşü' ]/g, ' ').replace(/(\'.)/g, ' ').replace(/( .. )/g, ' ').replace(/( . )/g, ' ').split(' ');
  let arr = stopWordClear(arr1);
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let createObject = [];
  for (const [key, val] of Object.entries(obj)) {
    createObject.push({ key, val, score: val * score });
  }
  return createObject;
}
module.exports = editData;