/*var Application = function() {
    function init() {
        console.log("init");
    }
    function scrollPage(){
        console.log("scrolling");
    }
    return {
        init: init,
        scrollPage:scrollPage,
    }
};

var app = new Application();
app.init();*/

//slider that goes down. Works. DNT.
$(document).ready(function () {
    function getHref(element) {
        return $(element).attr('href');
    }

    var links = $('.headerMenuDiv').find('a');
    links.on('click', function (event) {
        event.preventDefault();
        var href = getHref(this);
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 2000);
    });
    var linksMenu = $('.mainMenu').find('a');
    linksMenu.on('click', function (event) {
        event.preventDefault();
        var href = getHref(this);
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 2000);
    });
    var myNavigation = $('.nav');
    console.log(myNavigation);
    var myMenuPosition = myNavigation.offset().top;
    console.log(myMenuPosition);

    $(document).on('scroll', function () {
        var scrollPosition = $(window).scrollTop();
        console.log(scrollPosition);

        if (scrollPosition > myMenuPosition) {
            myNavigation.addClass('sticky');
        } else {
            myNavigation.removeClass('sticky');
        }
    });
});
    //$(".scrollerContact").on('click', function (event) {
    //    event.preventDefault();
    //    function getHref(){
    //        $("div.headerMenuDiv").each(function() {
    //            var a_href = $("div.headerMenuDiv").find('a').attr('href');
    //            console.log("Href is: " +a_href);
    //            });
    //    }
    //    $('html, body').animate({
    //        scrollTop: $(getHref()).offset().top
    //        //oddaj href jako id;
    //    }, 2000);
    //});
    //$(".scrollerBlog").click(function () {
    //    $('html, body').animate({
    //        scrollTop: $("#partEight").offset().top
    //    }, 2000);
    //});
