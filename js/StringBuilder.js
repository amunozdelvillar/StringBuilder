/**
 * Created by angel on 1/09/14.
 */
(function(exports){
    var StringBuilder;
    StringBuilder = function(){
        this.buffer = [];
    };

    StringBuilder.prototype.cat = function(){
        var args = Array.prototype.slice.call(arguments);
        for(var i = 0; i < args.length; i++){
            if(typeof args[i] === 'function'){
                this.cat(args[i]());
            } else {
                this.buffer.push(args[i]);
            }

        }
        return this;
    };

    exports.StringBuilder = StringBuilder;
})(this);