// thomas nyambati
// hashtable
// create a hash table to hold the indexes

var HashTable = function() {
    /**
     * define the hastable function
     * this table will have the property length
     * an an object of items to hold the the indexes 
     */

    this.length = 0;
    this.items = {};

    // Method hasItem
    // find if the key if available
    this.hasItem = function(key) {
        return this.items.hasOwnProperty(key);
    };

};

/* Method setItem
 * this method will set the items into the hastable 
 * and also ensures that it doesnot overwrite any key or or value.
 */

HashTable.prototype.setItem = function(key, index) {

    /* Checks if the hastable has  the key
      hecks is the value passed is also in the hastable
      if true push only the index on the file where the term was found
      */
    if (this.hasItem(key) && this.items[key] === index) {
        this.items[key].push(index);

        // if it has the term but the not from the same file 
        // if it is true then push the file and the index where the file was found

    } else if (this.hasItem(key) && this.items[key] !== index) {
        this.items[key].push(index);

        // if the term is not in the hashtable
        // create a new term with the file and the index where it was found
    } else {
        this.items[key] = [index];
        this.length++;
    }
};

/* Method getItem
   This method return an array of file and indexex of a givem term if found
   And undefined if not found
   var index = new hastable();
   index.getItem('mango') => ['fruits',[0]] or => undefined
*/

HashTable.prototype.getItem = function(key) {
    return this.hasItem(key) ? this.items[key] : undefined;
};

HashTable.prototype.getKeys = function() {

    var keys = [];
    for (var key in this.items) {
        keys.push(key);
    }
    return keys;
};

HashTable.prototype.getValues = function() {

    var values = [];
    for (var keys in this.items) {
        values.push(this.items[keys]);
    }
};

/* 
 * This function receives an array of all words and returns an
 * array of only keywords excluding conjusctions
 */

HashTable.prototype.getKeyWords = function(textContent) {
    var conjunctions = ['of', 'the', 'in', 'and', 'an', 'in', 'a', 'to'],
        finalArray = [];

    for (var i = 0; i < textContent.length; i++) {
        if (conjunctions.indexOf(textContent[i].toLowerCase()) == -1) {
            finalArray.push(textContent[i]);
        }
    }

    return finalArray;
};

module.exports = HashTable;
