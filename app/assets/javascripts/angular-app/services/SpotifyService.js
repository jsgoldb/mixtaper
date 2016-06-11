function SpotifyService($window, $http, $auth, $rootScope) {
  var self = this;

  this.loginUser = function(){
    $auth.authenticate('spotify')
  }

  this.setCredentials = function(){
    if (window.location.search.split('&')[0].split('=')[1] !== undefined){
      this.token = window.location.search.split('&')[0].split('=')[1];
      return window.location.search.split('&')[0].split('=')[1];
    }
    debugger;
  }

  this.logoutUser = function(){
    $auth.signOut();
  }
}

SpotifyService.$inject = ['$window', '$http', '$auth', '$rootScope']

angular 
  .module('app')
  .service('SpotifyService', SpotifyService)