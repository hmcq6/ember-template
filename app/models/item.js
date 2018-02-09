import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  altName: DS.attr('string'),
  year: DS.attr('string'),
  productNumber: DS.attr('number'),
  bust: DS.attr('string'),
  length: DS.attr('string'),
  price: DS.attr('number'),
  waist: DS.attr('string'),
  notes: DS.attr('string'),
  type: DS.belongsTo('type'),
  brand: DS.belongsTo('brand'),
  colors: DS.hasMany('color'),
  features: DS.hasMany('feature'),
  tags: DS.hasMany('tag'),
  images: DS.hasMany('image')
});
