var App = angular.module('securityinafrica', ['ngRoute', 'placeholders', 'ui.bootstrap', 'xeditable']);


App.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    })
    .when('/aboutus', {
      templateUrl: 'views/aboutus.html',
      controller: 'MainCtrl'
    })
    .when('/ourservices', {
      templateUrl: 'views/ourservices.html',
      controller: ''
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'MainCtrl'
    })
    .when('/vacancylist', {
      templateUrl: 'views/vacancylist.html',
      controller: 'MainCtrl'
    })
    .when('/agencyprofile', {
      templateUrl: 'views/agencyprofile.html',
      controller: 'MainCtrl'
    })
     .when('/directories', {
      templateUrl: 'views/directories.html',
      controller: 'MainCtrl'
    })
    .when('/blog', {
      templateUrl: 'views/blog.html',
      controller: 'MainCtrl'
    })
   .when('/calendar', {
      templateUrl: 'views/calendar.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});





