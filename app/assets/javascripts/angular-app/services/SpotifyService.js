function SpotifyService($resource, $window, $auth, $rootScope) {
  var self = this;

  this.loginUser = function(){
    $auth.authenticate('spotify')
  }

  this.setCredentials = function(){
    if (window.location.search.split('&')[0].split('=')[1] !== undefined){
      this.token = window.location.search.split('&')[0].split('=')[1];
      return window.location.search.split('&')[0].split('=')[1];
    }
  }

  this.logoutUser = function(){
    $auth.signOut();
  }

  this.getPlaylists = function(){
    $http.get('')
  }

  this.getToken = function(){
    debugger;
  }
}

SpotifyService.$inject = ['$resource', '$window', '$auth', '$rootScope']

angular 
  .module('app')
  .service('SpotifyService', SpotifyService)