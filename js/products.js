// products.js

function renderBikes(bikes){
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
    bikeClone.find(".price").text("Ride me home for: " + price);
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
renderBikes(bikes);
