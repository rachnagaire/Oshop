function validTitle() {
    var productTitle = document.getElementById('product-title');
    if (productTitle.value === "") {
        return false;
    }
    else {
        return true;
    }
}


function validateTitle() {
    var productTitle = document.getElementById('product-title');
    var errorMsg = productTitle.parentElement.querySelector('.alert');
    var resultProductTitle = document.getElementById('result-productTitle');

    var button = document.getElementById('btn-productSave');

    if (productTitle.value === "") {
        errorMsg.hidden = false;
        errorMsg.innerHTML = "Enter your title"
        resultProductTitle.innerText = "";
        button.disabled = true;

    }
    else {
        errorMsg.hidden = true;
        resultProductTitle.innerText = productTitle.value;
        if (validPrice() && validCategory() && validImage()) {
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }

    }

}







document.getElementById('product-title').addEventListener('keyup', function () {
    validateTitle();

});
document.getElementById('product-title').addEventListener('focusout', validateTitle);


function validPrice() {
    var productPrice = document.getElementById('product-price');
    if (productPrice.value === "") {
        return false;
    }
    else {
        return true;
    }
}
function validatePrice() {
    var productPrice = document.getElementById('product-price');
    var errorMsg = productPrice.parentElement.parentElement.querySelector('.alert');
    var resultProductPrice = document.getElementById('result-productPrice');
    var button = document.getElementById('btn-productSave');

    if (productPrice.value === "") {
        errorMsg.hidden = false;
        errorMsg.innerHTML = "Enter Product's Price"
        resultProductPrice.innerText = "";
        button.disabled = true;
    }
    else {
        errorMsg.hidden = true;
        resultProductPrice.innerText = "$" + productPrice.value;
        if (validTitle() && validImage() && validCategory()) {
            button.disabled = false;
        }
        else {
            button.disabled = true
        }

    }
}



document.getElementById('product-price').addEventListener('keyup', validatePrice);

document.getElementById('product-price').addEventListener('focusout', validatePrice);


function validCategory() {
    var productCategory = document.getElementById('product-category');
    if (productCategory.value === "") {
        return false;
    }
    else {
        return true;
    }

}


function validateCategory(e) {
    var productCategory = document.getElementById('product-category');
    var errorMsg = productCategory.parentElement.querySelector('.alert');
    var resultProductCategory = document.getElementById('result-productCategory');
    var button = document.getElementById('btn-productSave');


    if (productCategory.value == "0") {
        errorMsg.hidden = false;
        errorMsg.innerHTML = "Please select product's category";
        resultProductCategory.innerText = "";
        button.disabled = true;

    }
    else {
        errorMsg.hidden = true;
        resultProductCategory.innerText = e.target.options[e.target.value].text;

        if (validTitle() && validPrice() && validImage()) {
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }


    }


}

document.getElementById('product-category').addEventListener('change', function (e) {
    validateCategory(e);
});
document.getElementById('product-category').addEventListener('focusout', function (e) {
    validateCategory(e);
});


function validImage() {
    var image = document.getElementById('product-image');
    if (image.value === "") {
        return false;
    }
    else {
        return true;
    }

}
function validateImage() {
    var image = document.getElementById('product-image');
    var errorMsg = image.parentElement.querySelector('.alert');
    var urlRegexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    var validUrl = image.value.match(urlRegexp);
    var resultImage = document.getElementById('result-productImage');
    var button = document.getElementById('btn-productSave');

    if (image.value === "") {
        errorMsg.hidden = false;
        errorMsg.innerText = "Enter URL for Image"

        button.disabled = true;
        return false;


    }
    else {
        if (validUrl === null) {
            errorMsg.hidden = false;
            errorMsg.innerText = "Invalid URL"
            button.disabled = true;
        }
        else {
            errorMsg.hidden = true;
            resultImage.src = image.value;
            if (validTitle() && validPrice() && validCategory()) {
                button.disabled = false;
            }
            else {
                button.disabled = true;
            }
        }

    }
}

document.getElementById('product-image').addEventListener('keyup', validateImage);
document.getElementById('product-image').addEventListener('focusout', validateImage);


function addProduct() {
    var title = document.getElementById('product-title').value;
    var productPrice = document.getElementById('product-price').value;
    var productCategory = document.getElementById('product-category').value;
    var imageUrl = document.getElementById('product-image').value;
    var productId = Math.ceil(Math.random() * 100);

    var product = {
        productId: productId,
        title: title,
        price: productPrice,
        category: productCategory,
        imageUrl: imageUrl

    }
    products.push(product);
    table.clear().rows.add(products).draw();
    productList(products);
}
function resetProductInfo() {
    var title = document.getElementById('product-title');
    var productPrice = document.getElementById('product-price');
    var productCategory = document.getElementById('product-category');
    var imageUrl = document.getElementById('product-image');


    var resultProductCategory = document.getElementById('result-productCategory');
    var resultProductPrice = document.getElementById('result-productPrice');
    var resultProductTitle = document.getElementById('result-productTitle');
    var resultImage = document.getElementById('result-productImage');

    resultProductCategory.innerText = resultProductPrice.innerText = resultProductTitle.innerText = resultImage.src = "";

    title.value = productPrice.value = productCategory.value = imageUrl.value = "";

}

function updateProductInfo() {
    var productItem = products.filter(x => x.productId == productId);
    var title = document.getElementById('product-title').value;
    var productPrice = document.getElementById('product-price').value;
    var productCategory = document.getElementById('product-category').value;
    var imageUrl = document.getElementById('product-image').value;

    productItem[0].title = title;
    productItem[0].price = productPrice;
    productItem[0].category = productCategory;
    productItem[0].imageUrl = imageUrl;

    table.clear().rows.add(products).draw();
    productList(products)

}

document.getElementById('btn-productSave').addEventListener('click', function () {
    if (productId !== "") {
        updateProductInfo();
    }
    else {
        addProduct();
        resetProductInfo();
    }

});

function removeProduct() {

    var index = products.findIndex(x => x.productId == productId);
    products.splice(index, 1);
    table.clear().rows.add(products).draw();

}

document.getElementById('btn-productDelete').addEventListener('click', function () {
    removeProduct();
    resetProductInfo();
    routeSection('section-manageProducts');

})

$(document).on("click", ".edit-product", function (e) {
    productId = e.target.getAttribute('data-id');

    editProduct(productId);
    routeSection('section-newProducts');
    document.getElementById('btn-productDelete').hidden = false;
});

function editProduct(productId) {
    var resultProductCategory = document.getElementById('result-productCategory');
    var resultProductPrice = document.getElementById('result-productPrice');
    var resultProductTitle = document.getElementById('result-productTitle');
    var resultImage = document.getElementById('result-productImage');

    var categoryOption = document.getElementById('product-category');

    var currentProduct = products.filter(x => x.productId == productId);
    resultProductTitle.innerText = document.getElementById('product-title').value = currentProduct[0].title;
    resultProductPrice.innerText = document.getElementById('product-price').value = currentProduct[0].price;
    resultProductCategory.innerText = categoryOption[currentProduct[0].category].text;
    categoryOption.value = currentProduct[0].category;
    resultImage.src = document.getElementById('product-image').value = currentProduct[0].imageUrl;

    document.getElementById('btn-productSave').disabled = false;

}















