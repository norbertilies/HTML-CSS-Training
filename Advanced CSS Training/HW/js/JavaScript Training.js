var aritmetica = function aritmetica() {

    var sum = function(a,b){
        return a+b;
    };

    var multiply = function(a,b){
        return a*b;
    };

    var divide = function(a,b){
        return a/b;
    };

    var reduce = function(a,b){
        return a-b;
    };

    return {
        'suma':sum,
        'produs':multiply,
        'impartire':divide,
        'diferenta':reduce
    }
};

var parent = {
    a: 100
}

var child = Object.getPrototypeOf(  parent);
