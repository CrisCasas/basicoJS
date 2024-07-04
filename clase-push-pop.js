//Methods that modify the original array(mutability)

//push()

const countries=['USA','Canada','UK']

const newCountries = countries.push('Germany','Australia') //devuelve número de elementos

console.log(countries)
console.log(newCountries)

//pop()

const removedCountry=countries.pop()

console.log(countries)
console.log(removedCountry)

// Exercise: Managing a Stack

let bookCart = []

const ADD_TO_CART_ACTION= 'addtoCart'
const REMOVE_FROM_CART_ACTION= 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart(){
    console.log('Current Cart of Books',bookCart)
}


function performCartActions(action,newBook){

    switch(action){
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;
        case REMOVE_FROM_CART_ACTION:
            if(bookCart.length === 0){
                console.log('The cart is empty. No books to remove.')
            }else{
                const removeBook=bookCart.pop()
                console.log(`Removed book from the cart: ${removeBook}`)
            }
            break;
        case VIEW_CART_ACTION:
            viewCart();
            break;
        default:
            console.log('Invalid action. Please choose a valid option.')
            break;
    }
}

performCartActions(ADD_TO_CART_ACTION,'Ángeles y Demonios');
performCartActions(VIEW_CART_ACTION);
performCartActions(ADD_TO_CART_ACTION,'El código Da Vinci');
performCartActions(VIEW_CART_ACTION);
performCartActions(REMOVE_FROM_CART_ACTION);
performCartActions(VIEW_CART_ACTION);

