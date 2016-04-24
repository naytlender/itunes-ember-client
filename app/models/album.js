import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  artwork_url_100: DS.attr('string'),
  artist: DS.belongsTo('artist')
});
