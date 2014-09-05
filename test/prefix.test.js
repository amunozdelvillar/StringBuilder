/**
 * Created by angel on 5/09/14.
 */
var chai = chai || require('chai');
expect = chai.expect;
describe('#prefix', function(){
    var sb;

    beforeEach(function(){
        sb = new StringBuilder();
    });

    describe('should prefix params to the following SB methods', function(){
        it('should add prefix to cat method',function(){
            sb.cat('Todo list: \n')
                .prefix('-')
                .cat('first thing\n')
                .cat('second thing\n')
                .cat('last thing\n');
            expect(sb.string()).to.equal('Todo list: \n' +
                '-first thing\n' +
                '-second thing\n' +
                '-last thing\n');
        });
    });

    describe('should be able to chain with other SB methods', function(){
        it('should return an instance of StringBuilder', function(){
            expect(sb.prefix('hello','world')).to.be.an.instanceOf(StringBuilder);
        });
    });
});