'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/home', {
    template: '<main></main>'
  });

  $routeProvider.when('/', {
    template: require('./home.html'),
    controller: 'MainController',
    controllerAs: 'main'
  });
};
