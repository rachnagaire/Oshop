

function updateOrder() {
    orders.orderId = Math.ceil(Math.random() * 100);
    orders.userId = userId;
    orders.date = new Date();
    orders.shoppingCarts = shoppingCarts;
    // if (orders.hasOwnProperty('shoppingCarts') == false) {

    //     orders.shoppingCarts = [];
    // }
    // else {
    //     orders.shoppingCarts = shoppingCarts;

    // }

}


function orderDataView(e, id) {

}


$(document).on('click', '.view-order', function (e) {

    var id = e.target.getAttribute('data-id');

    routeSection('section-orderView');
    viewOrderSummary(id);

});

function userOrders() {
    var userOrder = orders.filter(x => x.userId === userId);
    return userOrder;
}


function viewOrderSummary(orderItemId) {
    var orderSummaryList = document.getElementById('orderSummary-View');
    orderSummaryList.innerHTML = "";
    var orderItems = orders.filter(x => x.orderId === orderItemId);
    var orderProducts = orderItems[0].shoppingCarts.products;
    var grandTotalOrder = 0;

    for (var i = 0; i < orderProducts.length; i++) {
        var orderProduct = orderProducts[i];
        var productId = orderProduct.productId;
        var orderProductItem = products.filter(x => x.productId === productId);
        var productItemPrice = orderProduct.quantity * orderProductItem[0].price;
        grandTotalOrder += productItemPrice;
        var orderItemsList = '<li class="list-group-item border-left-0 border-right-0">'
            + ' <span class="item">' + orderProduct.quantity + ' * ' + orderProductItem[0].title + '</span>'
            + ' <span class="float-right order-price">$' + productItemPrice.toFixed(2) + '</span>'
            + '</li>';

        orderSummaryList.insertAdjacentHTML("beforeend", orderItemsList);
    }

    orderSummaryList.insertAdjacentHTML('beforeend', '<li class="list-group-item text-right border-left-0 border-right-0">$' + grandTotalOrder.toFixed(2) + '</li>');

}

