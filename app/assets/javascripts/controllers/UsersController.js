angular
  .module('app')
  .controller('UsersController', UsersController);

function UsersController(User){
  var ctrl = this; 

  ctrl.users = User.query();

}

UsersController.$inject = ['User', 'SpotifyService'];