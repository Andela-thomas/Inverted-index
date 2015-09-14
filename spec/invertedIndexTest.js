describe('Inverted Index', function() {
  describe('Read Book Data', function() {
    describe("Books should not be empty", function() {
      var hash = new HashTable();
      function wrapRun(done) {
        setTimeout(function() {
          hash.readFile(function(response) {
            var Books = JSON.parse(response)
          })
          done();
        });
      }

      beforeEach(function(done) {
        wrapRun(done);
      });
      it('The Books length should be greater than 0', function() {
        expect(Books.length).not.toBe(0);
      });
    });
  });

  describe('Populate Index', function() {

    describe('Should Populate the index when the JSON file is read', function() {
      function wrapRun(done) {
        setTimeout(function() {
          hash.readFile(function(response) {
            var Books = JSON.parse(response)
          })
          done();
        }, 500);
      }

      beforeEach(function(done) {
        wrapRun(done);
      });
      it('Should return true for Alice', function() {
        expect(hash.hasItem('alice')).toBe(true);
      });
      it('Should return true for rabbit ', function() {
        expect(hash.hasItem('rabbit')).toBe(true);
      });
      it('Should return true for world ', function() {
        expect(hash.hasItem('world')).toBe(true);
      });
      it('Should return false for cow ', function() {
        expect(hash.hasItem('cow')).toBe(false);
      });
      it('Should return false for sin ', function() {
        expect(hash.hasItem('sin')).toBe(false);
      });
      it('Should return false for engine ', function() {
        expect(hash.hasItem('engine')).toBe(false);
      });

    });
  });

  describe('Index Maping', function() {
    describe('Index should map the correct Object', function() {
      it('should return ["0"] for alice', function() {
        expect(hash.getItem("alice")).toEqual(['0']);
      });
      it('should return ["0"] for Alice', function() {
        expect(hash.getItem('Alice'.toLowerCase())).toEqual(['0']);
      });
      it('should return "Term not found" for kenya', function() {
        expect(hash.getItem('kenya')).toEqual("Term not found");
      });
      it('should return "Term not found" for mosque', function() {
        expect(hash.getItem('mosque')).toEqual("Term not found");
      });
      it('should return ["1"] for destroy', function() {
        expect(hash.getItem('destroy')).toEqual(['1']);
      });
      it('should return ["1"] Destroy', function() {
        expect(hash.getItem('Destroy'.toLowerCase())).toEqual(['1']);
      });
    });
  });

  describe('Search Index', function() {
    describe('Check if search key  has been provided', function() {
      it("Prompt for search key if it has not been provided", function() {
        expect(hash.getIndex()).toEqual('Please provide a search key');
      });
    });
    describe('Should return the correct indices for the object', function() {
      it("should return ['1'] for destroy", function() {
        expect(hash.getIndex('destroy')).toEqual(['1']);
      });
      it("should return ['1'],['0'] for destroy hole", function() {
        expect(hash.getIndex('destroy hole')).toEqual(['1'], ['0']);
      });
      it("should return 'No results found ' for mark masai", function() {
        expect(hash.getIndex('mark masai')).toEqual("No results found");
      });
      it("should return ['1'],['1'] for ring man", function() {
        expect(hash.getIndex('ring man')).toEqual(['1'], ['1']);
      });
      it("should return ['0'],['1'] for rabbit hobbit", function() {
        expect(hash.getIndex('rabbit hobbit')).toEqual(['0'], ['1']);
      });
    });
  });
});
