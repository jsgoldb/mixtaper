function MainController(SpotifyService) {
  var ctrl = this;

  ctrl.login = function(){
    SpotifyService.loginUser();
    SpotifyService.getToken();
  }

  ctrl.logout = function(){
    SpotifyService.logoutUser();
  }

  ctrl.getPlaylists = function(){
    SpotifyService.getPlaylists()
      .then(function(resp){
        debugger;
      });
  }

 ctrl.token = '';

}

MainController.$inject = ['SpotifyService'];

angular
  .module('app')
  .controller('MainController', MainController)