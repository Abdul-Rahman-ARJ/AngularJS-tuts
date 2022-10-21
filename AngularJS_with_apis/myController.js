(function () {

    var app = angular.module("ProductViewer");
    var MainController = function (
        $scope, product) {


        var productR = function (data) {
            $scope.products = data;
        };


        var onError = function (reason) {
            $scope.error = "Could not fetch the data.";
        };
        $scope.products = product.getProduts().then(productR, onError);
    };
    app.controller("MainController", MainController);

}());