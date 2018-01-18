import Controller from '@ember/controller';
import { computed } from '@ember/object';
import SimpleModal from 'ember-template/mixins/simple-modal';

export default Controller.extend(SimpleModal, {
  brand: computed.oneWay('model.brands.firstObject'),

  actions: {
    addItem() {
      this.get('store').createRecord(
        'item',
        this.getProperties('name', 'altName', 'brand', 'type', 'year', 'productNumber', 'bust', 'length', 'price', 'waist', 'notes')
      ).save().catch(console.warn);
    },
    selectBrand(value) {
      this.set('brand', this.get('store').find('brand', parseInt(value, 10)));
    },
    selectType(value) {
      this.set('type', this.get('store').find('type', parseInt(value, 10)));
    }
  }
});
