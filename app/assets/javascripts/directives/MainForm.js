function MainForm($rootScope, SpotifyService, $resource){
  return {
    template: '<button ng-click="ctrl.getPlaylists()">Get Playlists</button>',
    scope: {},
    link: function(scope, elements, attrs, ctrl){
      if (window.location.search.split('&')[0].split('=')[1] !== undefined){
        if(ctrl.token === ''){
          //ctrl.token = SpotifyService.setCredentials();
          //$rootScope.token = SpotifyService.setCredentials();
          //ctrl.token = SpotifyService.getToken();
        }
      };
    },
    controller: 'HomeController as ctrl'
  }
}

MainForm.$inject = ['$rootScope', 'SpotifyService', '$resource']

angular 
  .module('app')
  .directive('mainForm', MainForm)