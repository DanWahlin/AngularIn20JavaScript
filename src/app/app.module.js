(function() {

    var app = angular.module('demoApp',['ngRoute', 'ngAnimate']);

    app.config(function($routeProvider) {
        $routeProvider.when('/',
        {
            controller: 'CustomersController',
            templateUrl: 'app/views/customers.html',
            controllerAs: 'vm'
        })
        .when('/orders/:customerId',
        {
            controller: 'OrdersController',
            templateUrl: 'app/views/orders.html',
            controllerAs: 'vm'
        })
    });

})();
