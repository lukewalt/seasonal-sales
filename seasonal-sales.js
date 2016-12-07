// Your job is to build a web page thsat lists all of the products,
// the name of the department it's in, and the price.
// Additionally put a <select> element at the top of the page that contains all possible values
// of the season_discount key in the categories file. As soon as you select one of the seasons,
// all prices on the page should immediately be discounted by the corresponding percentage.


var globalProd;
var globalCat;


//product request
var productData = new XMLHttpRequest();
productData.addEventListener("load", getProducts);
productData.open("GET", "products.json");
productData.send();




function getProducts(e) {
    console.log("Products");
    globalProd = JSON.parse(e.target.responseText);
    //categories request
    var categoryData = new XMLHttpRequest();
    categoryData.addEventListener("load", categoryRequest);
    categoryData.open("GET", "categories.json");
    categoryData.send();

}

//category request
function categoryRequest(e) {
    console.log("Categories");
    globalCat = JSON.parse(e.target.responseText);
    // console.log(globalCat);
    // var prodSect = document.getElementById("prodSect");
        // console.log(globalCat.categories[0].name);
        var display = "";
        for (var i = 0; i < globalProd.products.length; i++) {
          console.log(globalProd.products[i].category_id);


          display += `<div class="product-sec">
                          <h3>Product:</h3>
                          <p class="name">${globalProd.products[i].name}</p>
                          <h3 class>Department:</h3>
                          <p id="category_id">${catAlign(globalProd.products[i].category_id, globalCat)}</p>
                          <h3>Price:</h3>
                          <p class="price">${globalProd.products[i].price}</p>
                      </div>`
        }
        document.getElementById("prodSect").innerHTML = display;
}

function catAlign(num, cat) {
    // console.log(cat.categories);
    for (var i = 0; i < cat.categories.length; i++) {
        console.log(num)
        if (num === 1) {
            return cat.categories[0].name

        } else if (num === 2){
            return cat.categories[1].name

        } else {
            return cat.categories[2].name
        }
    }

}
