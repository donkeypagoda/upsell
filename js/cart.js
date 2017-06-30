// cart javascript

// event listener
$("#dropdown1").on('click', function(event) {
  let sortType = event.target.id;
  console.log(sortType);
  bikeSort(sortType);
});
