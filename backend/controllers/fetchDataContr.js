const puppeteer = require('puppeteer');

function fetchData(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);
      let urls = await page.evaluate(() => {
        const tags = ['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'span'];
        let results = [];
        for (let i = 0; i < tags.length; i++) {
          let element = document.querySelectorAll(tags[i]);
          element.forEach((item) => {
            switch (tags[i]) {
              case 'title':
                results.push({ title: item.innerHTML, score: 10 });
                break;
              case 'h1':
                results.push({ h1: item.textContent, score: 9 });
                break;
              case 'p':
                results.push({ p: item.textContent, score: 8 });
                break;
              case 'span':
                results.push({ span: item.textContent, score: 4 });
                break;
              case 'a':
                results.push({ a: item.text, score: 6 });
                break;
              case 'h2':
                results.push({ h2: item.textContent, score: 7 });
                break;
              case 'h3':
                results.push({ h3: item.textContent, score: 6 });
                break;
              case 'h4':
                results.push({ h4: item.textContent, score: 5 });
                break;
              case 'h5':
                results.push({ h5: item.textContent, score: 4 });
                break;
              case 'h6':
                results.push({ h6: item.textContent, score: 3 });
                break;
              case 'li':
                results.push({ li: item.textContent, score: 2 });
                break;
            }
          });
        }
        return results;
      })

      browser.close();
      return resolve(urls);
    } catch (e) {
      return reject(e);
    }
  })
}

module.exports = fetchData;