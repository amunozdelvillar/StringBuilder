/**
 * Created by angel on 1/09/14.
 */
(function(exports){
    var StringBuilder = function(){
        this.buffer = [];
        this.prefix = '';
        this.suffix = '';
    };

    StringBuilder.prototype.cat = function(){
        var args = Array.prototype.slice.call(arguments);
        for(var i = 0; i < args.length; i++){
            if(typeof args[i] === 'function'){
                this.cat(args[i]());
            } else if( Object.prototype.toString.call(args[i]) === '[object Array]') {
                this.cat.apply(this,args[i]);
            } else {
                this.buffer.push(this.prefix + args[i] + this.suffix);
            }
        }
        return this;
    };

    StringBuilder.prototype.rep = function(){
        var args   = Array.prototype.slice.call(arguments, 0, -1),
            repeat = arguments[arguments.length - 1];
        for(var i = 0; i < repeat; i++){
            this.cat(args[0]);
        }
        return this;
    };

    StringBuilder.prototype.catIf = function(){
        var args  = Array.prototype.slice.call(arguments, 0, -1),
            concatenate = arguments[arguments.length - 1];
        for(var i = 0; i < args.length; i++){
            if(concatenate){
                this.cat(args[i]);
            }
        }
      return this;
    };

    StringBuilder.prototype.string = function(){
        var result = '';
        for(var i = 0; i < this.buffer.length; i++){
            result += this.buffer[i];
        }
        return result;
    };

    StringBuilder.prototype.wrap = function(prefix, suffix){
        this.prefix = prefix;
        this.suffix = suffix;
        return this;
    };

    exports.StringBuilder = StringBuilder;
})(this);