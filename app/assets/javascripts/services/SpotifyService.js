function SpotifyService($resource, $auth, $http) {
  var self = this;
  this.loginUser = function(){
    $auth.authenticate('spotify')
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

  var userInfo = $http.get('https://api.spotify.com/v1/me');

  this.getUserInfo = function(){
    return $http.get('https://api.spotify.com/v1/me');
  //   curl -H "Authorization: Bearer BQCXOpjYbwjS_efV_hikfpUaSkVTpnpLOLYiVM4l6xRGhHjcgI-jSMEhBWcsgnZfURQeuf6jmFeFjLrkhsCCt8eiuVDlx0L5CZzFvniehQkWeSzMTKzweorG93nn-n3baEmdJkzeGsHLA_axPJQSPsReHf-SCYXPPxT-b8W2lUgKqEWIkQ9GePNemRpgatZCUX5zG578DmfcCbix_CD-6kZ3YzXyY6ERvM0JAw7wKu7OyrZfNY6UTlXeFW3-HNWVr8AexKD0ARw https://api.spotify.com/v1/me
  //   {
  // "country" : "US",
  // "display_name" : "Seth Goldberg",
  // "email" : "jsgrrt@gmail.com",
  // "external_urls" : {
  //   "spotify" : "https://open.spotify.com/user/1234821248"
  // },
  // "followers" : {
  //   "href" : null,
  //   "total" : 7
  // },
  // "href" : "https://api.spotify.com/v1/users/1234821248",
  // "id" : "1234821248",
  // "images" : [ ],
  // "product" : "premium",
  // "type" : "user",
  // "uri" : "spotify:user:1234821248"
  }

  this.setCurrentUser = function(user){

  }


  
    
}

SpotifyService.$inject = ['$resource','$auth', '$http']

angular 
  .module('app')
  .service('SpotifyService', SpotifyService)