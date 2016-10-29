function SearchService(){
  var self = this;
  self.resultList = {};
  self.searchParams = {
    'artists': [], 
    'tracks': [],
    'genres': []
  };
  self.acousticPreference = 5;
  self.danceabilityPreference = 5;
  self.energyPreference = 5;
  self.instrumentalPreference = 5;
  self.modePreference = 1;
  self.popularityPreference = 50;
  self.positivityPreference = 5;

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

  this.addPreferences = function(value, attribute){
    if (attribute == 'acoustic') {
      self.acousticPreference = (value * 0.1).toPrecision(1);
      } else if (attribute == 'danceability') {
        self.danceabilityPreference = (value * 0.1).toPrecision(1);
      } else if (attribute == 'energy') {
        self.energyPreference = (value * 0.1).toPrecision(1);
      } else if (attribute == 'instrumental') {
        self.instrumentalPreference = (value * 0.1).toPrecision(1);
      } else if (attribute == 'mode') {
        self.modePreference = value;
      } else if (attribute == 'popularity') {
        self.popularityPreference = value;
      } else if (attribute == 'positivity') {
        self.positivityPreference = (value * 0.1).toPrecision(1);
      }
    }
  


}

angular 
  .module('app')
  .service('SearchService', SearchService)