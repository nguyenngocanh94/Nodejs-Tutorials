var fs = require('fs');

fs.unlink('index2.hmtl', function (err) {
    if (err) throw err;
    console.log('FILE DELETE!');
});