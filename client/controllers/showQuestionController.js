app.controller('showQuestionController', 
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
    questionFactory.getQuestion( $routeParams.id, function(question) {
      $scope.question =  question;
      $scope.alreadyLiked = {};
      for(var i = 0; i < $scope.question._answers.length; i++) {
        if ($scope.question._answers[i]._likes.includes($scope.currentUser._id)) {
          $scope.alreadyLiked[$scope.question._answers[i]._id] = true;
        }
      }
    });
  }


  /* Public Variables */

  /* Public Methods */
  $scope.addLike = function(answerId) {
    var currentUser = $cookies.getObject('currentUser');
    console.log(answerId)
    questionFactory.addLike(currentUser, answerId, function(answer) {
      cookieCheck();
      index();
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