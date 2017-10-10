var expect = require('chai').expect;
var capitalize = require('../src/server/modules/capitalize');

describe('capitalize module', function() {
    it('should error nicely when passed a non string', function() {
        expect(capitalize).to.throw(TypeError, /expects a string/);
    }); // end it
    it("should return the string 'Ethan' when passed 'ethan'", function() {
        expect(capitalize('ethan')).to.equal('Ethan');
    }); // end it
    it("should return the string 'Hello world' when passed 'hello world'", function() {
        expect(capitalize('hello world')).to.equal('Hello World');
    }); // end it
}); // end outer describe