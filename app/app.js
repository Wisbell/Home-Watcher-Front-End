const app = angular.module('HomeWatcher', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'AuthCtrl'
  })
  .when('/recent', {
    templateUrl: 'partials/recent.html',
    controller: 'RecentCtrl'
  })
  .when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
}])
