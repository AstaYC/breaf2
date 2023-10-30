let carts = document.querySelectorAll('.mall');
let total = document.querySelector('.total span');

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

    localStorage.setItem('productInCart', JSON.stringify(cartItem)) ;
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
    
    let totalValue = parseInt(total.innerHTML) ;
    totalValue = cartCost ;
    

}


for (let i = 0 ; i < carts.length ; i++){
    carts[i].addEventListener('click' , () => {
    cartsNumbers(products[i]) ;
    totalCost(products[i]) ;
    })

}

function antiRefresh () {
    let storageCard = localStorage.getItem('cartNumbers') ; 
    if (storageCard){
         document.querySelector('.bismiLah2 #number').textContent = storageCard ;
     }
 }

antiRefresh();

// ----- side bare --------- //







let plus = document.querySelectorAll('.nombrePiece .plus');
let spanPlus = document.querySelectorAll('.nombrePiece h3')
function add (spanPlus) {
    console.log(spanPlus);
    let quantity = parseInt(spanPlus.innerHTML) ;
    quantity++ ;
    spanPlus.innerHTML = quantity ;
    console.log('mouse clicked in plus');
}


for (let i = 0 ; i < plus.length ; i++){
    plus[i].addEventListener('click' , () => {
       add(spanPlus[i]);
    })
}

let minus = document.querySelectorAll('.nombrePiece .minus');
let spanMinus = document.querySelectorAll('.nombrePiece h3')
function supp (spanMinus) {
    console.log(spanMinus);
    let quantity = parseInt(spanMinus.innerHTML) ;
    quantity-- ;
    spanMinus.innerHTML = quantity ;
    console.log('mouse clicked in minus');
}

for (let i = 0 ; i < minus.length ; i++){
    minus[i].addEventListener('click' , () => {
        supp(spanMinus[i]);
    })
}

function total () {

}