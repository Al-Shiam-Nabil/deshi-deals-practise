function getId(id) {
    return document.getElementById(id);
}

//DOM traversal method

const addToCartBtn = document.getElementsByClassName("add-to-cart-btn");

for (const addBtn of addToCartBtn) {
    addBtn.addEventListener("click", function () {
        //   console.log(addBtn.parentNode.parentNode.parentNode);
        // console.log(addBtn.parentElement.parentElement.parentElement);

        const btnParent = addBtn.parentNode.parentNode.parentNode;
        // get product data
        const productImage = btnParent.children[0].children[0].src;
        const productName = btnParent.children[1].children[0].innerText;
        const productPrice = Number(
            btnParent.children[1].children[1].children[0].innerText
        );

        // get purches data
        const totalAmount = Number(getId("total-amount").innerText);
        const totalProduct = Number(getId("total-product").innerText);
        const totalPay = Number(getId("total-pay").innerText);

        // get add cart container
        const shopingCartContainer = getId("shoping-cart-container");


        //create a new div
        const newDiv = document.createElement("div");

        // create new card
        newDiv.innerHTML = `
<section class="flex justify-between items-center px-4 py-2.5 bg-main-bg rounded-xl">
                                <img src="${productImage}" alt="image"
                                    class="w-[100px] h-[100px] object-contain" />
                                <div class="">
                                    <h3 class="text-lg font-medium">${productName}</h3>
                                    <p class="text-gray font-medium">${productPrice}</p>
                                </div>
                            </section>

`;

        // set add cart container
        shopingCartContainer.appendChild(newDiv);

        // set product price
        const currentTotalPrice = productPrice + totalAmount;
        getId("total-amount").innerText = currentTotalPrice.toFixed(2);
        getId("total-product").innerText = totalProduct + 1;
        getId("total-pay").innerText = currentTotalPrice.toFixed(2);
    });
}

// clear button functionality
getId('clear-btn').addEventListener('click', function () {
    getId("shoping-cart-container").innerHTML = '';
    getId("total-amount").innerText = '0';
    getId("total-product").innerText = '0';
    getId("total-pay").innerText = '0';
})

//traditional method
/*
//add to cart btn click
getId('add-to-cart-btn').addEventListener('click',function(){
    // get product data
    const productName=getId('product-name').innerText;
    const productPrice=Number(getId('product-price').innerText);
    const productImage=getId('product-image').src;
    // console.log(productImage)

    // get purches data
    const totalPrice=Number(getId('total-amount').innerText);
    const newTotalPrice=(totalPrice+productPrice).toFixed(2);

    // get shoping cart
    const shopingCartContainer=getId('shoping-cart-container');
    console.log(shopingCartContainer)

    // create cart div
    const cardDiv=document.createElement('div');

    // set shoping cart
   cardDiv.innerHTML=`
      <section class="flex justify-between items-center px-4 py-2.5 bg-main-bg rounded-xl">
                                <img src="${productImage}"
                                    class="w-[100px] h-[100px] object-contain" />
                                <div class="">
                                    <h3 class="text-lg font-medium">${productName}</h3>
                                    <p class="text-gray font-medium">${productPrice}</p>
                                </div>
                            </section>
    `

    shopingCartContainer.appendChild(cardDiv)

    // set purches price
    getId('total-amount').innerText=newTotalPrice;

})
*/

// function myFunc(){
//     alert('completed');
// }
// // document.getElementById('cart-btn').addEventListener('click',myFunc);

// // document.getElementById('input-field').addEventListener('blur',function(){
// //     console.log('focused')
// // })

// const titles=document.getElementsByClassName('card-title');

// console.log(titles);

// function capital(str){
// return str.replaceAll(' ','').toUpperCase();
// }

// for(const title of titles){
//     // title.innerText='my name';
//     // title.style.color='red';

//     // title.innerHTML=`<span class="text-red-400">Ready Product</span>`;
//     // title.innerHTML=`${capital(title.innerText)}`

//     // title.classList.add('hidden')
// }

// const images=document.getElementsByTagName('img')
// console.log(images)

// for(const image of images){
//     console.log(image.src);
//     // image.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT9487ScRwBgh_PwstxokQWbGz-3YzGjGGjByEg2xWf6NRNEeHSl6tCU9wku7BHH5GiYG')

// //     image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT9487ScRwBgh_PwstxokQWbGz-3YzGjGGjByEg2xWf6NRNEeHSl6tCU9wku7BHH5GiYG'
// //    image.removeAttribute('src')

//   image.addEventListener('mouseenter',function(){
//     image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT9487ScRwBgh_PwstxokQWbGz-3YzGjGGjByEg2xWf6NRNEeHSl6tCU9wku7BHH5GiYG'
//   })

// }
