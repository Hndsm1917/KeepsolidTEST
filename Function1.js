let obj = {
    name: 'John',
    'surname': 'Johnson',
    'age': 20
}

function keyToVarriable1(){ //вариант 1
    let name = obj.name
    console.log(name)
        
    let surname = obj.surname
    console.log(surname)
        
    let age = obj.age
    console.log(age)
    
}

function keyToVarriable2(){   //вариант 2
    let {name, surname, age} = obj

    console.log(name)
    console.log(surname)
    console.log(age)
}

keyToVarriable1()
keyToVarriable2()