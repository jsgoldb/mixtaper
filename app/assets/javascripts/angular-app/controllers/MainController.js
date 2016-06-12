function MainController(SpotifyService, $resource) {
  var ctrl = this;


  ctrl.login = function(){
    SpotifyService.loginUser();
  }

  ctrl.logout = function(){
    SpotifyService.logoutUser();
  }

  // ctrl.getPlaylists = function(){
  //   SpotifyService.getPlaylists()
  //     .then(function(resp){
  //       debugger;
  //     });
  // }

 

}

MainController.$inject = ['SpotifyService', '$resource'];

angular
  .module('app')
  .controller('MainController', MainController)