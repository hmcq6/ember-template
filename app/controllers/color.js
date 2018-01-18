import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addColor() {
      this.get('store').createRecord(
        'color',
        this.getProperties('name', 'hex')
      ).save().catch(console.warn);
    }
  }
});
