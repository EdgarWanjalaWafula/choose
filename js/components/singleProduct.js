const singleProductTemplate = function(arr, target, cls){
    let html = "",
        products = arr, 
        div = target

    if(div !== null){
        products.map( value => {
            html += `<div class='${cls}'>
                        <div class="product-item" data-product-id="${value.id}">
                            <div class="product-img position-relative">
                                <img class="img-fluid" src="${value.image}">
                                <button data-id="${value.id}" class="btn btn-sm rounded-0 btn-success view-product">Quick View</button>
                            </div>
                            <div class="product-body">
                                <h6>${value.title}</h6>
                                <div class="d-flex justify-content-between">
                                    <span data-id="${value.id}" class="price">Ksh: ${value.price}</span>
                                    <i class="bi bi-bag cart-icon"></i>
                                </div>
                            </div>                      
                        </div>
                    </div>`
        })
    
        div.innerHTML = html
        // div.append(html)
    }
}

export default singleProductTemplate