var fs = require('fs');
/**
 * fs.writeFile viet de file da ton tai, tao moi file neu chua ton tai.
 */
fs.writeFile('index2.html', 'fs.witeFile works like that!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});