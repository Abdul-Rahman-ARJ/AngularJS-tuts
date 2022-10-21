(function () {
  var product = function ($http) {
    var getProduts = function () {
      return $http.get("https://localhost:44331/api/values")
      // https://localhost:44331/api/values
        .then(function (response) {
          return response.data;
        });
    };

    var url = 'https://localhost:44331/api/values',config='application/json';

     var postProduts = function (data) {
      return $http.post(url,JSON.stringify(data) ,config)
        .then(function (response) {
          return response.data;
        });
    };

    return { getProduts: getProduts  , postProduts: postProduts };
  };

  var module = angular.module("ProductViewer");
  module.factory("product", product);

}());