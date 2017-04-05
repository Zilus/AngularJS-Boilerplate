;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('myApp', [
      'ngRoute',
      'ngAnimate'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   *
   */
  function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/slide1.html',
        controller: 'view1Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  angular
    .module('myApp').controller("view1Ctrl", view1Ctrl);
      function view1Ctrl($scope) {

      }

})();
