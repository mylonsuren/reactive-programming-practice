

var fn = Rx.Observable.create(function (observer) {
    console.log('Test');
    observer.next(42);
})

fn.subscribe(function(x){
    console.log(x);
})

fn.subscribe(function(y) {
    console.log(y);
})
