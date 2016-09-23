app.controller('loginController', 
  ['$scope', 'userFactory', '$location', '$routeParams', '$cookies', 
  function($scope, userFactory, $location, $routeParams, $cookies) {
  
  /* Private Variables */
  var index = function() {
    if ($cookies.getObject("currentUser")) {
      $location.url('/');
    }
  }
  /* Private Methods */

  /* Public Variables */

  /* Public Methods */
  $scope.login = function() {
    userFactory.login($scope.user, function(user) {
      if (user.name) {
        // write cookie
        $cookies.putObject("currentUser", user);
        $scope.user = {};
        $location.url('/');
      } else {
        $scope.user = {};
      }    
    });
  }

  /* On Load */
  index();
}]); 