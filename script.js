const testRegex = () =>{
    testFirst();
    testLast();
}

const testFirst = () =>{
    var firstName = document.getElementById("firstname").value;
    var regex = /^[A-Z][a-z0-9_-]{1,19}$/;
    test("firstName",firstName,regex);
}
const testLast= () =>{
    var lastName = document.getElementById("lastname").value;
    var regex = /^[A-Z][a-z0-9_-]{1,19}$/;
    test("lastName",lastName,regex);
}
const test =(item,input,regex) =>{
    if(input.match(regex)){
        console.log(input +" Yay your imputs where all correct");
    }else{
        console.log(" Sorry your inputs where incorrect");
    }
}
