function PlaylistsController(Playlist, SpotifyService, $scope, $timeout, $window, SearchService){

  var ctrl = this;
  this.searchValue = '';
  this.searchType = ''; 
  $scope.resultList = [];
  $scope.genreList = [];
  $scope.priceSlider = 150;

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
      console.log(error);
    });
  }

  this.addChoice = function(id){
    if (this.searchType === 'artist') {
      SearchService.addItemToSearchParams(id, 'artists');
      this.searchType = '';
    } else if (this.searchType === 'track') {
      SearchService.addItemToSearchParams(id, 'tracks');
      this.searchType = '';
    } else {
      SearchService.addItemToSearchParams(id, 'genres');
    }
    $scope.resultList = [];
  }

  this.showGenres = function(){
    SpotifyService.getGenres()
    .then(function(res){
      $scope.genreList = res.data.genres;
    })
    .catch(function(res, error){
      console.log(error);
    });
  }

  this.hideGenres = function(){
    $scope.genreList = [];
  }

  // this.getTrack = function() {
  //   SpotifyService.getTrackId(this.track)
  //   .then(function(res){
  //     $scope.resultList = SearchService.resultSearch(res.data.tracks.items);
  //   })
  //   .catch(function(res, error){
  //     debugger;
  //     console.log(error);
  //   })
  // }

}

PlaylistsController.$inject = ['Playlist', 'SpotifyService', '$scope', '$timeout', '$window', 'SearchService'];

angular
  .module('app')
  .controller('PlaylistsController', PlaylistsController);