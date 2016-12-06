// Your job is to build a web page thsat lists all of the products,
// the name of the department it's in, and the price.
// Additionally put a <select> element at the top of the page that contains all possible values
// of the season_discount key in the categories file. As soon as you select one of the seasons,
// all prices on the page should immediately be discounted by the corresponding percentage.



var productListed = document.getElementsByClassName('name');
var departmentListed = document.getElementsByClassName('category_id');
var priceListed = document.getElementsByClassName('price');

var globalProd;
var globalCat;

function categoryRequest(e) {

    //asks for data
    globalCat = JSON.parse(e.target.responseText);
    var prodSect = document.getElementsByClassName("prodSect");
    prodSect.innerHTML = globalMerger(globalProd, globalCat);

}

function getProducts(e) {
    globalProd = JSON.parse(e.target.responseText);
    //categories request
    var categoryData = new XMLHttpRequest();
    categoryData.addEventListener("load", categoryRequest);
    categoryData.open("GET", "categories.json");
    categoryData.send();

}


//product request
var productData = new XMLHttpRequest();
productData.addEventListener("load", getProducts);
productData.open("GET", "products.json");
productData.send();


function globalMerger(pro, cat) {

}





//
// `<div class="product-sec">
//     <h3>Product:</h3>
//         <p class="name"></p>
//     <h3 class>Department:</h3>
//         <p class="category_id"></p>
//     <h3>Price:</h3>
//         <p class="price"></p>
// </div>`
//





// for (var i = 0; i < data.products.length; i++) {
//     productListed[i].innerHTML = data.products[i].name;
// }
// for (var i = 0; i < data.products.length; i++) {
//     priceListed[i].innerHTML = data.products[i].price;
// }
// for (var i = 0; i < data.products.length; i++) {
//
//     if (data.products[i].category_id === 1) {
//         departmentListed[i].innerHTML = globalCat.categories[i].name
//
//     } else if (data.products[i].id === 2) {
//         departmentListed[i].innerHTML = globalCat.categories[i].name
//
//     } else {
//         departmentListed[i].innerHTML = globalCat.categories[i].name
//     }
// }
