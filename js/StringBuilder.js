/**
 * Created by angel on 1/09/14.
 */
(function(exports){
    var StringBuilder = function(){
        this.buffer = [];
        this.prefx = '';
        this.suffx = '';
    };

    function isArray(object){
        return typeof Object.prototype.toString.call( object ) === '[object Array]';
    }

    StringBuilder.prototype.cat = function(){
        var args = Array.prototype.slice.call(arguments);

        for(var i = 0; i < args.length; i++){
            if(typeof args[i] === 'function'){
                this.cat(args[i]());
            } else if(isArray(args[i])) {
                this.cat.apply(this,args[i]);
            } else {
                this.buffer.push(this.prefx + args[i] + this.suffx);
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
        this.prefx = (typeof prefix === 'object') ? prefix.join([separator = '']) : prefix;
        this.suffx = (typeof suffix === 'object') ? suffix.join([separator = '']) : suffix;
        return this;
    };

    StringBuilder.prototype.end = function(deep){
        this.prefx = '';
        this.suffx = '';
        return this;
    };

    StringBuilder.prototype.prefix = function(){
        var args = Array.prototype.slice.call(arguments);
        this.prefx = (typeof args === 'object') ? args.join([separator = '']) : '';
        return this;
    };

    StringBuilder.prototype.suffix = function(){
        var args = Array.prototype.slice.call(arguments);
        this.suffx = (typeof args === 'object') ? args.join([separator = '']) : '';
        return this;
    };

    StringBuilder.prototype.each = function(args, callback){
        for(var i = 0; i < args.length; i++){
            callback.call(this, args[i], i , args);
        }
        return this;
    };

    exports.StringBuilder = StringBuilder;
})(this);