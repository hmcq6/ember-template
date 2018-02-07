import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  model() {
    return this.get('store').findAll('image');
  },

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
