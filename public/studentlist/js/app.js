(function(){
  var app = angular.module('list', [ ]);

  app.controller('ListController', [ '$http',function($http) {
    var list = this;
    list.students = [ ];
    $http.get('/list').success(function(data) {
      list.students = data;
    });
  }]);
})();

