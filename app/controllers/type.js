import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addType() {
      this.get('store').createRecord(
        'type',
        this.getProperties('name')
      ).save().catch(console.warn);
    }
  }
});
