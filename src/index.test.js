var expect = require('chai').expect;
var isItThursday = require('./index');

describe('is-it-thursday', function(){
    describe('huh', function() {
        it('should return a good guess', function() {
         expect(isItThursday.huh).to.equal("Probably not...");
        });
    });
});
