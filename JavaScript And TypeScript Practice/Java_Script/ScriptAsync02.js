"use strict";
var toKnowPitch = new Promise(function (resolve, reject) {
    var ready = true;
    if (ready) {
        resolve('Pitch is ready to play (resolve)');
    }
    else {
        reject('Pitch is not ready to play (reject)');
    }
});

    var roomClean = new Promise(function(x,y){
        var ready= false;
        if(ready){
            x('Clean (resolve)');
        }
        else{
            y('Not Clean (reject)');
        }
    });

toKnowPitch.then(function (fromResolve) {
    console.log('Status: ' + fromResolve);
}).catch(function (fromReject) {
    console.log('Status: ' + fromReject);
});
roomClean.then(function (fromResolve) {
    console.log('Status: ' + fromResolve);
}).catch(function (fromReject) {
    console.log('Status: ' + fromReject);
});
