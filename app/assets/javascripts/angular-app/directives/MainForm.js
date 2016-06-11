function MainForm(SpotifyService){
  return {
    templateUrl: 'app/views/application/main.html',
    scope: {},
    link: function(scope, elements, attrs, ctrl){

      if (window.location.search.split('&')[0].split('=')[1] !== undefined){
        if(ctrl.token === ''){
          ctrl.token = SpotifyService.setCredentials();
        }
      };
    },
    controller: 'MainController as ctrl'
  }
}

MainForm.$inject = ['SpotifyService']

angular 
  .module('app')
  .directive('mainForm', MainForm)