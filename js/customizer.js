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

miniCart()

function miniCart(){
    let a = storage, 
        b = document.getElementById("cart"), 
        c = '', 
        e = [], 
        g = document.querySelectorAll(".total"), 
        obj = {}, 
        carts = []

        a.forEach((value, index) => {
            let price = parseFloat(value.price.replace( /[^\d\.]*/g, ''));
            e.push(price)
            c += `<tr>
                    <td scope="row">${index+1}</td>
                    <td><img class="img-fluid" src="${value.thumb}"></td>
                    <td><h6>${value.title}</h6><span class="d-block">${value.price}</span></td>
                    <td><input type="number" class="form-control w-50"></td>
                    <td><i class="bi bi-x-lg"></i></td>
                </tr>`
        });
        b.innerHTML = c
    if(!typeof g[0] === undefined || !typeof b === null){
        g[0].innerHTML = f

    }

    a.map((value, index) => {
        obj["title"] = value.title
        // console.log(value, index)
    })
}