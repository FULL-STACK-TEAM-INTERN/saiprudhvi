function addNumber(firstNumber:number,secondNumber:number):string{//outer function
    var name:string="ADDITION OF TWO NUMBERS: ";
       
    function sum(){//inner function
        return name+(firstNumber+secondNumber);
    }

    return sum();

}

var output = addNumber(50,50);
console.log(output);
