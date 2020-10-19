
function validateName() {
    var name = document.getElementById('shipping-name');
    var validationMessage = name.parentElement.querySelector('.validationMessage');
    var btnPay = document.getElementById('btn-pay');

    if (name.value === "") {
        validationMessage.hidden = false;
        validationMessage.innerText = "Enter Your name";
        btnPay.disabled = true;
    }
    else {
        validationMessage.hidden = true;
        if (validAddress() && validCity()) {
            btnPay.disabled = false;
        }
        else {
            btnPay.disabled = true;
        }

    }
}

function validName() {
    var name = document.getElementById('shipping-name');
    if (name.value === "") {
        return false;
    }
    else {
        return true;
    }
}
document.getElementById('shipping-name').addEventListener('keyup', function () {
    validateName();
});
document.getElementById('shipping-name').addEventListener('focusout', function () {
    validateName();
});
//address
function validateAddress() {
    var addressFirst = document.getElementById('shipping-address1');
    var validationMessage = addressFirst.parentElement.querySelector('.validationMessage');
    var btnPay = document.getElementById('btn-pay');
    if (addressFirst.value === "") {
        validationMessage.hidden = false;
        validationMessage.innerText = "Enter Your Address";
        btnPay.disabled = true;
    }
    else {
        validationMessage.hidden = true;
        if (validName() && validCity()) {
            btnPay.disabled = false;
        }
        else {
            btnPay.disabled = true;
        }

    }
}
function validAddress() {
    var addressData = document.getElementById('shipping-address1');
    if (addressData.value === "") {
        return false;
    }
    else {
        return true;
    }
}
document.getElementById('shipping-address1').addEventListener('keyup', function () {
    validateAddress();
});
document.getElementById('shipping-address1').addEventListener('focusout', function () {
    validateAddress();
});

//city

function validateCity() {
    var city = document.getElementById('shipping-city');
    var validationMessage = city.parentElement.querySelector('.validationMessage');
    var btnPay = document.getElementById('btn-pay');
    if (city.value === "") {
        validationMessage.hidden = false;
        validationMessage.innerText = "Enter Your city";
        btnPay.disabled = true;
    }
    else {
        validationMessage.hidden = true;
        if (validAddress() && validName()) {
            btnPay.disabled = false;
        }
        else {
            btnPay.disabled = true;
        }

    }
}
function validCity() {
    var city = document.getElementById('shipping-city');
    if (city.value === "") {
        return false;
    }
    else {
        return true;
    }
}
document.getElementById('shipping-city').addEventListener('keyup', function () {
    validateCity();
});
document.getElementById('shipping-city').addEventListener('focusout', function () {
    validateCity();
});

function orderSummary() {
    var shippingList = document.getElementById('shipping-order');
    var grandTotalOrder = 0;
    shippingList.innerHTML = "";
    for (var i = 0; i < shoppingCarts.products.length; i++) {
        var cartItem = shoppingCarts.products[i];
        var cartProductId = cartItem.productId;
        var cartProductItem = products.filter(x => x.productId === cartProductId);
        var productItemPrice = cartItem.quantity * cartProductItem[0].price;
        grandTotalOrder += productItemPrice;
        var shippingItems = '<li class="list-group-item">'
            + ' <span class="item">' + cartItem.quantity + ' * ' + cartProductItem[0].title + '</span>'
            + ' <span class="float-right order-price">$' + productItemPrice.toFixed(2) + '</span>'
            + '</li>';

        shippingList.insertAdjacentHTML("beforeend", shippingItems);
    }
    shippingList.insertAdjacentHTML('beforeend', '<li class="list-group-item text-right">$' + grandTotalOrder.toFixed(2) + '</li>');

}

function resetCheckoutInfo() {

    var name = document.getElementById('shipping-name');
    var city = document.getElementById('shipping-city');
    var addressFirst = document.getElementById('shipping-address1');
    var addressSecond = document.getElementById('shipping-address2');

    name.value = "";
    city.value = "";
    addressFirst.value = "";
    addressSecond.value = "";
    document.getElementById('btn-pay').disabled = true;

}
document.getElementById('btn-pay').addEventListener('click', function () {
    updateOrder();
    resetCheckoutInfo();
    shoppingCarts = {};
    totalQuantity = 0;
    updateQuantity();
    document.getElementById('shipping-order').innerHTML = "";
    routeSection('section-orderSuccess');

});

