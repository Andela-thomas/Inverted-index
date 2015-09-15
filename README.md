# inverted-index

#### Implementation of the inverted index
  This impementation uses concept of the hashtable data structure to create terms and there references
#### What it does
  Inverted index  is designed to allow very fast full-text searches. 
  An inverted index consists of a list of all the unique words that appear in any document, and for each word, a list of the documents in which it appears
#### How to use
  1. Include `invertedIndex.js` into your html file
  2. Create a new file or you can use the same ` invertedIndex.js` 
  3. Create an instance of our *hashtable* by using the `new ` keyword
      ``` var hash = new Hashtable()```
  4. Now you can acces the HashTable functions by using the dot operator.

#### Methods

* Adding files into the hashtble ` setItem()` 

    This method can be used to add indexes into our hastable, assuming we want to add the term ` mango` found in object of index `0`

    ```javascript
      hash.setItem('mango', 0); 
      // will create an object
        items {
          mango : 0 
        } 
    ```

*  Fetching  indices form the hashtbale ` getItem()`

    This method can be used to fetch the index of the term, using our earlier example, if we want to find where mango is located in our file, we query the hastbale as follows
    ``` javasript
      hash.getItem('mango')
      // will return => 0 
    ```
* Checking for existance of a ter on the hashtable  ` hasItem()`

    This method can used to to check if the term exists or not. it will return ` true` or `false`
    ``` javascript
        hash.hasItem('mango');
        // will return => true
     ```   
* Filtering the text` getKeyWords()` 

   This method can be used used to filter the text to remove conjuctions and other irrelevant words," can be modified to your specification ". 
    ``` javascript
      var text =  "we are in the ocean of love, filtered"; 
        text = text.split(' ');
        filtered = hash.getKeyWords(text);
      // will return => ['ocean','love'] 

    ```
* Creating and getting the indices ` createIndex() ` and `getIndex()`

  This methods can be used to create indices and get the indices respectively, but they have to be customized to fit one's application, for instance we used ours in a json file of Books, so feel free to doctor and play with it to  fit your application

#### The project is bound to change to include more functionality, feel free to contribute and critize.
# Thank you All.




  
