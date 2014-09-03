/**
 * Created by angel on 1/09/14.
 */

var chai = chai || require("chai");
expect = chai.expect;
describe('.cat method', function() {
    var sb;

    beforeEach(function(){
        sb = new StringBuilder();
    });

    describe('should receive Strings as a parameter', function(){
        it('should concat a single String value', function(){
            sb.cat('hello');
            expect(sb.buffer[0]).to.equal('hello');
            sb.cat('world');
            expect(sb.buffer).to.have.length(2);
        });

        it('should concat multiple String values from N parameters',function(){
            sb.cat('hello', 'world','!!!');
            expect(sb.buffer[0]).to.equal('hello');
            expect(sb.buffer[1]).to.equal('world');
            expect(sb.buffer[2]).to.equal('!!!');
            expect(sb.buffer).to.have.length(3);
            sb.cat('yeah!');
            expect(sb.buffer).to.have.length(4);
        });
    });

    describe('should be able to call cat as a chain,', function(){
        it('should use the cascade pattern wisely',function(){
            sb.cat('hello',' ').cat('world');
            expect(sb.buffer[0]).to.equal('hello');
            expect(sb.buffer[1]).to.equal(' ');
            expect(sb.buffer[2]).to.equal('world');
            expect(sb.buffer).to.have.length(3);
            expect(sb.cat()).to.be.an.instanceOf(StringBuilder);
        });
    });

    describe('should be able to receive Functions as parameters', function(){
        it('should receive a function objects', function(){
            sb.cat(function(){ return 'hello'}, function(){ return 'world'});
            expect(sb.buffer[0]).to.equal('hello');
            expect(sb.buffer[1]).to.equal('world');
            expect(sb.buffer).to.have.length(2);
        });

        it('should receive function objects along Strings', function(){
            sb.cat('this is the first',' line','\n')
            .cat('here is the second')
            .cat('and then', 'the third')
            .cat('now', function(){ return ' we can make some calcs'; }, ' here');
            expect(sb.buffer[0]).to.equal('this is the first');
            expect(sb.buffer[1]).to.equal(' line');
            expect(sb.buffer[2]).to.equal('\n');
            expect(sb.buffer[3]).to.equal('here is the second');
            expect(sb.buffer[4]).to.equal('and then');
            expect(sb.buffer[5]).to.equal('the third');
            expect(sb.buffer[6]).to.equal('now');
            expect(sb.buffer[7]).to.equal(' we can make some calcs');
            expect(sb.buffer[8]).to.equal(' here');
            expect(sb.buffer).to.have.length(9);
        });
    });

    describe('should be able to receive arrays as parameters',function(){
        it('should receive an array object', function(){
            sb.cat(['hello']);
            expect(sb.buffer[0]).to.equal('hello');
            sb.cat(['world']);
            expect(sb.buffer[1]).to.equal('world');
            sb.cat(['!!!']);
            expect(sb.buffer[2]).to.equal('!!!');
            expect(sb.buffer).to.have.length(3);

        });

        it('should be able to receive arrays along with functions as parameters', function(){
            sb.cat('this', [' is', function(){ return [' a', ' function that',
            ' returns an array']; }], ' ;)');
        });
    });
});