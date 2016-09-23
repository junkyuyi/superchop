app.factory('questionFactory', ['$http', function($http) {

  function QuestionConstructor() {
    var _this = this;

    this.getQuestions = function(callback) {
      $http.get('/questions').then( function(res){
        if (typeof(callback) === 'function') {
          var questions = res.data;
          callback(questions);
        }
      });
    };

    this.addQuestion = function(newQuestion, callback) {
      $http.post('/questions', newQuestion).then( function(res){
        if (typeof(callback) === 'function') {
          var question = res.data;
          callback(question);
        }
      });
    };

    this.addAnswer = function(questionId, newAnswer, callback) {
      $http.post(`/questions/${questionId}`, newAnswer).then( function(res){
        if (typeof(callback) === 'function') {
          var answer = res.data;
          callback(answer);
        }
      });
    };

    this.getQuestion = function(questionId, callback) {
      $http.get(`/questions/${questionId}`).then( function(res){
        if (typeof(callback) === 'function') {
          var question = res.data;
          callback(question);
        }
      });
    };

    this.addLike = function(user, answerId, callback) {
      
      $http.post(`/answers/${answerId}`, user).then( function(res){
        if (typeof(callback) === 'function') {
          var answer = res.data;
          callback(answer);
        }
      });
    };

  }

  return (new QuestionConstructor());
}]);