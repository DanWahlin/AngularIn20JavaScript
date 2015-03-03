(function() {

    var injectParams = [];
    var filterTextbox = function() {

        var template = 'Search: <input type="text" ng-model="vm.filter" />',
            controller = function() { }

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
