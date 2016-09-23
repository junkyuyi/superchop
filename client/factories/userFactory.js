app.factory('userFactory', ['$http', function($http) {

  function UserConstructor() {
    var _this = this;

    this.login = function(user, callback) {
      $http.post('/login', user).then( function(res){
        if (typeof(callback) === 'function') {
          currentUser = res.data;
          callback(currentUser);
        }
      });
    };

  //   this.register = function(newUser, callback) {
  //     $http.post('/register', newUser).then(function(res){
  //       if (res.data.errors){
  //         console.log(res.data.errors)
  //       } else {
  //         if (typeof(callback) === 'function') {
  //           currentUser = res.data;
  //           console.log(currentUser);
  //           callback(currentUser);
  //         }
  //       }
  //     });
  //   }

  //   this.getCurrentUser = function() {
  //     if(!currentUser) {
        
  //     }
  //     return currentUser;
  //   }
  // }
  }
  return (new UserConstructor());
}]);