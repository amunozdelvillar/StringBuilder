/**
 * Created by angel on 28/08/14.
 */
var chai = chai || require("chai");
expect = chai.expect;
describe('suite test', function(){
    it('should add two numbers', function(){
        expect(4).to.equal(4);
    });

    it('should subtract two numbers', function(){
        expect(4-2).to.equal(2);
    });
});