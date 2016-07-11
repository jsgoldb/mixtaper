angular
  .module('app')
  .component('searchResults', {
     bindings: {
      resultList: '='
     },
     templateUrl: 'home/searchResults.html',
     controllerAs: 'ctrl'
  })