function shoppingCartList() {
    var shoppingCartList = document.getElementById('shopping-cart-list');
    shoppingCartList.innerHTML = "";

    if ((shoppingCarts.hasOwnProperty('products'))) {
        for (var i = 0; i < shoppingCarts.products.length; i++) {
            var cartItem = shoppingCarts.products[i];
            var cartProductId = cartItem.productId;
            var quantity = cartItem.quantity;

            var productItem = products.filter(x => x.productId === cartProductId);

            var shoppingCartRow = '<tr>'
                + '<td>'
                + '  <div class="img-wrapper circle">'
                + '<img src="' + productItem[0].imageUrl + '" alt="" width="40px"></div>'
                + '    </div>'
                + '</td>'
                + ' <td>' + productItem[0].title + '</td>'
                + '<td class="product-quantity">'
                + '    <div class="cart__add-sub d-block" data-id="' + cartProductId + '">'
                + '      <button class="btn  cart-item__icon cart_add"><i class="ri-add-line"></i></button>'
                + '      <span class="cart-item__text">' + quantity + ' in cart </span>'
                + '         <button class="btn cart-item__icon  cart_sub"><i class="ri-subtract-line"></i> </button>'
                + ' </div>'
                + ' </td>'
                + '<td> $' + (quantity * productItem[0].price).toFixed(2) + '</td>'
                + '   </tr>';
            shoppingCartList.insertAdjacentHTML("beforeend", shoppingCartRow);
        }
        grandTotal();
    }




}


function priceCalculator(e) {
    var parentElement = e.target.parentElement.parentElement;
    var result = parentElement.querySelector('.cart-item__text');
    var quantity = parseInt(result.innerText);
    var dataId = parentElement.closest('.cart__add-sub').getAttribute('data-id')
    var productItem = products.filter(x => x.productId === parseInt(dataId));
    var productPrice = productItem[0].price;

    var totalPrice = quantity * productPrice;

    parentElement.closest('tr').querySelector('td:last-child').innerText = '$' + totalPrice.toFixed(2);


}
function grandTotal() {
    var grandTotal = 0;
    var price = document.getElementById('table-shopping-cart').querySelectorAll('tbody tr td:last-child');

    for (var i = 0; i < price.length; i++) {
        grandTotal += parseFloat(price[i].innerText.substring(1));
    }
    document.getElementById('grand-total').innerText = '$' + grandTotal.toFixed(2);


}


document.getElementById('btn-cart-clear').addEventListener('click', function () {
    document.getElementById('shopping-cart-list').innerHTML = "";
    document.getElementById('grand-total').innerText = "$0.00";
    totalQuantity = 0;
    updateQuantity();
    shoppingCarts = [];

})


function updateCartProduct(id, quantity) {

    if (shoppingCarts.hasOwnProperty('products') == false) {
        shoppingCarts.cartId = Math.ceil(Math.random() * 100);
        shoppingCarts.products = [];
    }

    var newCartItem = {
        productId: parseInt(id),
        quantity: parseInt(quantity)
    }

    var hasProductId = shoppingCarts.products.filter(x => x.productId === parseInt(id));
    if (hasProductId.length > 0) {
        hasProductId[0].quantity = parseInt(quantity);

    }
    else {
        shoppingCarts.products.push(newCartItem);
    }
    shoppingCarts.products = shoppingCarts.products.filter(x => x.quantity !== 0);



}

