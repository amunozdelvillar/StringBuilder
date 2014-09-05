/**
 * Created by angel on 5/09/14.
 */
var chai = chai || require('chai');
expect = chai.expect;

describe('#each', function(){
    var sb,
        people;

    beforeEach(function(){
        sb = new StringBuilder();
        people = [
            { name: 'pedro', sex: 'm', age: 30 },
            { name: 'leticia', sex: 'f', age: 21 },
            { name: 'pablo', sex: 'm', age: 20 }
        ];
    });

    describe('should iterate over an array of values the execute callback', function(){
        it('should iterate over each value of the array', function(){
            sb.each(people, function(value, index, thePeople){
                this.cat(value.name);
            });
            expect(sb.string()).to.equal('pedroleticiapablo');
            sb.each(people,function(value, index, thePeople){
               this.cat(index);
            });
            expect(sb.string()).to.equal('pedroleticiapablo012');
        });

        it('should not break the cascade or chain', function(){
            expect(sb.each('d', function(){})).to.be.an.instanceOf(StringBuilder);
        });
    });
});