(function () {
  var product = function ($http) {
    var getProduts = function () {
      return $http.get("http://localhost:44331/api/values")
        .then(function (response) {
          return response.data;
        });
    };

    return { getProduts: getProduts };
  };

  var module = angular.module("ProductViewer");
  module.factory("product", product);

}());