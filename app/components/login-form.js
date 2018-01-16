import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  session: inject(),

  actions: {
    authenticate() {
      const { identification, password } = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:devise', identification, password).
        catch(({ error }) => {
          this.set('errorMessage', error);
        });
    }
  }
});
