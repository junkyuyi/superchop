app.controller('newQuestionController', 
  ['$scope', 'questionFactory', '$location', '$routeParams', '$cookies', 
  function($scope, questionFactory, $location, $routeParams, $cookies) {
  
  /* Private Methods */

  /* Public Variables */
  var cookieCheck = function() {
    if (!$cookies.getObject("currentUser")) {
      $location.url('/index');
    }
  }

  // /* Public Methods */
  $scope.addQuestion = function () {
  	$scope.newQuestion._user = $cookies.getObject("currentUser")._id;
  	questionFactory.addQuestion($scope.newQuestion, function(question){
      	$scope.newQuestion = {};
      	$location.url('/');
  	});
  }

  $scope.logout = function() {
    $cookies.remove("currentUser");
    $location.url('/index');
  }

  /* On Load */
  cookieCheck();
}]); 