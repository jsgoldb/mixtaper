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

//initial user info configuration, authorization checks for working with Spotify API 
  .run(['SpotifyService', '$rootScope', function(SpotifyService, $rootScope) {
      $rootScope.$on('auth:login-success', function(event, user) {
        alert('login');
        //$location.path('/')
        SpotifyService.getUserInfo(); //add name, location to user, logout user if not premium (or in US?)
        SpotifyService.setCurrentUser(); //set name, email, id, spotify token, and refresh token of current_user as variables in Spotify Serivce by querying the Rails API. Then, use these values in the service for making requests. 
        });
      $rootScope.$on('auth:validation-success', function(event, user) {
        SpotifyService.getUserInfo(); //add name, location to user, logout user if not premium (or in US?)
        SpotifyService.setCurrentUser(); //set name, email, id, spotify token, and refresh token of current_user as variables in Spotify Serivce by querying the Rails API. Then, use these values in the service for making requests. 

        });

    }]);