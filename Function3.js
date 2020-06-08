let array = [1, 2, 5, 8, 13]

function arrayImprover(){
    let result = array.reduce((sum, current) => sum + current, 0);
    console.log(result)
}

arrayImprover()