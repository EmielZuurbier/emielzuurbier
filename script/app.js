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
            controller: 'aboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
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
            content: "HyperText Markup Language"
        },
        {
            id: 2,
            title: "Css",
            src: "media/project2.jpg",
            content: "Cascading StyleSheets"
        },
        {
            id: 3,
            title: "Javascript",
            src: "media/project3.jpg",
            content: "Just ol' regular Javascript"
        }
    ];
    
    
    $scope.project = $('.project');
    TweenMax.staggerFrom($scope.project, 0.5, {scale: 0.8, opacity: 0, delay: 1, ease: Power1.easeOut, force3D: true}, 0.4);
    
}]);

app.controller('aboutCtrl', ['$scope', function ($scope) {
    "use strict";
}]);

app.controller('contactCtrl', ['$scope', function ($scope) {
    "use strict";
}]);

//app.directive('projects', function () {
//    "use strict";
//    return {
//        scope: {
//            info: '='
//        },
//        transclude: true,
//        templateUrl: 'views/project-single.html',
//        link: function (scope, element, attr) {
////            scope.select = function ($index) {
////                console.log($index);
////                return $index;
////            };
//        }
//    };
//});






