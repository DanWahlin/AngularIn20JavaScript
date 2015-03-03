(function() {

    var injectParams = ['customersService'];
    var CustomersController = function(customersService) {
        var vm = this;
        vm.customers = null;

        function init() {
            customersService.getCustomers()
              .success(function(custs) {
                 vm.customers = custs;
              });
        }

        init();
    };


    CustomersController.$inject = injectParams;

    angular.module('demoApp')
           .controller('CustomersController', CustomersController);

})();
