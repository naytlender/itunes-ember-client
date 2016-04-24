import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    this.store.adapterFor('application').set('namespace','');
    return this.store.findAll('artist');
  }
});
