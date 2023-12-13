function receivesAFunction(callback){
    console.log("receives a function");
    callback();
}


function returnsANamedFunction(){
    return function (sayHello){
        console.log('Hello');
        sayHello();
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous function");
    }
}



