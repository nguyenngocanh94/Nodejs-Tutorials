var fs = require('fs');
/**
 * appendFile viet them len file cu. neu ko ton tai tao moi.
 */
fs.appendFile('index2.html', 'Hello world!', function (err) {
    if (err) throw err;
    console.log('Saved !');
});