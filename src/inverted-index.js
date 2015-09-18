// Thomas Nyambati
// Andela ltd
// thomas.nyambati@andela.com
// Inverted Index
// JavaSript Cirriculum check point 1

var HashTable;
(function() {
  'use strict';
  HashTable = function() {

    // Defining the hastable class
    // This table will have the property length
    // An an object of items to hold the the indexes
    this.length = 0;
    this.items = {};
    // Method hasItem
    // finds the key if available
    this.hasItem = function(key) {
      return this.items.hasOwnProperty(key);
      // Return => true || false
    };
  };

  // Method setItem
  // This method will set the items into the hastable,
  // And also ensures that it does not overwrite any key or value.
  // Checks if the hastable has  the key
  // Checks if the value passed is also in the hastable
  // If true push only the index on the file where the term was found
  // If the term is not in the hashtable
  // Create a new term with the file and the index where it was found
  HashTable.prototype.setItem = function(key, index) {
    var object = this.items[key],
      exist = false;

    for (key in object) {
      if (object[key] === index) {
        exist = true;
      }
    }

    if ((this.hasItem(key) && exist === true) === false) {
      if (this.hasItem(key) && this.items[key] !== index) {
        this.items[key].push(index);
      } else {
        this.items[key] = [index];
        this.length++;
      }
    }
  };


  // Method getItem
  // This method return an array of file and indexex of a given term if found
  // And undefined if not found
  // var index = new hastable();
  // index.getItem('mango') => ['fruits',[0]] or => Term not found

  HashTable.prototype.getItem = function(key) {
    return this.hasItem(key) ? this.items[key] : "Term not found";
  };

  // This function receives an array of all words and returns an
  // array of only keywords excluding conjuctions
  // Checks if the garbage has the element in the consjuctions array
  //

  HashTable.prototype.getKeyWords = function(garbage) {
    var conjunctions = ['of', 'the', 'in', 'and', 'an', 'a', 'to', 'into', 'so', ''],
      filtered = [];

    for (var i = 0; i < garbage.length; i++) {
      if (conjunctions.indexOf(garbage[i].toLowerCase()) === -1) {
        filtered.push(garbage[i]);
      }
    }

    return filtered;
  };
  // This function will fetch the terms and there index reference in the hashtable

  HashTable.prototype.getIndex = function() {
    var values = [],
      keys;
    for (keys in this.items) {
      values.push(this.items[keys]);
    }
    return values;
  };

  // This function wil read the Json file
  HashTable.prototype.readFile = function(url, callback) {
    var Xmlhttp = new XMLHttpRequest();
    Xmlhttp.open('GET', url, true);
    Xmlhttp.setRequestHeader("Content-Type", "application/json");

    Xmlhttp.onreadystatechange = function() {
      if (Xmlhttp.readyState === 4 && Xmlhttp.status === 200) {
        var response = Xmlhttp.responseText;
        callback(response);
      }
    };

    Xmlhttp.send(null);
  };

  // This function will populate our hashtable with indexes
  // Combine all the property data into one
  // Filter the data to remove remover special character
  // Filter the data to remove conjuctions such as  => for, as in etc
  // loop through the filtered text to generate index

  HashTable.prototype.createIndex = function(url, done) {
    var self = this;
    this.readFile(url, function(response) {
      self.books = JSON.parse(response);
      console.log(self.books);
      for (var key in self.books) {
        var text = self.books[key].title.concat(self.books[key].text);
        text = text.replace(/[^a-zA-Z ]/g, " ").split(' ');
        text = self.getKeyWords(text);
        for (var i = 0; i < text.length; i++) {
          self.setItem(text[i].toLowerCase(), key);
        }
      }
      done();
    });
  };

  // This function will fetch the indexes from our hashtable
  // Check if the words parameter is empty
  // Return undefined if true
  // Split the words to create an array
  // If one words pass it to the getItem function
  // If not loop through the resultant array and pass each element to the getItem function
  HashTable.prototype.searchIndex = function(args) {
    var searchKeys, indices = [],
      term, key, index;

    if (args !== undefined && typeof args === 'string') {
      args = args.split(' ');
      if (args.length === 1) {
        return this.getItem(args);
      } else {
        searchKeys = args;
      }
    } else if (args !== undefined && typeof args === 'object') {
      searchKeys = args;
    } else {
      return "Please provide a search key";
    }

    for (key in searchKeys) {
      term = searchKeys[key];
      index = this.getItem(term);
      if (index !== "Term not found") {
        for (key in index) {
          indices.push(index[key]);
        }
      } else {
        return "No results found";
      }
      return indices;
    }
  };
})();
/*========================================================================================
END OF THE HASHTABLE
=======================================================================================*/