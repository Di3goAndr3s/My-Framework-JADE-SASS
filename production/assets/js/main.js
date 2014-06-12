"use strict";
var App = angular.module('securityinafrica', ['ngRoute', 'placeholders', 'ui.bootstrap', 'xeditable']);


App.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.php',
      controller: 'MainCtrl'
    })
    .when('/aboutus', {
      templateUrl: 'views/aboutus.php',
      controller: 'MainCtrl'
    })
    .when('/ourservices', {
      templateUrl: 'views/ourservices.php',
      controller: ''
    })
    .when('/register', {
      templateUrl: 'views/register.php',
      controller: 'MainCtrl'
    })
    .when('/vacancylist', {
      templateUrl: 'views/vacancylist.php',
      controller: 'MainCtrl'
    })
    .when('/agencyprofile', {
      templateUrl: 'views/agencyprofile.php',
      controller: 'MainCtrl'
    })
     .when('/directories', {
      templateUrl: 'views/directories.php',
      controller: 'MainCtrl'
    })
    .when('/blog', {
      templateUrl: 'views/blog.php',
      controller: 'MainCtrl'
    })
   .when('/calendar', {
      templateUrl: 'views/calendar.php',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});



function LoremController($scope) {



    $scope.enableModal = function() {
    $scope.showConfirm = true;
    $scope.showOverlay = true;
  };
  $scope.disableModal = function() {
    $scope.showConfirm = false;
    $scope.showOverlay = false;
  };
    $scope.isInvalid = function(field){
    return $scope.workForm[field].$invalid && $scope.workForm[field].$dirty;
  };
  $scope.isValid = function(field){
    return $scope.workForm[field].$valid && $scope.workForm[field].$dirty;
  };

   $scope.user = {
    name: 'Lorem ipsum dolor sit amet',
    email: 'loremipsum@dolorsit.com',
    telephone: '(57) + (1) 2345467',
    website: 'http://www.loremipsumdolor.com',
    twitter: '@loremipsum',
    zipcode: '57',
    description: ''


  };


  $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, vero, expedita, repellat sit laborum totam atque nulla labore id reprehenderit magni laudantium iure odio debitis consequatur molestiae dolorum voluptatum porro. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  $scope.date = '12/03/2014';
   $scope.year = '201';
     $scope.name = '';
    $scope.phone = '';
    $scope.mail = '';
  $scope.advertfile ='Adjunte su hoja de vida en formato .PDF o .DOC';

  }



angular.module('ng').filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });



$(document).ready(function (e) {

  $('.footer-ahorranito').ahorranito({
    type:1,
    fontColor1:'#fff',
    height: 30
  });


 $('.modalContact').click(function (e) {
    $(".overlay").animate({
      right: '0'
    }, 400, 'easeInQuad');
    $(".modalBox").animate({
      left: '50%'
    }, 600, 'easeInQuad');


  });




  $('.overlay, .closeModalbox, .newUser').click(function (e) {
    $(".overlay").animate({
      right: '-3000px'
    }, 400, 'easeInQuad');
    $(".modalBox, .modalBoxcalendar, .modalBoxprofile, .modalBoxpolitics, .modalBoxlogin, .modalBoxremember").animate({
      left: '-3000px'
    }, 400, 'easeInQuad');


  });


  $('.openModallogin').click(function (e) {
    $(".overlay").animate({
      right: '0'
    }, 400, 'easeInQuad');
    $(".modalBoxlogin").animate({
      left: '50%'
    }, 600, 'easeInQuad');


  });

  $('.modalBoxremember .closeModallogin').click(function (e) {
    $(".modalBoxlogin").animate({
      left: '50%'
    }, 600, 'easeInQuad');
    $(".modalBoxremember").animate({
      left: '-3000px'
    }, 600, 'easeInQuad');
  });





   $('.openModalremember').click(function (e) {
   $(".modalBoxlogin").animate({
      left: '-3000px'
    }, 600, 'easeInQuad');
    $(".modalBoxremember").animate({
      left: '50%'
    }, 600, 'easeInQuad');


  });


    $('.openModalpolitics').click(function (e) {
    $(".overlay").animate({
      right: '0'
    }, 400, 'easeInQuad');
    $(".modalBoxpolitics").animate({
      left: '50%'
    }, 600, 'easeInQuad');


  });



});

App.controller('MainCtrl', function ($scope, $routeParams) {
  $scope.awesomeThings = [];


 $('.modalContact').click(function (e) {
    $(".overlay").animate({
      right: '0'
    }, 400, 'easeInQuad');
    $(".modalBox").animate({
      left: '50%'
    }, 600, 'easeInQuad');


  });



  $('.openModalcalendar').click(function (e) {
    $(".overlay").animate({
      right: '0'
    }, 400, 'easeInQuad');
    $(".modalBoxcalendar").animate({
      left: '50%'
    }, 600, 'easeInQuad');


  });

   $('.overlay, .closeModalbox').click(function (e) {
    $(".overlay").animate({
      right: '-3000px'
    }, 400, 'easeInQuad');
    $(".modalBox, .modalBoxcalendar, .modalBoxprofile, .modalBoxpolitics").animate({
      left: '-3000px'
    }, 400, 'easeInQuad');


  });


   $('.openModalprofile').click(function (e) {
    $(".overlay").animate({
      right: '0'
    }, 400, 'easeInQuad');
    $(".modalBoxprofile").animate({
      left: '50%'
    }, 600, 'easeInQuad');


  });



 $('.cuerpo-pop-up').hide();
    $('.fondo-pop-up').hide();
    $(function() {
        $('.pop-up').click(function() {
            $('.fondo-pop-up').fadeIn(300);
            $('.cuerpo-pop-up').addClass('zoomIn').fadeIn();
            setTimeout(function() {
                $(".cuerpo-pop-up").removeClass('zoomIn')
            }, 1000);
        });
    });
    $(function() {
        $('.cerrar').click(function() {
            $('.cuerpo-pop-up').addClass('zoomOut');
            setTimeout(function() {
                $(".cuerpo-pop-up").removeClass('zoomOut')
            }, 220);
            $('.cuerpo-pop-up').fadeOut(200);
            $('.fondo-pop-up').fadeOut(400);
        });
    });
    $(function() {
        $('.fondo-pop-up').click(function() {
            $('.cuerpo-pop-up').addClass('zoomOut');
            setTimeout(function() {
                $(".cuerpo-pop-up").removeClass('zoomOut')
            }, 220);
            $('.cuerpo-pop-up').fadeOut(200);
            $(this).fadeOut(400);
        });
    });

 $(function(){
$('.select-map li ul').hide();
$('.select-map li').hover(
function(){
$('.select-map li').not($('ul', this)).stop();
$('ul', this).slideDown('500');
},
function(){
$('ul', this).slideUp('500');
}
);
});



   $('.scrollClickbanner').click(function (e) {
    $('.bulletNav a:nth-of-type(2), .bulletNav a:nth-of-type(3)').removeClass('active');
    $('.bulletNav a:nth-of-type(1)').addClass('active');
    $.scrollTo('#scrollBanner', 1000, {
      easing: 'easeInOutBack',
      offset:-550
    });
  });

$('.scrollClickMapa').click(function (e) {
    $('.bulletNav a:nth-of-type(1), .bulletNav a:nth-of-type(3)').removeClass('active');
    $('.bulletNav a:nth-of-type(2)').addClass('active');
    $.scrollTo('#scrollMapa', 1000, {
      easing: 'easeInOutBack',
      offset:-60
    });
  });

 $('.scrollClickrss').click(function (e) {
    $('.bulletNav a:nth-of-type(1), .bulletNav a:nth-of-type(2)').removeClass('active');
    $('.bulletNav a:nth-of-type(3)').addClass('active');
    $.scrollTo('#scrollRss', 1000, {
      easing: 'easeInOutBack',
      offset:-60
    });
  });


  //Active Menu

  $('header ul li a').click(function (e) {
    $('header ul li a').removeClass('activeMenu');
    $(this).addClass("activeMenu");
  });

  $('header div:nth-of-type(1) a').click(function (e) {
    $('header ul li a').removeClass('activeMenu');
  });

  // Accordion

  $('div.accordion h2').click(function (e) {
    $(this).next('article').toggleClass('openAccordion');
    $(this).next('article:nth-of-type(1)').removeClass('closeAccordion');
    $(this).toggleClass('activeAccordion');
    $(this).next('article').removeClass('openFormbelong');
    $(this).removeClass('closeAccordion');
  });

   $('div.calendarEvents h2').click(function (e) {
    $(this).next('article').toggleClass('openAccordion');
    $(this).next('article:nth-of-type(1)').removeClass('closeAccordion');
    $(this).toggleClass('activeAccordion');
    $(this).next('article').removeClass('openFormbelong');
    $(this).removeClass('closeAccordion');
  });

//
    $('div.profileTabs div.tabsItems a:nth-of-type(1) ').click(function (e) {
    $(this).parent('div.tabsItems').next('div.tabsContainer').children('div.tabContent:nth-of-type(1)').hide();

  });



   $('.directories article').mouseenter(function (e) {
     $(this).children('a.over').animate({bottom: "0px"}, 300, 'easeInExpo');
  });

  $('.directories article').mouseleave(function (e) {
     $(this).children('a.over').animate({bottom: "-180px"}, 100, 'easeInExpo');
  });




  $('div.accordion article:nth-of-type(1) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick1').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });

   $('.scrollClick1').click(function (e) {
    $.scrollTo('#scrollDown1', 1000, {
      easing: 'easeInOutBack',
      offset: -10

    });
  });

    $('div.accordion article:nth-of-type(2) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick2').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });


   $('.scrollClick2').click(function (e) {
    $.scrollTo('#scrollDown2', 1000, {
      easing: 'easeInOutBack',
      offset:-10
    });
  });


      $('div.accordion article:nth-of-type(3) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick3').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });


   $('.scrollClick3').click(function (e) {
    $.scrollTo('#scrollDown3', 1000, {
      easing: 'easeInOutBack',
      offset:-10
    });
  });


        $('div.accordion article:nth-of-type(4) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick4').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });

   $('.scrollClick4').click(function (e) {
    $.scrollTo('#scrollDown4', 1000, {
      easing: 'easeInOutBack',
      offset:-10
    });
  });

        $('div.accordion article:nth-of-type(5) a.btnYellow').toggle(function (e) {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Close").stop();
    setTimeout(function() {$('.scrollClick5').click();}, 400);
  }, function () {
    $(this).parent('.openAccordion').toggleClass('openFormbelong');
    $(this).text("Belong").stop();
  });

     $('.scrollClick5').click(function (e) {
    $.scrollTo('#scrollDown5', 1000, {
      easing: 'easeInOutBack',
      offset:-10
    });
  });

    $('div.showConfirm').click(function (e) {
     $('article').removeClass('openFormbelong');
     $('div.accordion article a.btnYellow').text("Belong").stop();
  });


});
