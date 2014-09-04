/**
 * Created by angel on 3/09/14.
 */
var chai = chai || require('chai.js');
expect = chai.expect;

describe('.string', function(){
    var sb;
    beforeEach(function(){
        sb = new StringBuilder();
    });

    describe('should join the buffer into a single string', function(){
        it('should return a string', function(){
            expect(sb.string()).to.be.a.string;
        });

        it('should concat all elements from buffer to output string', function(){
            sb.cat('hello',' world','!');
            expect(sb.string()).to.equal('hello world!');
            sb.rep(' hi',3);
            expect(sb.string()).to.equal('hello world! hi hi hi');
            sb.catIf(' bye bye', true);
            expect(sb.string()).to.equal('hello world! hi hi hi bye bye');
        });
    });
});