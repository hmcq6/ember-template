import Controller from '@ember/controller';
import SimpleModal from 'ember-template/mixins/simple-modal';

export default Controller.extend(SimpleModal, {
  actions: {
    addFeature() {
      this.get('store').createRecord(
        'feature',
        this.getProperties('name')
      ).save().catch(console.warn);
    }
  }
});
