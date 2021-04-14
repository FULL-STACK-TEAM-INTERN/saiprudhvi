"use strict";

    let toKnowPitch = new Promise((resolve,reject)=>{
        let ready=true;
        if(ready){
            resolve('Pitch is ready to play');
        }
        else{
            reject('Pitch is not ready to play');
        }

    });
    toKnowPitch.then((fromResolve)=>{
        console.log('Status: '+fromResolve);

    }).catch((fromReject)=>{
        console.log('Status: '+fromReject);

    });
