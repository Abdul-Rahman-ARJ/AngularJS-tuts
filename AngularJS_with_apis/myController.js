(function () {

    var app = angular.module("ProductViewer");
    var MainController = function (
        $scope, product) {


        var productR = function (data) {
            $scope.products = data;
        };
        var Postproduct = function (data) {
            $scope.products = data;
        };


        var onError = function (e) {
            $scope.error = e;
        };

        var handleGet = () => {
            product.getProduts().then(productR, onError);
        }

        var handlePost = (data) => {

            product.postProduts(data).then(Postproduct, onError);
            productR();

        }

        $scope.get = () => {
            handleGet();
        }


        $scope.post = (data) => {
            handlePost(data);
        }




    };
    app.controller("MainController", MainController);

}());