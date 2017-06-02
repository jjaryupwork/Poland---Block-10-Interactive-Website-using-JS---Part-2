var main = function() {
    $('.article').click(function() { 
    $('.article').removeClass('current');  
    $('.description').hide();
    var currentDot = $('.active-dot');

    $(this).addClass('current');
    $(this).children('.description').show();
  });
  
$('.arrow-next').click(function(){
    var currentArticle = $('.current');
    var nextArticle =currentArticle.next();
    
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
    
    if(nextArticle.length == 0){
        nextArticle = $('.article').first();
        nextDot = $('.dot').first();
        }
    
   currentArticle.change().removeClass('current');
    nextArticle.change().addClass('current');
    
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
});
$('.arrow-prev').click(function() {
    var currentArticle = $('.current');
    var prevArticle =currentArticle.prev();
    
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
    
    if(prevArticle.length == 0){
        prevArticle = $('.article').last();
        prevDot = $('.dot').last();
    }

   currentArticle.change().removeClass('current');
    prevArticle.change().addClass('current');
    
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });


   $(document).keypress(function(event) {
     if(event.which === 111) {
    $('.current').children('.description').toggle();
  }
  else if(event.which === 110) {
    var currentArticle = $('.current');
    var nextArticle = currentArticle.next();  

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
     
   if(nextArticle.length == 0){
        nextArticle = $('.article').first();
        nextDot = $('.dot').first();
        }

    currentArticle.removeClass('current');
     nextArticle.addClass('current');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  
}
  else if(event.which === 98) {
    var currentArticle = $('.current');
    var prevArticle = currentArticle.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
     

    if(prevArticle.length == 0){
        prevArticle = $('.article').last();
        prevDot = $('.dot').last();
    }


     currentArticle.removeClass('current');
    prevArticle.addClass('current');

   currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  
}

});
}
$(document).ready(main);


