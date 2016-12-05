// Your job is to build a web page that lists all of the products,
// the name of the department it's in, and the price.
// Additionally put a <select> element at the top of the page that contains all possible values
// of the season_discount key in the categories file. As soon as you select one of the seasons,
// all prices on the page should immediately be discounted by the corresponding percentage.


var departmentData = new XMLHttpRequest();
function departmentRequest(e) {
    var data = JSON.parse(e.target.responseText);
    console.log(data);
}
departmentData.addEventListener("load", departmentRequest);
departmentData.open("GET", "categories.json");
departmentData.send();


var productData = new XMLHttpRequest();
function productRequest(e) {
    var data = JSON.parse(e.target.responseText);
    console.log(data);
}
productData.addEventListener("load", productRequest);
productData.open("GET", "products.json");
productData.send();
