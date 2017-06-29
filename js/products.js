// products.js
// image, brand, gears, frame-size, price
let prodObjArray = [
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
  description: "I've got a bike. You can ride it if you like. It's got a basket, a bell that rings and Things to make it look good. I'd give it to you if I could, but I borrowed it. You're the kind of girl that fits in with my world."
}
];

// maybe this is a bad idea below, maybe it shouldn't be totally dynamic, maybe we should just do 10-12 bikes
// and have a fixed inventory at that?

// function renderProducts(prodObjArray){
//   const bikeCase = $("#bikeCase");
//   for(const bike in bikes){
//     let bikeRow = $("<div>").attr("class", "row");
//     let bikeDiv = $("<div>").attr("class", "col s12 m6 l3");
//     let bikeCard = $("<div>").attr("class", "card");
//     let bikeImg
//   }
// }
