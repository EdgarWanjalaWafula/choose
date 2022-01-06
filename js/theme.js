import storage from './components/localStorage'
import {productArr, productCategories} from './components/fetch'
import productTemplate from './components/singleProduct'
// import slugify from './components/generateSlug'

// Global vars
let cart_count = document.querySelectorAll('.acc-search-cart li span')[0]

// Initialize these 
renderProductsOnShop() // Render products 
cartTable() // Show roducts on cart page
showCartCount() // Show cart count
showCategories() // Show categories

function renderProductsOnShop(){ 
    let products = productArr, 
        html = "", 
        products_container = document.getElementById('all-products'), 
        product_count = document.getElementsByClassName("product-count")

    productTemplate(products, products_container, 'col-md-3' )

    if(products_container !== null){
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

function showCartCount(){ // retrieve cart items 
    let count = storage
    if(count !== null) cart_count.textContent = count.length
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
                        <td><h5>${value.cart_product_title}</h5><span class="small text-danger d-block">Remove</span></td>
                        <td><span class='cart-product-price'>${(value.cart_product_price).toLocaleString("en",{minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></td>
                        <td><input min=0 class="form-control text-center" value="${value.cart_product_quantity}"type="number"></td>
                        <td><span class='cart-product-total'>Ksh: ${(price * value.cart_product_quantity).toLocaleString("en",{minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></td>
                    </tr>`
        prices_arr.push(price * value.cart_product_quantity)
    })

    cart_total = prices_arr.reduce( (a,b) => a + b )
    if(cart !== null){
        cart.innerHTML = cart_row
        cart_total_div.innerHTML = cart_total.toLocaleString("en",{minimumFractionDigits: 2, maximumFractionDigits: 2})
    }
}

function showCategories(){
    let categories = productCategories, 
        div = document.getElementsByClassName("product-categories")[0], 
        target = document.getElementsByClassName("home-products-carousel")[0], 
        html = ""

        console.log(div)

        if(div !== undefined){
            categories.map( category => {
                html += `<li class="product-category" data-category-slug="${category.slug}">
                    ${category.category}
                </li>`
            })  
        
            
            div.innerHTML = html
        }

    // let categoryLi = document.querySelectorAll(".product-categories li")

    // categoryLi.forEach( li => {
    //     console.log(li)

    //     li.addEventListener('click', filterCategories, false)
    // })

    // console.log(productArr)

    // function filterCategories(){
    //     let cat = this.dataset['categorySlug'],
    //         filteredArray = productArr.filter( value => slugify(value.category) == cat)
    //     console.log(filteredArray)
    // }
}