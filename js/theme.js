import storage from './localStorage'
import {product_arr, categories} from './fetch'

// Global vars
let cart_count = document.querySelectorAll('.acc-search-cart li span')[0]

// Initialize these 

renderProductsOnShop()
cartTable()
showCartCount()


function renderProductsOnShop(){ // Render products 
    let products = product_arr, 
        html = "", 
        products_container = document.getElementById('all-products'), 
        product_count = document.getElementsByClassName("product-count")

    products.forEach(product => {
        html += `<div class='col-md-3'>
                    <div class="product-item" data-product-id="${product.id}">
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

    if(products_container !== null){
        products_container.innerHTML = html    
        product_count[0].innerHTML = Object.keys(products).length + " products"    
        quickView(products) //pass all products to click function 
        Cart() // run cart function after rendering products
    }
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
        data.map(data => { // retrieve the specific id details
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
    let i = document.querySelectorAll("#all-products .cart-icon")

    if(i.length > 1){
        i.forEach(icon => {
            icon.addEventListener('click', addToCart, false )
        })

        function addToCart(){
            const parent = this.offsetParent, 
                product_title = parent.querySelectorAll(".product-item h6")[0].innerHTML, 
                product_price = parent.querySelectorAll(".product-item .price")[0].innerHTML, 
                product_thumb = parent.querySelectorAll(".product-item img"), 
                product_id = parent.querySelectorAll(".btn")[0].dataset["id"], 
                product_count = [], 
                new_cart_obj = {
                    product_id:product_id,
                    title:product_title,
                    price:product_price,
                    thumb:product_thumb[0].attributes[1].nodeValue,
                }, 
                choose_cart = localStorage.getItem('choose-cart')
                
                if(choose_cart == null){ // Save cart items to local storage 
                    const cart_items = []
                    cart_items.push(new_cart_obj)
                    localStorage.setItem('choose-cart', JSON.stringify(cart_items))
                    // showCartCount()
                } else {
                    const cart_items = JSON.parse(localStorage.getItem('choose-cart'))
                    cart_items.push(new_cart_obj)
                    cart_count.textContent = cart_items.length
                    localStorage.setItem('choose-cart', JSON.stringify(cart_items))
                }   
        }
    }
}

function showCartCount(){    // retrieve cart items 
    let count = storage

    if(count !== null){
        cart_count.textContent = count.length
    }
}

function cartTable(){
    let cart = document.getElementById("cart"), 
        cart_row = "", 
        prices_arr = [], 
        cart_total_div = document.getElementsByClassName("cart-total")[0],
        cart_total = ""

    storage.map( (value, index) => {
        let price = parseFloat(value.cart_product_price.replace( /[^\d\.]*/g, '')); //get price, strip currency (ksh), 
            
        cart_row += `<tr>
                        <td scope="row">${index+1}</td>
                        <td><img src="${value.cart_product_thumbnail}"></td>
                        <td><h5>${value.cart_product_title}</h5><span class="small">${value.cart_product_price}</span></td>
                        <td><input min=0 class="form-control w-50" value="${value.cart_product_quantity}"type="number"></td>
                        <td>Ksh: ${price * value.cart_product_quantity}</td>
                        <td><i data-id="${value.cart_product_id}" class="bi bi-x-lg text-danger"></i></td>
                    </tr>`
        prices_arr.push(price * value.cart_product_quantity)
    })

    cart_total = prices_arr.reduce( (a,b) => a + b )

    if(cart !== null){
        cart.innerHTML = cart_row
        cart_total_div.innerHTML = cart_total
    }
}