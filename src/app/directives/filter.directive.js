(function() {

    var injectParams = [];
    var filterTextbox = function() {

        var template = 'Search: <input type="text" ng-model="vm.filter" /> {{ vm.error }}',
            controller = function($scope) {
                var vm = this;
                vm.error = '';

                $scope.$watch('vm.filter', function(val) {
                    if (val === '') {
                        vm.error = 'Please enter a value';
                    }
                    else {
                        vm.error = '';
                    }
                });
            }

        return {
            restrict: 'E',
            scope: {
                filter: '='
            },
            template: template,
            controller: controller,
            bindToController: true,
            controllerAs: 'vm'
        }
    };

    angular.module('demoApp').directive('filterTextbox', filterTextbox);


})();
