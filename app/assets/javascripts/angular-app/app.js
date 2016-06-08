angular
  .module('app', ['ui.router', 'ngResource', 'ng-token-auth', 'ipCookie'])
  .config(function($authProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000',
      authProviderPaths: {
        spotify: '/auth/spotify'
      }
    });
  });