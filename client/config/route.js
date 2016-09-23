var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngPassword']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: '/partials/login.html',
      controller: 'loginController'
    })
    .when('/', {
      templateUrl: '/partials/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/new_question', {
      templateUrl: '/partials/newQuestion.html',
      controller: 'newQuestionController',
    })
    .when('/question/:id', {
      templateUrl: '/partials/showQuestion.html',
      controller: 'showQuestionController',
    })
    .when('/question/:id/new_answer', {
      templateUrl: '/partials/newAnswer.html',
      controller: 'newAnswerController'
    })
    .otherwise({
      redirectTo: '/'
    });
});