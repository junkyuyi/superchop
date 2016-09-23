app.controller('newAnswerController', 
  ['$scope', 'questionFactory', '$location', '$routeParams', '$cookies', 
  function($scope, questionFactory, $location, $routeParams, $cookies) {
  
  /* Private Methods */

  /* Public Variables */
  var cookieCheck = function() {
    if (!$cookies.getObject("currentUser")) {
      $location.url('/index');
    }
  }

  var index = function() {
    questionFactory.getQuestion( $routeParams.id, function(question) {
      $scope.question =  question;
    });
  }

  // /* Public Methods */
  $scope.addAnswer = function () {
    $scope.newAnswer._user = $cookies.getObject("currentUser")._id;
    questionFactory.addAnswer($routeParams.id, $scope.newAnswer, function(answer){
        $scope.newAnswer = {};
        $location.url(`/question/${$routeParams.id}`);
    });
  }

  $scope.logout = function() {
    $cookies.remove("currentUser");
    $location.url('/index');
  }

  /* On Load */
  cookieCheck();
  index();
}]); 