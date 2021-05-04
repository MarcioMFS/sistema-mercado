let supermarketItems = [
    {
    cartegory: "foods",
    items:[ 
    {
    name: "milk",
    quantity: 6,
    price: 3
}
, {
    name: "potato",
    quantity: 30,
    price: 1
}
,{
    name: "rice",
    quantity: 3,
    price: 5
}
,{
        name: "bean",
        quantity: 20,
        price: 7
     }
  ]
},

{
    cartegory: "products",
    items:[ 
        {
        name: "cleaner",
        quantity: 6,
        price: 3
    }
    , {
        name: "boots",
        quantity: 30,
        price: 1
    }
    ,{
        name: "cap",
        quantity: 10,
        price: 5
    }
    ,{
            name: "shirts",
            quantity: 20,
            price: 7
         }
      ]
}


,]


//entrega de produtos

function deliveryItem(cartegory,item,quantity,price) {
    for(let founded of supermarketItems){
        if(founded.cartegory == cartegory){
            found = founded.items
            found.push({name: item, quantity: quantity, price: price})

            indexItem = found[found.length - 1]
    
    console.log(`The product has been added \n name: ${indexItem.name} \n quantity: ${indexItem.quantity} \n price: ${indexItem.price}`)
  }}

  console.log("------------------------------")
}

deliveryItem("foods","lasanha",10,1)


// compra de produtos

function buyItems(item, quantity){

    try{
    for(let product of supermarketItems){
        for(let products of product.items){
        if(products.name == item){

            if(products.quantity <= 0 || products.quantity < quantity){
                throw new Error("This product don't have sufficient items")
            }            

            console.log(`The item selected is: ${products.name} \n price of ${products.name} is: ${products.price}$ \n quantity selected is: ${quantity} \n total price is: ${quantity * products.price}$`)
        
            products.quantity -= quantity
        
        }

    }
    console.log("------------------------------")


}}
    

    catch(e){
        console.log(e)
    }
}


buyItems("lasanha",3)

// verificação de itens

function verifyItems(item){
        for(let found of supermarketItems){
        for(let items of found.items){
            if(items.name == item){
                console.log(`product: ${items.name} \n quantity: ${items.quantity} \n price: ${items.price}$`)
            }
      }
    }
  }


verifyItems("lasanha")


