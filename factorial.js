function factorial(number){
    let result = number
    for(let i = number-1; i>=1; i--){
        result = result * i
    }
    console.log(result)
}

factorial(5)