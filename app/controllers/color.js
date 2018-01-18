import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addColor() {
      this.get('store').createRecord(
        'Color',
        this.getProperties('name', 'hex')
      ).save().catch(console.warn);
    }
  }
});
