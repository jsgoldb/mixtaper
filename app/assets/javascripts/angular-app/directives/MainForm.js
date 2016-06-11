function MainForm($rootScope, SpotifyService){
  return {
    template: '<button ng-click="ctrl.getPlaylists()">Get Playlists</button>',
    scope: {},
    link: function(scope, elements, attrs, ctrl){
      if (window.location.search.split('&')[0].split('=')[1] !== undefined){
        if(ctrl.token === ''){
          ctrl.token = SpotifyService.setCredentials();
          $rootScope.token = SpotifyService.setCredentials();
        }
      };
    },
    controller: 'MainController as ctrl'
  }
}

MainForm.$inject = ['$rootScope', 'SpotifyService']

angular 
  .module('app')
  .directive('mainForm', MainForm)