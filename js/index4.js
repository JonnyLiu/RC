$('.main-menu').click(function(){
    $(this).next().slideToggle();
    var has = $(this).find('.angle-icon').hasClass("fa-rotate-90");
    if(has){
        $(this).find('.angle-icon').removeClass("fa-rotate-90");
    }else{
        $(this).find('.angle-icon').addClass("fa-rotate-90");
    }
});
var menuwidth = $('.menu').width();
var sreenwidth = window.screen.width;
var framewidth = sreenwidth - menuwidth;
$('iframe').width(parseInt(framewidth) );
function show(url){
    $('iframe').attr('src',url);
}