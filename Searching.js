const products = [
    {id:1, name: "One plus phone", price: 400000},
    {id:2, name: "Samsung phone", price: 280000},
    {id:2, name: "Apple Phone", price: 150000},
    {id:3, name: "HP laptop", price: 700000},
]

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched
}

const result = matchProducts(products,"Phone")
console.log(result)