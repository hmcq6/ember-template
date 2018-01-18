import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addFeature() {
      this.get('store').createRecord(
        'feature',
        this.getProperties('name')
      ).save().catch(console.warn);
    }
  }
});
