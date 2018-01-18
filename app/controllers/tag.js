import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTag() {
      this.get('store').createRecord(
        'tag',
        this.getProperties('name')
      ).save().catch(console.warn);
    }
  }
});
