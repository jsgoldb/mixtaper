function MainController($auth, $window, $scope, SpotifyService) {
  var ctrl = this;

  ctrl.login = function(){
    SpotifyService.loginUser();
  }

  ctrl.logout = function(){
    SpotifyService.logoutUser();
  }

 ctrl.token = '';

}

MainController.$inject = ['$auth', '$window', '$scope', 'SpotifyService'];

angular
  .module('app')
  .controller('MainController', MainController)