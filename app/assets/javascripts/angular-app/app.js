angular
  .module('app', ['ui.router', 'ngResource', 'ng-token-auth', 'ipCookie'])
  .config(['$authProvider', '$stateProvider', '$locationProvider', function ($authProvider, $stateProvider, $locationProvider) {
    $authProvider
      .configure({
        apiUrl: 'http://localhost:3000',
        authProviderPaths: {
          spotify: '/auth/spotify'
        }
      })

    $stateProvider
      .state('home', {
        url: '/main',
        templateUrl: 'views/application/main.html',
        controller: 'MainController as ctrl'
      });

  }])

  .run(['$rootScope', '$window', '$location', 'SpotifyService', function($rootScope, $window, SpotifyService) {
      $rootScope.$on('auth:login-success', function() {
        alert('login');
        $location.path('/');
        });
      $rootScope.$on('auth:validation-success', function(event, user) {

        });

    }]);