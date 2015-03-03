(function() {

    var injectParams = ['$routeParams'];
    var OrdersController = function($routeParams) {
        var vm = this;
        vm.customerId = $routeParams.customerId;
    };

    OrdersController.$inject = injectParams;

    angular.module('demoApp')
        .controller('OrdersController', OrdersController);


})();
