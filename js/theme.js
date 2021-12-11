import {product_arr, categories} from './fetch'

renderProductsOnShop()

function renderProductsOnShop(){ // Render products 
    let products = product_arr, 
        html = "", 
        products_container = document.getElementById('all-products'), 
        product_count = document.getElementsByClassName("product-count")

    products.forEach(product => {
        html += `<div class='col-md-3'>
                    <div class="product-item">
                        <div class="product-img position-relative">
                            <img class="img-fluid" src="${product.image}">
                            <button data-id="${product.id}" class="btn btn-sm w-100 rounded-0 btn-success view-product">View</button>
                        </div>
                        <div class="product-body">
                            <h6>${product.title}</h6>
                            <div class="d-flex justify-content-between">
                                <span data-id="${product.id}" class="price">Ksh: ${product.price}</span>
                                <i class="bi bi-bag cart-icon"></i>
                            </div>
                        </div>                      
                    </div>
                </div>`
    })

    products_container.innerHTML = html
    product_count[0].innerHTML = Object.keys(products).length + " products"
    quickView(products) //pass all products to click function 
    Cart() // run cart function after rendering products
}

function quickView(data){
    let a = document.querySelectorAll("#all-products .view-product"), 
        b = document.getElementById("single-product"), 
        d = document.querySelectorAll(".theme-body")

    a.forEach( link => {
        link.addEventListener('click', openModal, false)
    })

    function openModal(){
        let productid = this.dataset.id, 
            c = ""

        d[0].classList.add("quickview-open");

        // retrieve the specific id details
        data.forEach(data => {
            if(data.id == productid){
                c = `<div class="row align-items-center">
                        <div class="col-md-6">
                            <img src="${data.image}">    
                        </div>
                        <div class="col-md-6">
                            <div class="single-product-meta">
                                <h3>${data.title}</h3>
                                <span class="small">Ksh. ${data.price}</span>
                                <p>${data.description}</p>
                                <button class="btn btn-sm rounded-0 w-100 add-to-cart">ADD TO CART <i class="bi bi-bag"></i> </button>
                                <button class="btn btn-sm rounded-0 w-100 checkout">Buy it now</button>
                            </div>
                        </div>
                    </div>`
                //
            }
        })
        b.innerHTML = c //show product id on panel 
    }
}

function Cart(){
    const i = document.querySelectorAll("#all-products .cart-icon"), 
        cart_count = document.querySelectorAll('.acc-search-cart li span')

    // retrieve cart items 
    const count = JSON.parse(localStorage.getItem('choose-cart'))
    if(count.length > 1){
        cart_count[0].textContent = count.length
    }

    if(i.length > 1){
        i.forEach(icon => {
            icon.addEventListener('click', addToCart, false )
        })

        function addToCart(){
            const parent = this.offsetParent, 
                product_title = parent.querySelectorAll(".product-item h6")[0].innerHTML, 
                product_price = parent.querySelectorAll(".product-item .price")[0].innerHTML, 
                product_thumb = parent.querySelectorAll(".product-item img"), 
                product_count = [], 
                new_cart_obj = {
                    title:product_title,
                    price:product_price,
                    thumb:product_thumb[0].attributes[1].nodeValue,
                }, 
                choose_cart = localStorage.getItem('choose-cart')

                // Save cart items to local storage 
                if(choose_cart == null){
                    const cart_items = []
                    cart_items.push(new_cart_obj)
                    localStorage.setItem('choose-cart', JSON.stringify(cart_items))
                } else {
                    const cart_items = JSON.parse(localStorage.getItem('choose-cart'))
                    cart_items.push(new_cart_obj)
                    // console.log(cart_items)
                    cart_count[0].textContent = cart_items.length
                    // console.log(cart_count[0])
                    localStorage.setItem('choose-cart', JSON.stringify(cart_items))
                }   

                // console.table(product_thumb[0].attributes[1].nodeValue)
            //
        }
    }
}