var student: string ="Sai Prudhvi";//global

console.log(`student1: ${student}`);

function  listStudents(){
   console.log(`student2: ${student}`);
    console.log(`student3: ${student}`);
    function name(){
        var student:string ="Hari";
        console.log(`student4: ${student}`);
        console.log(`student5: ${student}`);

    }
    return name();
}
listStudents();
console.log(`student6: ${student}`);