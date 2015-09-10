// require modules
var hash = require('./hashtable'),
    jsonfile = require('jsonfile'),
    file = '../books.json',
    hash = new hash();

jsonfile.readFile(file, function(err, obj) {
    if (err) throw err;
    var Books = obj;
    createIndex(obj);
    console.log(hash.getItem('hole'));
    console.log(hash.getKeys());
});

// function create index
function createIndex(obj) {
    for (key in obj) {
        var text = obj[key].title.concat(obj[key].text);
        text = text.replace(/[^a-zA-Z ]/g, "").split(' ');
        text = hash.getKeyWords(text);
        for (var i = 0; i < text.length; i++) {
            hash.setItem(text[i].toLowerCase(), key);
        }
    }
}
