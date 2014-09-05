/**
 * Created by angel on 4/09/14.
 */
var chai = chai || require('chai');
expect = chai.expect;

describe('#end',function(){
    var sb;

    beforeEach(function(){
        sb = new StringBuilder();
    });

    describe('should cancel the current or last effect from wrap, prefix or suffix', function(){
        it('should cancel the effect from wrap method', function(){
            sb.cat('hi').wrap(' * ',' * ').cat('angel').end().cat(';');
            expect(sb.string()).to.equal('hi * angel * ;');
        });
    });
});