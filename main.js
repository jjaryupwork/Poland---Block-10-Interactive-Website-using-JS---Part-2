var main = function() {
    $('.article').click(function() { 
    $('.article').removeClass('current');  
    $('h3').hide();
    

    $(this).addClass('current');
    $(this).children('h3').show();
  });
    var currentArticle = $('.current');
     var nextArticle =currentArticle.next();
     var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
    var currentArticle = $('.current');
    var prevArticle =currentArticle.prev();
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
    
var zzz = function(){
  /*var*/ currentArticle //= $('.current');
     /*var*/ nextArticle// =currentArticle.next();
    /* var*/ currentDot//= $('.active-dot');
    /*var*/ nextDot //= currentDot.next();
   
};

var yyy = function(){
    /* var*/ currentArticle// = $('.current');
    /*var */prevArticle// =currentArticle.prev();
    /*var*/ currentDot// = $('.active-dot');
   /* var*/ prevDot //= currentDot.prev();
   
};


  
$('.arrow-next').click(function(zzz){  
   // zzz(); 
   var currentArticle = $('.current');
     var nextArticle =currentArticle.next();
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
        
   
   
});
$('.arrow-prev').click(function(yyy) {
   //yyy();
     var currentArticle = $('.current');
    var prevArticle =currentArticle.prev();
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
  });


   $(document).keypress(function(event) {
     if(event.which === 111) {
    $('.current').children('h3').toggle();
  }
  else if(event.which === 110) {
   //zzz(); 
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
  // yyy(); 
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


