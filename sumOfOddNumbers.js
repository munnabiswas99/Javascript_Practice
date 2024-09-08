let sum = 0;
function sumOfEven(arr){
    for(let i = 0; i<arr.length; i++){
        if((arr[i]%2) == 0){
            sum = sum+arr[i]
        }

    }
    console.log(sum)
}

const numbers = [5,10,15,20,30]
sumOfEven(numbers)