window.onload = function(){

    console.log("Estoy acá");

    const cartProductContainer = document.querySelector('.cart-product-container');

    console.log(cartProductContainer)
    
    const addToCartButton = document.querySelectorAll('.addToCartButton');
    console.log(addToCartButton);
    addToCartButton.forEach((button) => {
        button.addEventListener('click', addToCartClick);
    });
    
    function addToCartClick(e){
        // const button = e.target;
        const product = document.querySelector('.cart-product')
        // const product = button.closest('.product-cart')
        console.log(product)

        const productName = document.querySelector('.cart-product-name').textContent;
        const productFinalPrice = document.querySelector('.cart-product-final-price').textContent;
        const productImage = document.querySelector('.cart-product-image').src;
        // console.log(productName);
        // console.log(productFinalPrice);
        // console.log(productImage);

        addProductToCart(productName, productFinalPrice, productImage)
    }

    function addProductToCart(productName, productFinalPrice, productImage){
        // console.log(productCategory, productFinalPrice, productImage)
        const cartProductRow = document.createElement('div');
        const cartProductContainerInfo = `
        <div class="cart-flex color">
            <div class="cart-info">
                <img src=${productImage}>
                <div>
                    <p>${productName}</p>
                    <a href="">Quitar</a>
                </div>
            </div>
            <input type="number" value="1">
            <p class="article-price">${productFinalPrice}</p>
        </div>
        `
        cartProductRow.innerHTML = cartProductContainerInfo;
        console.log(cartProductRow);

        //HASTA ACA ESTA TODO BIEN

        cartProductContainer.append(cartProductRow);

        // The .append() method inserts the specified content as
        // the last child of each element in the jQuery collection.

        // Problema, el cart.js tiene <script> en dos .ejs ya que
        // tengo que trabajar con la pagína donde esta el boton de
        // añadir el articulo al carrito, y la página donde esta el carrito.
        // Al hacer esto algunas veces cuando hago el querySelector, este
        // recibe "null" ya que no esta la clase llamada en cuestion en 
        // este ejs, pero si en el otro. Y obviamente las funciones no
        // pueden trabajar con null. 
    }
}
