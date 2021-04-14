interface UserFunc {
    (name : string, subYears: number) : void;
    
    }
    
    let myUser : UserFunc;
    myUser = function(name, subYears) {
        console.log(name);
        console.log(subYears);
    }
    
    myUser('Prime', 2);