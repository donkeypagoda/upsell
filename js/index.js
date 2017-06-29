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

// $('.carousel').on('wheel', function() {
//   timer = setTimeout(autoplay, 5000);
//   console.log("wheel event");
// });

//  $('.carousel').carousel('next', 3); // Move next n times.
//  // Previous slide
//  $('.carousel').carousel('prev', 4); // Move prev n times.
//  // Set to nth slide
//  $('.carousel').carousel('set', 4);


 // $(document).ready(function(){
 //   $('.carousel').carousel({indicators: true, dist: 0, shift: 100, padding: 1, noWrap: true,});
 //   $('.carousel').carousel('set', 1);
 // });
