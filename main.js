let carts = document.querySelectorAll('.mall');
let plus = document.querySelectorAll('.nombrePiece .plus');
let spanPlus = document.querySelectorAll('.nombrePiece h3');
let spanTotal = document.querySelector('.total span')

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

// function finalTotal () {
//     let totalSide = localStorage.getItem('totalCost');
//     totalSide = parseInt(totalSide);
//     spanTotal.textContent =   '$' + totalSide ;
// }

// finalTotal();


// ----- side bare --------- //


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
       intfinal () ;
    })
}


function intfinal () {
    for (let i = 0 ; i < 1 ; i++){
        spanTotal.textContent = '$' + ( (parseInt(spanPlus[i].innerHTML) * 1200) + (parseInt(spanPlus[i+1].innerHTML) * 1200) + (parseInt(spanPlus[i+2].innerHTML) * 1200))
    }
}

// ------------- remove ------------------//

let trash = document.querySelectorAll('.heart-trash');
let divHide = document.querySelectorAll('.prodact-icon');


for (let i = 0 ; i<trash.length ; i++){
trash[i].addEventListener('click' , ()=> {
    console.log('click trash');
    divHide[i].classList.add('hide');
} )
}




let minus = document.querySelectorAll('.nombrePiece .minus');
let spanMinus = document.querySelectorAll('.nombrePiece h3');
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
        intfinal() ;
    })
}

// function int (spanPlus[]) {
//       spanPlus = parseInt(spanPlus.innerHTML);
// }

// for (let i = 0 ; i < spanPlus.length ; i++){
//    int (spanPlus[i]);
// }





function antiRefresh () {
    let storageCard = localStorage.getItem('cartNumbers') ;
    storageCard = parseInt(storageCard) ;
    if (storageCard){
         document.querySelector('.bismiLah2 #number').textContent = storageCard ;
     }
 }

antiRefresh();


// let shopping = document.querySelector('#shoppingcart')
// let sidehide = document.querySelector('.side')
// shopping.addEventListener('click' , () => {
//     console.log('click click');
//     sidehide.classList.remove('hide');
// })

let shopping = document.querySelector('#shoppingcart')
let sidehide = document.querySelector('.side')

shopping.addEventListener('click' , () => {
    sidehide.classList.toggle ("new");
})



