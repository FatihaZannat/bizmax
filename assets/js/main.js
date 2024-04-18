(function($){
'use strict'
/*
Template Name : Bizmax
---------------------------------------------------
Table of content:
---------------------------------------------------

1. Preloader
*/

/*--------------------------------------------------
script initialization
-----------------------------------------------------
*/
// $.exists = function (selector) {
//     return $(selector).length > 0
// }

$(window).on('load', function () {
    preloader()
})

$(function(){

})



/*------------------------------------------------
1.preloader
--------------------------------------------------*/
function preloader(){
    $('.cs_preloader_in').fadeOut()
    $('.cs_preloader').delay(5550).fadeOut('slow')
    // console.log('hello');
}




})(jQuery)