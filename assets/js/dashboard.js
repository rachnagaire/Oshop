
function productList(productList) {
    var productCardList = document.getElementById('product-wrapper');
    productCardList.innerHTML = "";


    for (var i = 0; i < productList.length; i++) {
        var cardElement = '<div class="card">'
            + '<div class="img-wrapper" id="image-container-' + productList[i].productId + '">'
            + ' <img src="' + productList[i].imageUrl + '" alt="" class=" img-responsive img-fluid">'
            + '</div>'
            + '  <div class="item-details">'
            + '      <h5 class="item-name" id="title">' + productList[i].title + '</h5>'
            + '     <span class="price" id="price">$' + productList[i].price + '</span>'
            + ' </div>'
            + ' <div class="card-footer " >'
            + '  <button type="button" class="btn btn-block cart__adder"  id="cart__adder-' + productList[i].productId + '" data-id="' + productList[i].productId + '"> Add to Cart</button>'
            + '  <div class="cart__add-sub" data-id="' + productList[i].productId + '" hidden>'
            + '       <button type="button" class="btn  cart-item__icon cart_add" id="btn-cartAdd-' + productList[i].productId + '"><i class="ri-add-line"></i></button>'
            + '<span class="cart-item__text">  </span>'
            + '           <button type="button" class="btn cart-item__icon  cart_sub"  id="btn-cartSub-' + productList[i].productId + '"><i class="ri-subtract-line"></i></button>'
            + '     </div>'
            + '</div>'
            + '</div>';
        productCardList.insertAdjacentHTML('beforeend', cardElement);

    }
}

function showHideBtn(id, count) {

    var buttonAdder = document.getElementById(id);
    var buttonAddSub = buttonAdder.parentElement.querySelector('.cart__add-sub');
    var productQuantity = buttonAdder.parentElement.querySelector('.cart-item__text')
    buttonAdder.hidden = true;
    buttonAddSub.hidden = false;

    productQuantity.innerHTML = count + " in cart";

}
function productAddSub(e, operator, section) {

    var addSubtractor = e.target.closest('.cart__add-sub');
    var adder = addSubtractor.previousElementSibling;
    var itemId = addSubtractor.getAttribute('data-id');
    var result = e.target.parentElement.parentElement.querySelector('.cart-item__text');
    var count = parseInt(result.innerText);
    // debugger;
    result.innerText = count + " in cart";

    if (operator === "add") {
        count++;
        totalQuantity++

    }
    else {
        count--;
        totalQuantity--;
    }


    if (count < 1) {
        if (section === "table") {
            e.target.parentElement.parentElement.closest('tr').remove()
        }
        else {
            addSubtractor.hidden = true;
            adder.hidden = false;
        }

    }

    result.innerText = count + " in cart";
    updateQuantity();
    updateCartProduct(itemId, count);
    if (section === "table") {
        if (count > 0) {
            priceCalculator(e);
        }
        grandTotal();
    }
}

$(document).on('click', '.cart_add', function (e) {
    var section = (e.target.parentElement.parentElement.closest('.card-footer') === null) ? "table" : "card";

    productAddSub(e, "add", section);

});

$(document).on('click', '.cart_sub', function (e) {
    var section = (e.target.parentElement.parentElement.closest('.card-footer') === null) ? "table" : "card";

    productAddSub(e, "sub", section);

});

$(document).on('click', '.list-group-item', function (e) {

    document.querySelector('#shop-menu li.active').classList.remove('active')
    e.target.classList.add('active');
    var categoryValue = e.target.getAttribute('data-id');
    updateproductList(categoryValue);
});

function updateproductList(value) {

    var newProducts = value === "0" ? products : products.filter(x => x.category === value);
    productList(newProducts);
}

$(document).on('click', '.cart__adder', function (e) {
    totalQuantity++;
    updateQuantity();
    var cartId = e.target.getAttribute('id');
    var cartItemId = e.target.getAttribute('data-id')
    showHideBtn(cartId, 1);
    updateCartProduct(cartItemId, 1);
});

document.addEventListener('DOMContentLoaded', () => {

    productList(products);

});

function updateQuantity() {
    document.getElementById('total-cartQuantity').innerText = totalQuantity;
    document.getElementById('total__product-quantity').innerText = totalQuantity;
    document.getElementById('total-checkoutQuantity').innerText = totalQuantity;

    if (totalQuantity === 0) {
        document.getElementById('btn-checkout').hidden = true;
    }
    else {
        document.getElementById('btn-checkout').hidden = false;

    }

}