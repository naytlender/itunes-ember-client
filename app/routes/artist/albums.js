import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    this.store.unloadAll();
  },
  model: function() {
    let artist = this.modelFor('artist');
    this.store.adapterFor('application').set('namespace','/artists/' + artist.id);
    return this.store.findAll('album');
  }
});
