import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  payment: inject(),
  res: null,
  actions: {
    dispatchPayment() {
      this.get('payment').authorize().then(() => {
        this.set('res', this.get('payment').dispatch());
      });
    }
  }
});
