angular
  .module('app')
  .controller('PlaylistsController', PlaylistsController);

function PlaylistsController(Playlist){

  var ctrl = this; 

  ctrl.playlists = Playlist.query();
}

PlaylistsController.$inject = ['Playlist'];