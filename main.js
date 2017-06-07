var currentArticle;
var prevArticle; 
var currentDot; 
var prevDot; 
var nextArticle;
var nextDot;
var switchCssClassesn = function(currentArticle, nextArticle, current){
    currentArticle.removeClass('current');
    nextArticle.addClass('current');
   };
var switchCssClassesndot = function(currentDot, nextDot, activedot){
    currentDot.removeClass('activedot');
    nextDot.addClass('activedot');
    };
var switchCssClassesp = function(currentArticle, prevArticle, current){
    currentArticle.removeClass('current');
    prevArticle.addClass('current');
   };
var switchCssClassespdot = function(currentDot, prevDot, activedot){
currentDot.removeClass('activedot');
    prevDot.addClass('activedot');
    };
var main = function() {
    $('.article').click(function() { 
    $('.article').removeClass('current');  
    $('.ppp').hide();
    $(this).addClass('current');
    $(this)('.ppp').show();
  });
$('.arrow-next').click(function(){  
     currentArticle = $('.current');
     nextArticle =currentArticle.next();
     currentDot = $('.activedot');
     nextDot = currentDot.next();
    if(nextArticle.length == 0){
      nextArticle = $('.article').first();
      nextDot = $('.dot').first();
        }
    switchCssClassesn (currentArticle, nextArticle,0, 'current')
    switchCssClassesndot (currentDot, nextDot,0, 'activedot')     
});
$('.arrow-prev').click(function() {
     currentArticle = $('.current');
     prevArticle =currentArticle.prev();
     currentDot = $('.activedot');
     prevDot = currentDot.prev();
    if(prevArticle.length == 0){
      prevArticle = $('.article').last();
      prevDot = $('.dot').last();
    }
    switchCssClassesp (currentArticle, prevArticle,0, 'current')
    switchCssClassespdot (currentDot, prevDot,0, 'activedot')
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
    switchCssClassesn (currentArticle, nextArticle,0, 'current')
    switchCssClassesndot (currentDot, nextDot,0, 'activedot')  
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
    switchCssClassesp (currentArticle, prevArticle,0, 'current')
    switchCssClassespdot (currentDot, prevDot,0, 'activedot') 
}
});
}
$(document).ready(main);

