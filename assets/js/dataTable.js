//dataTables
var tableManageProducts;
var tableMyOrders;

$(document).ready(function () {
    // $('#table-manageProducts').DataTable();
    tableManageProducts = $('#table-manageProducts').DataTable({
        data: products,
        columns: [

            { data: 'title' },
            { data: 'price' }, //or { data: 'MONTH', title: 'Month' }`
            {
                data: null, "orderable": false,
                'render': function (data) {
                    return '<a href="javascript:" class="btn btn-link edit-product" data-id="' + data.productId + '">Edit</a>'
                }
            }
        ]

    });

    tableMyOrders = $('#table-myOrders').DataTable({
        data: userOrders(),
        columns: [
            { data: 'orderId' },
            {
                data: null, "orderable": false,
                'render': function (data) {
                    return data.date.toDateString();
                }
            },
            {
                data: null, "orderable": false,
                'render': function (data) {
                    return '<a href="javascript:" class="btn btn-link view-order" data-id="' + data.orderId + '">View</a>'
                }
            }

        ]

    });
    tableManageOrders = $('#table-manageOrders').DataTable({
        data: orders,
        columns: [
            { data: 'orderId' },
            {
                data: null, "orderable": true,
                'render': function (data) {
                    return users.filter(x => x.userId === data.userId)[0].username;
                }
            },
            {
                data: null, "orderable": true,
                'render': function (data) {
                    return data.date.toDateString();
                }
            },
            {
                data: null, "orderable": false,
                'render': function (data) {
                    return '<a href="javascript:" class="btn btn-link view-order" data-id="' + data.orderId + '">View</a>'
                }
            }

        ]
    })


});
