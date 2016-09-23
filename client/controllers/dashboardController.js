app.controller('dashboardController', 
  ['$scope', 'questionFactory', '$location', '$routeParams', '$cookies',
  function($scope, questionFactory, $location, $routeParams, $cookies) {
  
  
  /* Private Variables */
  
  
  /* Private Methods */
  var cookieCheck = function() {
    if (!$cookies.getObject("currentUser")) {
      $location.url('/index');
    }
  }

  var index = function() {
  	$scope.currentUser = $cookies.getObject('currentUser');
    questionFactory.getQuestions( function(questions) {
      $scope.questions =  questions;
    });
  }

  /* Public Variables */

  /* Public Methods */
  $scope.logout = function() {
    $cookies.remove("currentUser");
    $location.url('/index');
  }

  /* On Load */
  cookieCheck();
  index();

}]); 