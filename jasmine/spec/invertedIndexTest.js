describe('Inverted Index', function() {
    // checking for the data
    describe('Read Book Data', function() {
        it('Book should not be empty', function() {
            var hash = new HashTable();
            hash.readFile();
            expect(Books.length).not.toBe(0);  
        });
    });

    describe('Populate Index', function() {
      
    });

});
