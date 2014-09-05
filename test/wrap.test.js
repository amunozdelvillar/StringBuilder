/**
 * Created by angel on 4/09/14.
 */
var chai = chai || require('chai.js');
expect = chai.expect;

describe('.wrap method', function(){
    var sb;
    beforeEach(function(){
        sb = new StringBuilder();
    });

    describe('should add a prefix and suffix to the following StringBuilder methods', function(){
        it('should add a prefix', function(){
            sb.cat('<ul>').wrap('<li>','').cat('Angel').cat('</ul>');
            expect(sb.string()).to.equal('<ul><li>Angel<li></ul>');
        });

        it('should add a suffix', function(){
            sb.cat('<ul>').wrap('','</li>').cat('Angel').cat('</ul>');
            expect(sb.string()).to.equal('<ul>Angel</li></ul></li>');
        });

        it('should add a prefix and suffix', function(){
            sb.wrap('<li>', ['</li>']).cat('list item');
            expect(sb.string()).to.equal('<li>list item</li>');
            sb.wrap('-',['*','-']).cat('angel');
            expect(sb.string()).to.equal('<li>list item</li>-angel*-');
        });
    });

    describe('should be able to chain with other StringBuilder methods', function(){
        it('should return an instance of StringBuilder', function(){
            expect(sb.wrap('herro')).to.be.an.instanceOf(StringBuilder);
        });
    });
});