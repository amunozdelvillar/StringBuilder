/**
 * Created by angel on 3/09/14.
 */
var chai = chai || require('chai.js');
expect = chai.expect;

describe('concatenate if condition evaluates to true', function(){
    var sb, sex;

    beforeEach(function(){
        sb = new StringBuilder();
        sex = 'f';
    });

    describe('chain methods', function(){
        it('should return an instance of StringBuilder',function(){
           expect(sb.catIf(' pretty',' lady', sex === 'f')).to.be.an.instanceOf(StringBuilder);
        });
    });

    describe('concatenate,', function(){
        it('should push to buffer, if condition is true', function(){
            sb.catIf('hello',' pretty',' lady', sex === 'f');
            expect(sb.buffer).to.deep.equal(['hello',' pretty',' lady']);
            sb.catIf('how',' you',' doing', true);
            expect(sb.buffer).to.deep.equal(['hello',' pretty',' lady','how',' you',' doing']);
        });

        it('should not push to buffer, if condition isn\'t is falsy value', function(){
            sb.catIf('hi', ' there', false);
            expect(sb.buffer).to.be.empty;
            expect(sb.buffer).to.have.length(0);
        });
    });
});