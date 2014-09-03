/**
 * Created by angel on 3/09/14.
 */
var chai = chai || require('chai');
expect = chai.expect;
describe('.rep method', function(){
    var sb;

    beforeEach(function(){
        sb = new StringBuilder();
    });

    describe('should concat the string param given the number of times', function(){
        it('should concat the same string, the number of times as the last argument', function(){
            sb.cat('Mom, can you').rep(' please', 10).cat(' buy me an ice cream');
            expect(sb.buffer[0]).to.equal('Mom, can you');
            expect(sb.buffer[1]).to.equal(' please');
            expect(sb.buffer[2]).to.equal(' please');
            expect(sb.buffer[3]).to.equal(' please');
            expect(sb.buffer[4]).to.equal(' please');
            expect(sb.buffer[5]).to.equal(' please');
            expect(sb.buffer[6]).to.equal(' please');
            expect(sb.buffer[7]).to.equal(' please');
            expect(sb.buffer[8]).to.equal(' please');
            expect(sb.buffer[9]).to.equal(' please');
            expect(sb.buffer[10]).to.equal(' please');
            expect(sb.buffer[11]).to.equal(' buy me an ice cream');
            expect(sb.buffer).to.have.length(12);
        });
    });


    describe('should be able to chain to other object methods', function(){
        it('should implement cascade pattern', function(){
            expect(sb.rep('hello',10)).to.be.an.instanceOf(StringBuilder);
        });
    });


});