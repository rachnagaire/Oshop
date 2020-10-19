function routeSection(section) {
    var main = document.getElementById('main');
    var itemClass = "section:not(." + section + ")";
    var hideElement = document.querySelectorAll(itemClass);
    for (var i = 0; i < hideElement.length; i++) {
        hideElement[i].classList.remove('section-active');
    }

    main.querySelector("." + section).classList.add('section-active');
}

document.getElementById('index').addEventListener('click', function () {
    routeSection('section-home')


})

document.getElementById('myOrders').addEventListener('click', function () {
    tableMyOrders.clear().rows.add(userOrders()).draw();
    routeSection('section-myOrders')



})
document.getElementById('manageOrders').addEventListener('click', function () {
    routeSection('section-manageOrders')
});
document.getElementById('manageProducts').addEventListener('click', function () {
    routeSection('section-manageProducts');
});
document.getElementById('btn-newProducts').addEventListener('click', function () {
    productId = "";
    resetProductInfo();
    routeSection('section-newProducts');

});
document.getElementById('shoppingCart').addEventListener('click', function () {
    document.getElementById('grand-total').innerText = '$ 0.00';
    routeSection('section-shoppingCart');
    shoppingCartList();

});
document.getElementById('btn-checkout').addEventListener('click', function () {
    routeSection('section-checkoutProducts');
    orderSummary();

});

function routeLoginSignup(section) {
    document.querySelector('header').setAttribute("hidden", "true");
    document.querySelector('footer').setAttribute("hidden", "true");
    document.querySelector('main').setAttribute("hidden", "true");
    document.querySelector('.' + section).removeAttribute("hidden");
}

document.getElementById('btn-signin').addEventListener('click', function () {
    routeLoginSignup('pg-signin');
});
document.getElementById('btn-signup').addEventListener('click', function () {
    routeLoginSignup('pg-signup');
});
function hideSigninSignup() {
    document.querySelector('header').removeAttribute("hidden");
    document.querySelector('footer').removeAttribute("hidden");
    document.querySelector('main').removeAttribute("hidden");
    document.querySelector('.pg-signup').setAttribute("hidden", "true");
    document.querySelector('.pg-signin').setAttribute("hidden", "true");
}
document.getElementById('btn-backtoHome').addEventListener('click', function () {
    hideSigninSignup();
});
document.getElementById('btnBacktoHome').addEventListener('click', function () {
    hideSigninSignup();
});

