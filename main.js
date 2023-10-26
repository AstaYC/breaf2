let carts = document.querySelectorAll('.mall');
var total = document.querySelector('.total span');

let products = [

    {
        name: 'Silver Screen',
        tag : 'silverscreen',
        price : 1200 ,
        inCart : 0 ,
    },
    {
        name : 'Keyboard' ,
        tag : 'keyboard',
        price : 1200 ,
        inCart : 0 ,
    },
    {
        name : 'Mouse',
        tag : 'mouse',
        price : 1200 ,
        inCart : 0 ,
    },
]


function cartsNumbers( product) {
    console.log ('this is the prodact clicked : ', product);
    let storageCard = localStorage.getItem('cartNumbers') ;
    storageCard = parseInt(storageCard);
    
    if ( storageCard ){
        localStorage.setItem('cartNumbers' , storageCard + 1);
        document.querySelector('.bismiLah2 #number').textContent = storageCard + 1 ;
    }
    else {
        localStorage.setItem('cartNumbers' , 1) ; 
        document.querySelector('.bismiLah2 #number').textContent = 1 ;
    }
    console.log ( typeof storageCard);

    setStorage(product);
} 

function setStorage(product) {
    let cartItem =  localStorage.getItem('productInCart');
    cartItem = JSON.parse(cartItem);

    if (cartItem != null){

            product.inCart += 1;
            cartItem = {
                [product.tag] : product 
            }
    }
    else {
         product.inCart = 1 ;
         cartItem = {
           [product.tag] : product
        }
    }

    localStorage.setItem('productInCart', JSON.stringify(cartItem))
}

function totalCost ( product ) {
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }
    total.textContent = cartCost ;
}


for (let i = 0 ; i < carts.length ; i++){
    carts[i].addEventListener('click' , () => {
    cartsNumbers(products[i]) ;
    totalCost(products[i])
    })

}

// function antiRefresh () {
//     let storageCard = localStorage.getItem('cartNumbers') ; 
//     if (storageCard){
//         document.querySelector('.bismiLah2 #number').textContent = storageCard ;
//     }
// }

// antiRefresh();

// ----- side bare --------- //

let plus = document.querySelectorAll('.nombrePiece .plus');
let spanPlus = document.querySelectorAll('.nombrePiece h3')
function add (spanPlus) {
    spanPlus = parseInt(spanPlus) ;
    spanPlus ++ ;
    console.log('mouse clicked in plus');
}


for (let i = 0 ; i < plus.length ; i++){
    plus[i].addEventListener('click' , () => {
     add(spanPlus[i]);
    })
}