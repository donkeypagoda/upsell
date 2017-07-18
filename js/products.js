// products.js

// render the page to start
renderBikes(bikes);

// event listener
$("#dropdown1").on('click', function(event) {
  let sortType = event.target.id;
  console.log(sortType);
  bikeSort(sortType);
});

// render function
function renderBikes(bikes){
  $("#row0").empty();
  $("#row1").empty();
  $("#row2").empty();
  $("#row3").empty();

  // COMMENT: Putting the for loop below in a function will make your code cleaner,
  // COMMENT: Also, you could have used a .map().
  // COMMENT: A .map() is useful for when you want to transform all the elemnts in an
  // COMMENT: array, and keep the same order
  for (let i = 0; i < 12; i++) {
    let bikeClone = $("#cardTemp").clone();
    let bikeID = "bike_" + i;
    let img = bikes[i].img;
    let gears = bikes[i].gears;
    let brand = bikes[i].brand;
    let description = bikes[i].description;
    let frame_size = bikes[i].frame_size;
    let price = bikes[i].price;
    let anchorID = "bike_anchor_" + i;

    bikeClone.attr("style", "");
    bikeClone.attr("id", bikeID);
    bikeClone.find(".bikeImg").attr("src", img);
    bikeClone.find(".gears").text(gears);
    bikeClone.find(".brand").text(brand);
    bikeClone.find(".description").text(description);
    bikeClone.find(".frame_size").text("Frame Size: " + frame_size);
    bikeClone.find(".price").attr("id", anchorID);
    bikeClone.find(".price").text("$" + price);
    if (i < 3){
      $("#row0").append(bikeClone);
    }
    else if (i < 6){
      $("#row1").append(bikeClone);
    }
    else if (i < 9){
      $("#row2").append(bikeClone);
    }
    else if (i < 12){
      $("#row3").append(bikeClone);
    }
  }
}


// COMMENT: Good use of the .sort()
function bikeSort(sortType){
  let newBikes = [];
  if (sortType === "all"){
    newBikes = bikes.sort(function(a, b){
      return a.inventory - b.inventory;
    });
    renderBikes(newBikes);
  }
  else if (sortType === "low"){
    newBikes = bikes.sort(function(a, b) {
      return a.price - b.price;
    });
    renderBikes(newBikes);
  }
  else if (sortType === "high") {
    newBikes = bikes.sort(function(a, b) {
      return b.price - a.price;
    });
    renderBikes(newBikes);
  }
}
