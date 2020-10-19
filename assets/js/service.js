
var menuList = document.getElementById('shop-menu');

for (var i = 0; i < category.length; i++) {
    var menu = document.createElement('li');
    menu.classList.add('list-group-item');
    menu.setAttribute('data-id', i);
    menu.innerHTML = category[i];
    menuList.append(menu);


}
menuList.querySelector('.list-group-item:first-child').classList.add('active');


