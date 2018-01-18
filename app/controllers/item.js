import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addItem() {
      this.get('store').createRecord(
        'item',
        this.getProperties('name', 'altName', 'year', 'productNumber', 'bust', 'length', 'price', 'waist', 'notes')
      ).save().catch(console.warn);
    }
  }
});
