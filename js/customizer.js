import storage from './localStorage'

jQuery(document).ready(function($){
    // init 
    showMiniCart()

    // Lets go 
    function showMiniCart(){
        var header_cart_icon = $(".site-header a[href='#mini-cart']")

        header_cart_icon.on("click", function(event){
            event.preventDefault
            var target = this.attributes[1].value
        })
    }
})