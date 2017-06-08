var currentArticle;
var prevArticle; 
var currentDot; 
var prevDot; 
var nextArticle;
var nextDot;
var switchCssClasses = function(prevElement, nextElement, ClassName) {
  prevElement = prevElement.removeClass(ClassName);
  nextElement = nextElement.addClass(ClassName);
} 
var main = function() {
    $('.article').click(function() { 
    $('.article').removeClass('current');  
    $('.ppp').hide();
    $(this).addClass('current');
    $(this).children('.ppp').show();
  });
$('#rrow').click(function(){  
     currentArticle = $('.current');
     nextArticle =currentArticle.next();
     currentDot = $('.activedot');
     nextDot = currentDot.next();
    if(nextArticle.length == 0){
      nextArticle = $('.article').first();
      nextDot = $('.dot').first();
      }
    switchCssClasses( currentArticle, nextArticle,  'current' );
    switchCssClasses( currentDot, nextDot,  'activedot' );
});
$('#llow').click(function() {
     currentArticle = $('.current');
     prevArticle = currentArticle.prev();
     currentDot = $('.activedot');
     prevDot = currentDot.prev();
    if(prevArticle.length == 0){
      prevArticle = $('.article').last();
      prevDot = $('.dot').last();
      }
    switchCssClasses( currentArticle, prevArticle,  'current' );
    switchCssClasses( currentDot, prevDot,  'activedot' );
  });
   $(document).keypress(function(event) {
     if(event.which === 111) {
    $('.current').children('.ppp').toggle();
      }
  else if(event.which === 110) {
     currentArticle = $('.current');
     nextArticle = currentArticle.next();  
     currentDot = $('.activedot');
     nextDot = currentDot.next();
   if(nextArticle.length == 0){
     nextArticle = $('.article').first();
     nextDot = $('.dot').first();
      }
   switchCssClasses( currentArticle, nextArticle,  'current' );
    switchCssClasses( currentDot, nextDot,  'activedot' );  
      }
  else if(event.which === 98) {
     currentArticle = $('.current');
     prevArticle = currentArticle.prev();
     currentDot = $('.activedot');
     prevDot = currentDot.prev();
    if(prevArticle.length == 0){
      prevArticle = $('.article').last();
      prevDot = $('.dot').last();
       }
     switchCssClasses( currentArticle, prevArticle,  'current' );
    switchCssClasses( currentDot, prevDot,  'activedot' );
      }
});
}
$(document).ready(main);





  