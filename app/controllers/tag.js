import Controller from '@ember/controller';
import SimpleModal from 'ember-template/mixins/simple-modal';

export default Controller.extend(SimpleModal, {
  actions: {
    addTag() {
      this.get('store').createRecord(
        'tag',
        this.getProperties('name')
      ).save().catch(console.warn);
    }
  }
});
