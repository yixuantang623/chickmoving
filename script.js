$(document).ready(function(){
  $('.showmenu').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
  })
})

$(document).ready(function(){
  $('.item').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('menu-show');
  })
})

$(".item1").click(function () {
  document.location.hash = "#header";
  
});

$(".item2").click(function () {
  document.location.hash = "#aboutus";
  
});

$(".item3").click(function () {
  document.location.hash = "#features";
  
});

$(".item4").click(function () {
  document.location.hash = "#service";
  
});

$(".item5").click(function () {
  document.location.hash = "#process";
  
});

$(".item6").click(function () {
  document.location.hash = "#price";
  
});

$(".item7").click(function () {
  document.location.hash = "#review";
  
});

$(".item8").click(function () {
  document.location.hash = "#faq";
  
});

$(".item10").click(function () {
  document.location.hash = "#photo";
  
});

$(".item9").click(function () {
  document.location.hash = "#footer";
  
});


$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    
  }
});