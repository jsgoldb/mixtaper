function SpotifyService($resource, $auth, $http, User) {

  var self = this;

  this.loginUser = function(){
    $auth.authenticate('spotify');
  }

  // this.setCredentials = function(){
  //   if (window.location.search.split('&')[0].split('=')[1] !== undefined){
  //     this.token = window.location.search.split('&')[0].split('=')[1];
  //     return window.location.search.split('&')[0].split('=')[1];
  //   }
  // }

  this.logoutUser = function(){
    $auth.signOut();
  }

  this.getPlaylists = function(){
    $http.get('')
  }

  this.getSearchMatches = function(searchValue, searchType){
    //searchValue = searchValue.replace(/\s/g, '%20');
    var limit;

    if (searchType === 'artist') {
      limit = "&limit=10"; 
    } else {
      limit = "&limit=20";
    }

    return $http.get('https://api.spotify.com/v1/search?q="' + searchValue + '"&type=' + searchType + limit);
  }

  this.getGenres = function(){
    return $http.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {headers: {'Authorization': 'Bearer ' + self.currentUser.spotify_token.token}
    });
  }

  //var userInfo = $http.get('https://api.spotify.com/v1/me');

  this.getUserInfo = function(user){
      self.currentUser = user;
      return $http.get('https://api.spotify.com/v1/me', {headers: 
      {'Authorization': 'Bearer ' + user.spotify_token.token}
    });

  }

  this.setCurrentUser = function(userData){
    User.update({id: this.currentUser.id}, {data: userData});
      }

  this.currentUser = this.currentUser;
  //this.currentUser = User.get({ id: this.currentUser.id});

  
    
}

SpotifyService.$inject = ['$resource','$auth', '$http', 'User']

angular 
  .module('app')
  .service('SpotifyService', SpotifyService)