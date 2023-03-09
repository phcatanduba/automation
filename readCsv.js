const csv = require('csv-parser');
const fs = require('fs');
global.subjects = []

fs.createReadStream('disciplinas.csv')
  .pipe(csv({ separator: ',' }))
  .on('data', (data) => {
    const obj = {
      link: data.link,
      id: data.id,
      password: data.senha,
      url: data.url
    };
    global.subjects.push(obj);
  })
  .on('end', () => {
    console.log(global.subjects);
  });