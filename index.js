function receivesAFunction(cb){
    return cb();
}
receivesAFunction(function () { return 1 + 2; });

function returnsANamedFunction (){
    return function returned(){
        console.log('I have returned');
    }
}
returnsANamedFunction()

function returnsAnAnonymousFunction () {
    return function(){
        console.log('I\'m anonymous or is that anynymonous, anbiddimous, anonimous, well whatever');
    };
}
returnsAnAnonymousFunction()