angular
  .module('app')
  .factory('Playlist', Playlist)

  function Playlist($resource) {
    var Playlist = 
      $resource('http://localhost:3000/api/v1/users/:user_id/playlists/:id.json', {user_id: '@user_id', id: '@id'}, {
        update: {method: 'PUT'}
      });

      return Playlist;
  }

  Playlist.$inject = ['$resource'];