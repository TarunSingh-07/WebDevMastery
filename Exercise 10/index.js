/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives :
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

console.log("Business Name Generator : ")
console.log("🎉 Get ready for an awesome business name! 🎉");

let adj1 = "Crazy"
let adj2 = "Amazing"
let adj3 = "Fire"

let shopName1 = "Engine"
let shopName2 = "Foods"
let shopName3 = "Garments"

let anotherWord1 = "Bros"
let anotherWord2 = "Limited"
let anotherWord3 = "Hub"

function generateBusinessName() {
    let randomAdj = Math.floor(Math.random() * 3)
    let Adjective
    if (randomAdj === 0){
        Adjective = adj1
    }else if (randomAdj === 1){
        Adjective = adj2
    }else {
        Adjective = adj3
    }

    let randomShopName = Math.floor(Math.random() * 3)
    let ShopName
    if (randomShopName === 0){
        ShopName = shopName1
    }
    else if (randomShopName === 1){
        ShopName = shopName2
    }
    else{
        ShopName = shopName3
    }
    
    let randomAnotherWord = Math.floor(Math.random() * 3)
    let AnotherWord
    if (randomAnotherWord === 0){
        AnotherWord = anotherWord1
    }else if (randomAnotherWord === 1){
        AnotherWord = anotherWord2
    }else {
        AnotherWord = anotherWord3
    }
    
    let businessName = `${Adjective} ${ShopName} ${AnotherWord}`
    console.log(businessName)
}

generateBusinessName()