import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  nickname: DS.attr('string'),
  image: DS.belongsTo('image')
});
