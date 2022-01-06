import slugify from './generateSlug'

async function fetchProducts(){
    let a = "http://localhost/choose/js/data/products.json", 
        b = document.getElementsByTagName("body")

    try {
        let res = await fetch(a);
        b[0].classList.add("success")
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

let productArr = await fetchProducts(), 
    productCategories = []

    productArr.map( (value, index) => {
        let categorySlug = slugify(value.category),
            exists = productCategories.some( category => category.slug == categorySlug) // check for duplicate ids 

        if(exists == false){
            productCategories.push({id:index, category:value.category, slug:categorySlug})
        }
    })

export {productArr, productCategories }