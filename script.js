$(document).ready(() => {

   $('.slider-btn-1').click(function () {
      $('.bg-img').css('background-image', 'url("./image/banner-8 1.png")')
      console.log('object');
   })
   $('.slider-btn-2').click(function () {
      $('.bg-img').css('background-image', 'url("./image/Slider--1.png")')
      console.log('object');
   })

   // search button
   // $('.search').click(function (e) {
      
   //       $('.search-details').toggle()
      

   // })

   $('.search').click(function (e) {
      if ($('.search-details').css('display') === ('none')) {
         $('.search-details').css('display', 'block')
      }else{
         $('.search-details').css('display', 'none')
      }

   })

})

