function receivesAFunction(callback){
    console.log("receives a function");
    callback();
}


function returnsANamedFunction(){
    return function (sayHello, name){
        console.log(`Hello ${name}`);
        sayHello(Peter);
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous function");
    }
}



