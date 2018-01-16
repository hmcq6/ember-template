import Ember from 'ember';
import DS from 'ember-data';
import { inject } from '@ember/service'
import ESASession from 'ember-simple-auth/services/session';

export default ESASession.extend({
  store: inject(),

  currentUser: Ember.computed('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      const promise = this.get('store').queryRecord('user', {});
      return DS.PromiseObject.create({ promise })
    }
  })
});
