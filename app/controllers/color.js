import Controller from '@ember/controller';
import SimpleModal from 'ember-template/mixins/simple-modal';

export default Controller.extend(SimpleModal, {
  actions: {
    addColor() {
      this.get('store').createRecord(
        'color',
        this.getProperties('name', 'hex')
      ).save().catch(console.warn);
    }
  }
});
