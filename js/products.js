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
  },{
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
  },{
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
  for (let i = 0; i < 12; i++) {
    let bikeClone = $("#cardTemp").clone();
    console.log(bikeClone);
    let bikeID = "bike_" + i;
    // console.log(bikeID);
    let img = bikes[i].img;
    // console.log(img);
    let gears = bikes[i].gears;
    // console.log(gears);
    let brand = bikes[i].brand;
    // console.log(brand);
    let description = bikes[i].description;
    // console.log(description);
    let frame_size = bikes[i].frame_size;
    // console.log(frame_size);
    let price = bikes[i].price;
    // console.log(price);
    let anchorID = "bike_anchor_" + i;

    bikeClone.attr("id", bikeID);
    // console.log(bikeClone);
    bikeClone.find(".bikeImg").attr("src", img);
    bikeClone.find(".gears").text(gears);
    // console.log(bikeClone.find(".gears").text());
    bikeClone.find(".brand").text(brand);
    // console.log(bikeClone.find(".brand").text());
    bikeClone.find(".description").text(description);
    // console.log(bikeClone.find(".description").text());
    bikeClone.find(".frame_size").text(frame_size);

    bikeClone.find(".price").attr("id", anchorID);
    bikeClone.find(".price").text("Ride me home for: " + price);
    // console.log(bikeClone);
    if (i < 3){
      $("#row0").append(bikeClone);
    }
    else if (i < 6){
      $("#row1").append(bikeClone);
    }
    else if (i < 9){
      $("#row2").append(bikeClone);
    }
    else if (i < 11){
      $("#row3").append(bikeClone);
    }
  }
}
renderBikes(bikes);
