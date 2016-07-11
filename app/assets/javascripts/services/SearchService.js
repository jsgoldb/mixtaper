function SearchService(){
  var self = this;
  self.resultList = {
    'trackArtists': []
  };
  self.searchParams = {
    'artists': [], 
    'tracks': [],
    'genres': []
  };

  this.resultSearch = function(list){
    self.resultList = {
      'trackArtists': []
    };

    list.forEach(function(result){
      if (result.artists) {
        result.artists.forEach(function(artist){
          self.resultList['trackArtists'].push(artist.name);
        });
      }
      self.resultList[result.name] = result.id;
    });

    return self.resultList;
  }

  this.addArtistToSearchParams = function(id){
    self.searchParams['artists'].push(id);
    debugger;
  }

  this.addTrackToSearchParams = function(id){
    self.searchParams['tracks'].push(id);
    debugger;
  }



}

angular 
  .module('app')
  .service('SearchService', SearchService)