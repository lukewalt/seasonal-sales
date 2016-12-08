// Your job is to build a web page thsat lists all of the products,
// the name of the department it's in, and the price.
// Additionally put a <select> element at the top of the page that contains all possible values
// of the season_discount key in the categories file. As soon as you select one of the seasons,
// all prices on the page should immediately be discounted by the corresponding percentage.


//established global variables for objects
var globalProd;
var globalCat;


//product request
var productData = new XMLHttpRequest();
productData.addEventListener("load", getProducts);
productData.open("GET", "products.json");
productData.send();

//function for product requet called above
function getProducts(e) {

    //first set of data returns
    console.log(1 + " Products");

    //sets product data to global variable
    globalProd = JSON.parse(e.target.responseText);

    //categories request inside of function for product request to make sure they load in that order
    var categoryData = new XMLHttpRequest();
    categoryData.addEventListener("load", categoryRequest);
    categoryData.open("GET", "categories.json");
    categoryData.send();

}

//function for category request that is called above
function categoryRequest(e) {

    //second set of data to return
    console.log(2 + " Categories");

    //sets category data to global varibale
    globalCat = JSON.parse(e.target.responseText);
    //empty var to store htlm chunks
    var display = "";

        //creates the divs with the iterations of each name, department, and price
        for (var i = 0; i < globalProd.products.length; i++) {
          display += `<div class="product-sec">
                          <h3>Product:</h3>
                          <p class="name">${globalProd.products[i].name}</p>
                          <h3 class>Department:</h3>
                          <p id="category_id">${catAlign(globalProd.products[i].category_id, globalCat)}</p>
                          <h3>Price:</h3>
                          <p class="price">${globalProd.products[i].price}</p>
                      </div>`
        }

    //sets innerHTML to sections of divs created in the for loop
    document.getElementById("prodSect").innerHTML = display;
}

//asks for product category_id NUMBER and OBJECT categories and
//returns the name of the category with the corresponding number
function catAlign(num, cat) {
    for (var i = 0; i < cat.categories.length; i++) {

        if (num === 1) {
            return cat.categories[0].name

        } else if (num === 2){
            return cat.categories[1].name

        } else {
            return cat.categories[2].name
        }
    }

}
