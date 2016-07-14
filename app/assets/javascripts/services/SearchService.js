function SearchService(){
  var self = this;
  self.resultList = {};
  self.searchParams = {
    'artists': [], 
    'tracks': [],
    'genres': []
  };

  this.resultSearch = function(list){
    self.resultList = {};

    list.forEach(function(result, index){
      if (result.artists) {
        var trackArtists = result.artists.map(function(artist, index) { return artist.name }).join(", ");
        self.resultList[result.name + " by " + trackArtists] = result.id;
      }
      else {
        self.resultList[result.name] = result.id;
      }
    });

    return self.resultList;
  }


  this.addItemToSearchParams = function(id, item){
    if (self.searchParams['artists'].length + self.searchParams['tracks'].length + self.searchParams['genres'].length < 5){
      self.searchParams[item].push(id);
    } else {
      //flash alert
    }
  }


}

angular 
  .module('app')
  .service('SearchService', SearchService)