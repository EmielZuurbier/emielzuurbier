/*global angular, $, TweenLite, TimelineMax, TweenMax, Elastic, Linear, Power1, alert*/

var app = angular.module('portfolio', ['ngAnimate', 'ngTouch', 'ngRoute']);

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'mainCtrl'
        })
        .when('/projects', {
            templateUrl: 'views/projects.html',
            controller: 'projectCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'mainCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'mainCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

app.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    "use strict";
    
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) === path) {
            return 'active';
        } else {
            return '';
        }
    };
    
}]);

app.controller('mainCtrl', ['$scope', function ($scope) {
    "use strict";
    
    $scope.subtitle = document.getElementsByClassName('subtitle');
    var tl = new TimelineMax({repeat: -1, repeatDelay: 5});
    
    tl.to($scope.subtitle, 0.5, {text: "Web Designer", ease: Power1.easeInOut, delay: 0})
        .to($scope.subtitle, 0.5, {text: "Web ", ease: Power1.easeInOut, delay: 5})
        .to($scope.subtitle, 0.5, {text: "Web Developer", ease: Power1.easeInOut, delay: 0})
        .to($scope.subtitle, 0.5, {text: "Web ", ease: Power1.easeInOut, delay: 5})
        .to($scope.subtitle, 0.5, {text: "Web Coder", ease: Power1.easeInOut, delay: 0})
        .to($scope.subtitle, 0.5, {text: "Web ", ease: Power1.easeInOut, delay: 5})
        .to($scope.subtitle, 0.5, {text: "Web Enthousiast", ease: Power1.easeInOut, delay: 0})
        .to($scope.subtitle, 0.5, {text: "Web ", ease: Power1.easeInOut, delay: 5})
        .to($scope.subtitle, 0.5, {text: "Web Creator", ease: Power1.easeInOut, delay: 0})
        .to($scope.subtitle, 0.5, {text: "Web ", ease: Power1.easeInOut, delay: 5})
        .to($scope.subtitle, 0.5, {text: "Web Explorer", ease: Power1.easeInOut, delay: 0})
        .to($scope.subtitle, 0.5, {text: "Web ", ease: Power1.easeInOut, delay: 5})
        .to($scope.subtitle, 0.5, {text: "Web Designer", ease: Power1.easeInOut, delay: 0});
 
}]);

app.controller('projectCtrl', ['$scope', function ($scope) {
    "use strict";
    
    $scope.select = {};
    $scope.active = false;
    $scope.projectSelect = function (id) {
        if ($scope.active === false) {
            $scope.select = id;
            $scope.hide = true;
            $scope.active = true;
        } else if ($scope.active === true) {
            $scope.select = {};
            $scope.hide = false;
            $scope.active = false;
        }
    };
    
    $scope.projects = [
        {
            id: 1,
            title: "Html",
            src: "media/project1.jpg",
            content: "HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications."
        },
        {
            id: 2,
            title: "Css",
            src: "media/project2.jpg",
            content: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document."
        },
        {
            id: 3,
            title: "Javascript",
            src: "media/project3.jpg",
            content: "JavaScript (/ˈdʒɑːvəˌskrɪpt/) is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, it is one of the three essential technologies of World Wide Web content production; the majority of websites employ it."
        }
    ];
    
}]);







