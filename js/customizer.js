import {productArr} from './components/fetch'
import homeProducts from './components/singleProduct'
import slugify from './components/generateSlug'

jQuery(document).ready(function($){
    showMiniCart() // init 
    productsSlider()
    productQuickView()

    // Lets go 
    function showMiniCart(){
        let header_cart_icon = $(".site-header a[href='#mini-cart']")
        header_cart_icon.on("click", function(event){
            event.preventDefault
            let target = this.attributes[1].value
        })
    }

    function productsSlider(){
        let a = $(".home-products-carousel"), 
            // b = a[0].dataset.options, 
            c = 'w-100', 
            d = productArr, 
            e = $(".product-categories .product-category"),
            f = a.owlCarousel({
                loop:true,
                margin:0,
                nav: false,
                navText: ['<i class="icon ion-ios-arrow-round-back"></i>', '<i class="icon ion-ios-arrow-round-forward"></i>'],
                dots: true,
                autoplay:true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            }) 

        $(e).on("click", function(){
            let cat = this.dataset.categorySlug
            d = productArr.filter( value => slugify(value.category) == cat)       
            
            homeProducts(d, a[0], c) //show products               
            f.trigger('destroy.owl.carousel');
            f.owlCarousel();
        })

        homeProducts(d, a[0], c) //show products      
        f.trigger('destroy.owl.carousel');
        f.owlCarousel()
    }

    function productQuickView(){

    }
})