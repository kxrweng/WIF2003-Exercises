coffeeBeanMenu = [
    {
        id : 1,
        name : "Brazil Cerrado",
        price : 42
    },
    {
        id : 2,
        name : "Vanguard Blend",
        price : 42
    },
    {
        id : 3,
        name : "Organic Marcala",
        price : 56
    },
    {
        id : 4,
        name : "Taster Pack Trio",
        price : 69
    }
]
let coffeeBeanMenuScript = ""

coffeeBeanMenu.map((coffeeBean) => {
    coffeeBeanMenuScript += `${coffeeBean.id}: ${coffeeBean.name} (RM${coffeeBean.price} per pack) \n`
})

while(true){
    let idNum = Number(prompt(`Enter Coffee bean ID ( 1-4 ) ( 0 to stop ) \n ${coffeeBeanMenuScript}`))

    if(idNum < 0 || idNum > 4){
        alert(`Coffee Bean ID must be between 1 and 4 or 0 to stop`)
    }

    else if (idNum === 0){
        alert(`The program is stopped.`)
        break
    }
    else {
        let qty = prompt(`Enter number of pack of coffee beans that you want to purchase: `)
        if (qty <= 0){
            alert(`Quantity cannot be less than or equal to 0`)
        }
        else {
            alert(`Total cost for ${qty} pack(s) of coffee is RM${calculateTotal(idNum,qty)}`)
        }
    }
}

function calculateTotal(idNum,qty){
    coffeeBeanWanted = coffeeBeanMenu.find((coffeeBean) => coffeeBean.id === (idNum))
    price = coffeeBeanWanted.price
    return price * qty
}

