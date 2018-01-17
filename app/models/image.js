import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'ember-template/config/environment';

export default DS.Model.extend({
  url: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  safeURL: Ember.computed('url', function() {
    return `${
        window.location.protocol
      }//${
        window.location.hostname
      }:${
        ENV.APP.railsPort
      }${ this.get('url') }`;
  })
});
