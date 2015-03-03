(function() {

    var injectParams = [];
    var filterTextbox = function() {

        var template = 'Search: <input type="text" ng-model="vm.filter" /> {{ vm.message }}',
            controller = function($scope) {
                var vm = this;
                vm.message = '';

                $scope.$watch('vm.filter', function(val) {
                    if (val === '') {
                        vm.message = 'Please enter a value';
                    }
                    else {
                        vm.message = '';
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
