(function() {

    var injectParams = ['$http'];
    var customersService = function($http) {
        var service = this;
        service.getCustomers = function() {
            return $http.get('customers.json');
        };
    };

    customersService.$inject = injectParams;

    angular.module('demoApp')
        .service('customersService', customersService);

})();
