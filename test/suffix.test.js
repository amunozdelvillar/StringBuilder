/**
 * Created by angel on 5/09/14.
 */
/**
 * Created by angel on 5/09/14.
 */
var chai = chai || require('chai');
expect = chai.expect;
describe('#suffix', function(){
    var sb;

    beforeEach(function(){
        sb = new StringBuilder();
    });

    describe('should suffix params to the following SB methods', function(){
        it('should add suffix to cat method',function(){
            sb.cat('Todo list: \n')
                .suffix('-')
                .cat('first thing to do\n')
                .cat('second thing to do\n')
                .cat('last thing to do\n');
            expect(sb.string()).to.equal('Todo list: \n' +
                'first thing to do\n-' +
                'second thing to do\n-' +
                'last thing to do\n-');
        });
    });

    describe('should be able to chain with other SB methods', function(){
        it('should return an instance of StringBuilder', function(){
            expect(sb.suffix('hello','world')).to.be.an.instanceOf(StringBuilder);
        });
    });
});