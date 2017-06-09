var currentArticle = $('.current');
var prevArticle = currentArticle.prev();
var currentDot = $('.current');
var prevDot = currentDot.prev();
var nextArticle = currentArticle.next();
var nextDot = currentDot.next();
var letterOCode = 111;
var letterNCode = 110;
var letterBCode = 98;

var nextEventHandler = function() {
    currentArticle = $('.current');
    nextArticle = currentArticle.next();
    currentDot = $('.activedot');
    nextDot = currentDot.next();
    if (nextArticle.length == 0) {
        nextArticle = $('.article').first();
        nextDot = $('.dot').first();
    }
    switchCssClasses(currentArticle, nextArticle, 'current');
    switchCssClasses(currentDot, nextDot, 'activedot');
};

var prevEventHandler = function() {
    currentArticle = $('.current');
    prevArticle = currentArticle.prev();
    currentDot = $('.activedot');
    prevDot = currentDot.prev();
    if (prevArticle.length == 0) {
        prevArticle = $('.article').last();
        prevDot = $('.dot').last();
    }
    switchCssClasses(currentArticle, prevArticle, 'current');
    switchCssClasses(currentDot, prevDot, 'activedot');
}

var switchCssClasses = function(prevElement, nextElement, ClassName) {
    prevElement = prevElement.removeClass(ClassName);
    nextElement = nextElement.addClass(ClassName);
}

var main = function() {
    $('.article').click(function() {
        $('.article').removeClass('current');
        $('.description').hide();
        $(this).addClass('current');
        $(this).children('.description').show();
    });

    $('#rightarrow').click(function() {
        nextEventHandler()
    });

    $('#leftarrow').click(function() {
        prevEventHandler()
    });

    $(document).keypress(function(event) {
        if (event.which === letterOCode) {
            $('.current').children('.description').toggle();
        } else if (event.which === letterNCode) {
            nextEventHandler()
        } else if (event.which === letterBCode) {
            prevEventHandler()
        }


    });
}

$(document).ready(main);