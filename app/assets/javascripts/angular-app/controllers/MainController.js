function MainController(SpotifyService) {
  var ctrl = this;

  ctrl.login = function(){
    SpotifyService.loginUser();
  }

  ctrl.logout = function(){
    SpotifyService.logoutUser();
  }

 ctrl.token = '';

}

MainController.$inject = ['SpotifyService'];

angular
  .module('app')
  .controller('MainController', MainController)