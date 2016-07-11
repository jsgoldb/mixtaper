function ArtistsForm(SpotifyService){
  return {
    templateUrl: 'home/artists.html',
    scope: {},
    link: function(scope, elements, attrs, ctrl){
      
      
    }
  }
}

ArtistsForm.$inject = ['SpotifyService']

angular 
  .module('app')
  .directive('artistsForm', ArtistsForm)