import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  store: inject(),
  model() {
    return {
      items: this.get('store').findAll('item'),
      brands: this.get('store').findAll('brand'),
      types: this.get('store').findAll('type')
    };
  }
});
