describe('Inverted Index', function() {
    // checking for the data
    describe('Read Book Data', function() {
        it('Books object should not be empty', function() {
            var hash = new HashTable();
            hash.readFile();
            expect(Books.length).not.toBe(0);
        });
    });

    describe('Populate Index', function() {
        var terms = hash.getKeys();
        it('Should Populate the indexes', function() {
            expect(terms[0]).toEqual('alice');
        });
        it('Should Populate the indexes', function() {
            expect(terms[3]).toEqual('rabbit');
        });
        it('Should Populate the indexes', function() {
            expect(terms[6]).toEqual('world');
        });
        it('Should Populate the indexes', function() {
            expect(terms[8]).toEqual('imagination');
        });
        it('Should Populate the indexes', function() {
            expect(terms[10]).toEqual('rings');
        });
        it('Should Populate the indexes', function() {
            expect(terms[12]).toEqual('ring');
        });

    });
    describe('Index Maping', function() {
        it('index should map the correct object', function() {
            expect(hash.getItem('alice')).toEqual(['0']);
        });
        it('index should map the correct object', function() {
            expect(hash.getItem('rabbit')).toEqual(['0']);
        });
        it('index should map the correct object', function() {
            expect(hash.getItem('kenya')).toEqual(undefined);
        });
        it('index should map the correct object', function() {
            expect(hash.getItem('hole')).toEqual(['0']);
        });
        it('index should map the correct object', function() {
            expect(hash.getItem('world')).toEqual(['0']);
        });
        it('index should map the correct object', function() {
            expect(hash.getItem('mosque')).toEqual(undefined);
        });
        it('index should map the correct object', function() {
            expect(hash.getItem('destroy')).toEqual(['1']);
        });

    });

});
