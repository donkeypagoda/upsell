// index javascript

//carousel
$(document).ready(function(){
  $('.carousel').carousel({ fullWidth: true, duration: 300, indicators: true});
  $('.carousel').carousel('next');
  $('.carousel').carousel('prev');
});

let timer;

autoplay()
function autoplay() {
    $('.carousel').carousel('next');
    timer = setTimeout(autoplay, 5000);
    console.log("autoplay invoked");
}

$('.carousel').on('mousedown', function(event) {
  clearTimeout(timer);
  console.log("timer reset");
  console.log(event);
});

$('.carousel').on('mouseup', function(event) {
  timer = setTimeout(autoplay, 5000);
  console.log("timer restarted");
  console.log(event);
})

//feature bikes
function renderBikes(bikes){
  for (let i = 0; i < 12; i++) {
    let bikeClone = $("#featureTemp").clone();
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
      $("#featureRow").append(bikeClone);
    }

  }
}
renderBikes(bikes);
