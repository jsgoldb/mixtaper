function HomeController(SpotifyService, $resource) {
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

HomeController.$inject = ['SpotifyService', '$resource'];

angular
  .module('app')
  .controller('HomeController', HomeController)