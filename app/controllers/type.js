import Controller from '@ember/controller';
import SimpleModal from 'ember-template/mixins/simple-modal';

export default Controller.extend(SimpleModal, {
  actions: {
    addType() {
      this.get('store').createRecord(
        'type',
        this.getProperties('name')
      ).save().catch(console.warn);
    }
  }
});
