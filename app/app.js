const app = angular.module('HomeWatcher', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
  .when('/recent', {
    templateUrl: 'partials/recent.html',
    controller: 'RecentCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
}])
