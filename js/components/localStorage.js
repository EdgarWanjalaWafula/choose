const carts = JSON.parse(localStorage.getItem('choose-cart'))
let cart_items = []

    if(carts !== null){
        carts.map( cart => {
            let quantity = 1, 
                exists = cart_items.some( element => element.cart_product_id == cart.product_id) // check for duplicate ids 

            if(exists == false) cart_items.push({ cart_product_id:Number(cart.product_id), cart_product_title:cart.title, cart_product_price:cart.price,cart_product_quantity:quantity, cart_product_thumbnail:cart.thumb})
                
            let found = cart_items.find( item => item.cart_product_id == cart.product_id)
            if(found !==undefined) found.cart_product_quantity = found.cart_product_quantity + 1
        })
    }
export default cart_items