angular
  .module('app', ['ui.router', 'ngResource', 'ng-token-auth', 'ipCookie', 'templates'])
  .config(['$authProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', function ($authProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
    $authProvider
      .configure({
        apiUrl: 'http://localhost:3000',
        authProviderPaths: {
          spotify: '/auth/spotify'
        }
      });
    //$httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    delete $httpProvider.defaults.headers.get['If-Modified-Since'];
    //$httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'if-modified-since'; 

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.playlists', {
        url: 'user/:id/playlists',
        templateUrl: 'home/playlists.html',
        controller: 'PlaylistsController as ctrl'
      })
      .state('home.new', {
        url: 'new',
        templateUrl: 'home/new.html',
        controller: 'PlaylistsController as ctrl'
      })
      .state('home.users', {
        url: 'users',
        templateUrl: 'home/users.html',
        controller: 'UsersController as ctrl'
      });


      $urlRouterProvider.otherwise('/');

  }])

//initial user info configuration, authorization checks for working with Spotify API 
  .run(['SpotifyService', '$rootScope', '$http', function(SpotifyService, $rootScope, $http) {


      $rootScope.$on('auth:login-success', function(event, user) {
        //$location.path('/')
        SpotifyService.getUserInfo(user)
        .then(function(res){
          //debugger;
        })
        .catch(function(res, error){
          //debugger;
        }); //add name, location, and product to user, logout user if not premium (or in US?)
        //SpotifyService.setCurrentUser(user); //set name, location, product, email, id, spotify token, and refresh token of current_user as variables in Spotify Serivce by querying the Rails API. Then, use these values in the service for making requests.

        //$http.defaults.headers.common['Authorization'] = 'Bearer ' + user.spotify_token;   //set auth token header 
        });
      //$http.defaults.headers.common['Authorization'] = 'Bearer ' + user.spotify_token.token;

      $rootScope.$on('auth:validation-success', function(event, user) {
        SpotifyService.getUserInfo(user)
        .then(function(res){
          SpotifyService.setCurrentUser(res.data);
        })
        .catch(function(res, error){
          debugger;
        });
        //SpotifyService.setCurrentUser(user);


      //$http.defaults.headers.common['Access-Control-Allow-Headers'] = 'If-Modified-Since'; 
   
        });

    }]);
