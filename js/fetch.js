async function fetchProducts(){
    let a = "https://fakestoreapi.com/products", 
        b = document.getElementsByTagName("body")

    try {
        let res = await fetch(a);
        b[0].classList.add("success")
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

let product_arr = await fetchProducts(), 
    categories = "haha"

export {product_arr, categories }