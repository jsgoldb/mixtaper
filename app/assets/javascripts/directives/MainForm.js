function MainForm(SpotifyService, $resource){
  return {
    templateUrl: 'home/newPlaylist.html',
    scope: {},
    link: function(scope, elements, attrs, ctrl){
      
      
    },
    controller: 'HomeController as ctrl'
  }
}

MainForm.$inject = ['SpotifyService', '$resource']

angular 
  .module('app')
  .directive('mainForm', MainForm)