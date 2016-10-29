function PlaylistsController(Playlist, SpotifyService, $scope, $timeout, $window, SearchService){

  var ctrl = this;
  this.searchValue = '';
  this.searchType = '';
  ctrl.playlistPrefs = SearchService; 
  $scope.resultList = [];
  $scope.genreList = [];
  this.acousticEnabled = true;
  this.danceabilityEnabled = true;
  this.popularityEnabled = true;
  this.modeEnabled = true;
  this.instrumentalEnabled = true;
  this.energyEnabled = true;
  this.positivityEnabled = true; 

  $scope.acousticSlider = {
    value: 5,
    options: {
        id: 'acoustic',
        showSelectionBar: true,
        showTicksValues: true,
        stepsArray: [
          {value: 0, legend: 'Not Acoustic'},
          {value: 1, legend: ''},
          {value: 2, legend: 'Slightly Acoustic'},
          {value: 3, legend: ''},
          {value: 4, legend: 'Somewhat Acoustic'},
          {value: 5, legend: ''},
          {value: 6, legend: 'Moderately Acoustic'},
          {value: 7, legend: ''},
          {value: 8, legend: 'Very Acoustic'}, 
          {value: 9, legend: ''},
          {value: 10, legend: 'All Acoustic'}
        ],
        getSelectionBarColor: function(value) {
            if (value <= 3)
                return 'red';
            if (value <= 6)
                return 'orange';
            if (value <= 9)
                return 'yellow';
            return '#2AE02A';
        },
        onChange: function(id, value) {
          SearchService.addPreferences(value, id);
        }
  }
};

  $scope.danceabilitySlider = {
    value: 5,
    options: {
        id: 'danceability',
        showSelectionBar: true,
        showTicksValues: true,
        stepsArray: [
          {value: 0, legend: 'Not Danceable'},
          {value: 1, legend: ''},
          {value: 2, legend: 'Slightly Danceable'},
          {value: 3, legend: ''},
          {value: 4, legend: 'Somewhat Danceable'},
          {value: 5, legend: ''},
          {value: 6, legend: 'Moderately Danceable'},
          {value: 7, legend: ''},
          {value: 8, legend: 'Very Danceable'}, 
          {value: 9, legend: ''},
          {value: 10, legend: 'Party Down!'}
        ],
        getSelectionBarColor: function(value) {
            if (value <= 3)
                return 'red';
            if (value <= 6)
                return 'orange';
            if (value <= 9)
                return 'yellow';
            return '#2AE02A';
        },
        onChange: function(id, value) {
          SearchService.addPreferences(value, id);
        }
  }
};

  $scope.energySlider = {
    value: 5,
    options: {
        id: 'energy',
        showSelectionBar: true,
        showTicksValues: true,
        stepsArray: [
          {value: 0, legend: 'No Energy'},
          {value: 1, legend: ''},
          {value: 2, legend: 'Low Energy'},
          {value: 3, legend: ''},
          {value: 4, legend: 'Some Energy'},
          {value: 5, legend: ''},
          {value: 6, legend: 'Moderate Energy'},
          {value: 7, legend: ''},
          {value: 8, legend: 'High Energy'}, 
          {value: 9, legend: ''},
          {value: 10, legend: 'Extreme Energy'}
        ],
        getSelectionBarColor: function(value) {
            if (value <= 3)
                return 'red';
            if (value <= 6)
                return 'orange';
            if (value <= 9)
                return 'yellow';
            return '#2AE02A';
        },
        onChange: function(id, value) {
          SearchService.addPreferences(value, id);
        }
  }
};

  $scope.instrumentalSlider = {
    value: 5,
    options: {
        id: 'instrumental',
        showSelectionBar: true,
        showTicksValues: true,
        stepsArray: [
          {value: 0, legend: 'All Vocal Tracks'},
          {value: 1, legend: ''},
          {value: 2, legend: 'Mostly Vocal'},
          {value: 3, legend: ''},
          {value: 4, legend: 'More Vocal than Instrumental'},
          {value: 5, legend: ''},
          {value: 6, legend: 'More Instrumental than Vocal'},
          {value: 7, legend: ''},
          {value: 8, legend: 'Very Instrumental'}, 
          {value: 9, legend: ''},
          {value: 10, legend: 'All Instrumental'}
        ],
        getSelectionBarColor: function(value) {
            if (value <= 3)
                return 'red';
            if (value <= 6)
                return 'orange';
            if (value <= 9)
                return 'yellow';
            return '#2AE02A';
        },
        onChange: function(id, value) {
          SearchService.addPreferences(value, id);
        }
  }
};

  $scope.modeSlider = {
    value: 1,
    options: {
        id: 'mode',
        showSelectionBar: true,
        showTicksValues: true,
        stepsArray: [
          {value: 0, legend: 'Minor Key'},
          {value: 1, legend: 'Major Key'}
        ],
        getSelectionBarColor: function(value) {
            if (value <= 3)
                return 'red';
            if (value <= 6)
                return 'orange';
            if (value <= 9)
                return 'yellow';
            return '#2AE02A';
        },
        onChange: function(id, value) {
          SearchService.addPreferences(value, id);
        }
  }
};

  $scope.popularitySlider = {
    value: 100,
    options: {
        id: 'popularity',
        showSelectionBar: true,
        showTicksValues: true,
        stepsArray: [
          {value: 0, legend: 'Who?'},
          {value: 5, legend: ''},
          {value: 10, legend: 'Extremely Obscure'},
          {value: 15, legend: ''},
          {value: 20, legend: 'Hipster Sweet Spot'},
          {value: 25, legend: ''},
          {value: 30, legend: 'Probably on some blogs'},
          {value: 35, legend: ''},
          {value: 40, legend: 'Not quite popular'},
          {value: 45, legend: ''},
          {value: 50, legend: 'Average'},
          {value: 55, legend: ''},
          {value: 60, legend: 'Has some buzz'},
          {value: 65, legend: ''},
          {value: 70, legend: 'Pretty popular'},
          {value: 75, legend: ''},
          {value: 80, legend: 'Top 40 Land'},
          {value: 85, legend: ''},
          {value: 90, legend: 'Even your parents know these songs'},
          {value: 95, legend: ''},
          {value: 100, legend: 'Most Popular'}
        ],
        getSelectionBarColor: function(value) {
            if (value <= 3)
                return 'red';
            if (value <= 6)
                return 'orange';
            if (value <= 9)
                return 'yellow';
            return '#2AE02A';
        },
        onChange: function(id, value) {
          SearchService.addPreferences(value, id);
        }
  }
};

  $scope.positivitySlider = {
    value: 5,
    options: {
        id: 'positivity',
        showSelectionBar: true,
        showTicksValues: true,
        stepsArray: [
          {value: 0, legend: 'Breakup Music'},
          {value: 1, legend: ''},
          {value: 2, legend: 'Pretty Depressing'},
          {value: 3, legend: ''},
          {value: 4, legend: 'Somewhat Downbeat'},
          {value: 5, legend: ''},
          {value: 6, legend: 'Moderately Happy'},
          {value: 7, legend: ''},
          {value: 8, legend: 'Very Positive'}, 
          {value: 9, legend: ''},
          {value: 10, legend: 'Everything is Awesome!'}
        ],
        getSelectionBarColor: function(value) {
            if (value <= 3)
                return 'red';
            if (value <= 6)
                return 'orange';
            if (value <= 9)
                return 'yellow';
            return '#2AE02A';
        },
        onChange: function(id, value) {
          SearchService.addPreferences(value, id);
        }
  }
};


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

  this.makePlaylist = function(){
    playlistRequest = "https://api.spotify.com/v1/recommendations?";
    this.addArtiststoRequest();
    this.addSongstoRequest();
    this.addGenrestoRequest();
    this.addAttributestoRequest();
    debugger;
    

  }

  this.addArtiststoRequest = function(){
    var artistCount = this.playlistPrefs.searchParams.artists.length;

    if (artistCount > 0) {
      playlistRequest += "seed_artists=";
      this.playlistPrefs.searchParams.artists.forEach(function(artist, index){
            playlistRequest += artist;
            if (artistCount != index + 1) {
              playlistRequest += ",";
            } 
          });
    }
  }

  this.addGenrestoRequest = function(){
    var genreCount = this.playlistPrefs.searchParams.genres.length;

    if (genreCount > 0) {
      playlistRequest += "&seed_genres=";
      this.playlistPrefs.searchParams.genres.forEach(function(genre, index){
        playlistRequest += genre;
        if (genreCount != index + 1) {
          playlistRequest += ",";
        }
      });
    }

  }

  this.addSongstoRequest = function(){
    var trackCount = this.playlistPrefs.searchParams.tracks.length;

    if (trackCount > 0) {
      playlistRequest += "&seed_tracks=";
      this.playlistPrefs.searchParams.tracks.forEach(function(track, index){
        playlistRequest += track;
        if (trackCount != index + 1) {
          playlistRequest += ",";
        }
      });
    }

  }

  this.addAttributestoRequest = function(){
    this.acousticEnabled = true;
    this.danceabilityEnabled = true;
    this.popularityEnabled = true;
    this.modeEnabled = true;
    this.instrumentalEnabled = true;
    this.energyEnabled = true;
    this.positivityEnabled = true; 
  }


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


PlaylistsController.$inject = ['Playlist', 'SpotifyService', '$scope', '$timeout', '$window', 'SearchService'];

angular
  .module('app')
  .controller('PlaylistsController', PlaylistsController);