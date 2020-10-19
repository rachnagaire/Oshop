// const { filter } = require("minimatch");


var users = [{
    userId: '1',
    username: 'ra',
    password: 'r'
},
{
    userId: '4',
    username: 'anshu',
    password: 'anshu*don'
}
];
var products = [
    {
        productId: 1,
        title: 'Bread',
        price: '1.2',
        category: '1',
        imageUrl: 'https://static.pexels.com/photos/416607/pexels-photo-416607.jpeg'
    },
    {
        productId: 2,
        title: 'Spinach',
        price: '1.3',
        category: '3',
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.UMbDSrWzOrVV7P3wWZAwogHaHa&pid=Api&P=0&w=300&h=300'
    },
    {
        productId: 3,
        title: 'Ginger Bread',
        price: '1.3',
        category: '2',
        imageUrl: 'https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg'
    },
    {
        productId: 4,
        title: 'Mangoes',
        price: '13',
        category: '4',
        imageUrl: 'https://s3.india.com/wp-content/uploads/2014/03/mangoes.jpg'
    },
    {
        productId: 5,
        title: 'Dairy Milk',
        price: '13',
        category: '2',
        imageUrl: 'http://3.bp.blogspot.com/-X266cFtnevM/T_2l2fM2JJI/AAAAAAAAIhk/k1KrVwO67cs/s800/milk-packaging-design-10.jpg'
    },

    {
        productId: 6,
        title: 'Coriander Seeds',
        price: '13',
        category: '2',
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.EHl4nL8PnjQCne9CJoawYQHaEJ&pid=Api&P=0&w=289&h=163'
    }
];
var orders = [
    {
        "orderId": "1",
        "userId": "1",
        "date": new Date(),
        "shoppingCarts": {
            cartId: 9,
            products: [
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 }
            ]
        }

    },
    {
        "orderId": "2",
        "userId": "4",
        "date": new Date(),
        "shoppingCarts": {
            cartId: 9,
            products: [
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 }
            ]
        }

    },
    {
        "orderId": "3",
        "userId": "1",
        "date": new Date(),
        "shoppingCarts": {
            cartId: 9,
            products: [
                { productId: 1, quantity: 1 },
                { productId: 2, quantity: 1 }
            ]
        }

    }
]
var shoppingCarts = {};
var category = ["All Categories", "Bakery Items", "Dairy Products", "Vegetables", "Fruits", "Seasoning and Spices"];


var isLogin = false;

var userId = "";
var productId = "";
var totalQuantity = 0;




