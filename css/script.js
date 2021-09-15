// JavaScript Document


function resizenow() {
    var browserwidth = jQuery(window).width();
    var browserheight = jQuery(window).height();
    jQuery('.bonfire-pageloader-icon').css('right', ((browserwidth - jQuery(".bonfire-pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".bonfire-pageloader-icon").height())/2));
};
resizenow();


jQuery(window).resize(function(){
     resizenow();
});
function resizenow() {
    var browserwidth = jQuery(window).width();
    var browserheight = jQuery(window).height();
    jQuery('.bonfire-pageloader-icon').css('right', ((browserwidth - jQuery(".bonfire-pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".bonfire-pageloader-icon").height())/2));
};
resizenow();

jQuery("html").addClass('bonfire-html-onload');

jQuery(document.body).on("touchmove", function(e) {
    e.preventDefault();
});


var scrollPosition = [
self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

jQuery(window).load(function() {

    setTimeout(function(){
    jQuery(".bonfire-pageloader-icon").addClass('bonfire-pageloader-icon-hide');
    },500);

    setTimeout(function(){
        jQuery(document.body).unbind('touchmove');

        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-fade');

        jQuery("html").removeClass('bonfire-html-onload');
    },750);

    setTimeout(function(){

        jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-hide');

    },1500);

});


//backtotop

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


//backtotop


//slide nav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//slide nav


