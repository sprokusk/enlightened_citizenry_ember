import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url = 'https://congress.api.sunlightfoundation.com/committees?apikey=51a9fb9cb84a49e29dccf53b7baa754a&subcommittee=false&per_page=all&fields=subcommittees,chamber,name';

    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
