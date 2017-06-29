// products.js
// image, brand, gears, frame-size, price
let bikes = [
  {
  img: "http://lorempixel.com/400/200/",
  brand: "Badass Bikes",
  gears: "24 speed",
  frame_size: "700cm",
  price: "£350",
  description: "Everyone will love you and give you free money & drugs if you buy this bike."
  },{
  img: "http://lorempixel.com/400/200/",
  brand: "Psycho Psycles",
  gears: "fixy",
  frame_size: "4in",
  price: "¥5768",
  description: "Have no fear, a rad bike is here."
  },{
  img: "http://lorempixel.com/400/200/",
  brand: "Wheels & Stuff",
  gears: "3.7gears",
  frame_size: "footlong",
  price: "¢12",
  description: "The wheels on the bike go round and round, round and round."
},{
  img: "http://lorempixel.com/400/200/",
  brand: "Hot Wheels",
  gears: "2πr²",
  frame_size: "itsy bitsy",
  price: "€3,458",
  description: "I've got a bike. You can ride it if you like. It's got a basket, a bell that rings and Things to make it look good. I'd give it to you if I could, but I borrowed it."
}
];

function renderBikes(bikes){
  for (let i = 0; i < bikes.length; i++) {
    let bikeClone = $(".cardTemp").clone();
    let bikeID = "bike_" + i;
    let img = bikes[i].img;
    let gears = bikes[i].gears;
    let brand = bikes[i].brand;
    let description = bikes[i].description;
    let frame_size = bikes[i].frame_size;
    let price = bikes[i].price;
    bikeClone.find(".bikeImg").attr("src", bikes[i].img);
    bikeClone.find(".gears").text(bikes[i].gears);
    bikeClone.find(".brand").text(bikes[i].brand);
    bikeClone.find(".description").text(bikes[i].description);
    bikeClone.find(".frame_size").text(bikes[i].frame_size);
    bikeClone.find(".price").attr("id", BikeID);
    bikeClone.find(".price").text("Ride me home for: " + bikes[i].price);
    if (i < 3){
      $("#row0").append(bikeClone);
    }
    else if (i < 6){
      $("#row1").append(bikeClone)
    }
    else if (i < 9){
      $("#row2").append(bikeClone)
    }
    else if (i < 11){
      $("#row3").append(bikeClone)
    }
  }
}
