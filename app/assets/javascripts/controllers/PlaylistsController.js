function PlaylistsController(Playlist, SpotifyService, $scope, $timeout, $window, SearchService){

  var ctrl = this;
  this.searchValue = '';
  this.searchType = ''; 
  $scope.resultList = [];

  ctrl.playlists = Playlist.query({user_id: SpotifyService.currentUser.id});

  ctrl.user = SpotifyService.currentUser;

  this.search = function() {
    SpotifyService.getSearchMatches(this.searchValue, this.searchType)

    .then(angular.bind(this, function(res){

      if (this.searchType === 'artist') {  
        $scope.resultList = SearchService.resultSearch(res.data.artists.items);
      } else {
        $scope.resultList = SearchService.resultSearch(res.data.tracks.items);
      }

    }))

    .catch(function(res, error){
      debugger;
      console.log(error);
    });
  }

  this.addChoice = function(id){
    if (this.searchType === 'artist') {
      SearchService.addArtistToSearchParams(id);
    } else {
      SearchService.addTrackToSearchParams(id);
    }
    $scope.resultList = [];
  }

  this.getTrack = function() {
    SpotifyService.getTrackId(this.track)
    .then(function(res){
      $scope.resultList = SearchService.resultSearch(res.data.tracks.items);
    })
    .catch(function(res, error){
      debugger;
      console.log(error);
    })
  }

}

PlaylistsController.$inject = ['Playlist', 'SpotifyService', '$scope', '$timeout', '$window', 'SearchService'];

angular
  .module('app')
  .controller('PlaylistsController', PlaylistsController);