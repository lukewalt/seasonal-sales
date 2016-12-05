// Your job is to build a web page thsat lists all of the products,
// the name of the department it's in, and the price.
// Additionally put a <select> element at the top of the page that contains all possible values
// of the season_discount key in the categories file. As soon as you select one of the seasons,
// all prices on the page should immediately be discounted by the corresponding percentage.


// --------------------- Global Variables -----------------------------

var productListed = document.getElementsByClassName('name');
console.log(productListed);

var departmentListed = document.getElementsByClassName('category_id');
console.log(departmentListed);

var priceListed = document.getElementsByClassName('price');
console.log(priceListed);

var globalProd;
var globalCat;

// ------------------- XMLHttpRequest --------------------------

//department request
var departmentData = new XMLHttpRequest();
departmentData.addEventListener("load", departmentRequest);
departmentData.open("GET", "categories.json");
departmentData.send();

var productData = new XMLHttpRequest();
productData.addEventListener("load", productRequest);
productData.open("GET", "products.json");
productData.send();


function departmentRequest(e) {
    var data = JSON.parse(e.target.responseText);
    globalCat = data;
    console.log(data);

    for (var i = 0; i < data.categories.length; i++) {
        console.log(data.categories[i].id)

        if (data.categories[i].id === 1) {
            console.log(data.categories[i].name)

        } else if (data.categories[i].id === 2) {
            console.log(data.categories[i].name)

        } else {
            console.log(data.categories[i].name)
        }
    }
}


//function parses data from json file
function productRequest(e) {
    //asks for data
    var data = JSON.parse(e.target.responseText);
    globalProd = data;
    //and assings corresponding value to glabal variable innerHTML
    for (var i = 0; i < data.products.length; i++) {
        productListed[i].innerHTML = data.products[i].name;
    }
    for (var i = 0; i < data.products.length; i++) {
        priceListed[i].innerHTML = data.products[i].price;
    }
    for (var i = 0; i < data.products; i++) {
        data.products
    }
}
