angular
  .module('app')
  .controller('PlaylistsController', PlaylistsController);

function PlaylistsController(Playlist, SpotifyService){

  var ctrl = this; 

  ctrl.playlists = Playlist.query({user_id: SpotifyService.currentUser.id});

  
}

PlaylistsController.$inject = ['Playlist', 'SpotifyService'];