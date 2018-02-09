import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import SimpleModal from 'ember-template/mixins/simple-modal';
import ImageUploader from 'ember-template/mixins/image-uploader';

export default Controller.extend(SimpleModal, ImageUploader, {
  brand: computed.oneWay('model.brands.firstObject'),
  type: computed.oneWay('model.types.firstObject'),

  images: Ember.A(),
  features: Ember.A(),

  actions: {
    addItem() {
      const item = this.get('store').createRecord(
        'item',
        this.getProperties('name', 'altName', 'brand', 'type', 'year', 'productNumber', 'bust', 'length', 'price', 'waist', 'notes')
      );
      item.get('images').addObjects(this.get('images'));
      item.get('features').addObjects(this.get('features'));
      item.save().catch(console.warn);
    },
    selectBrand(value) {
      this.set('brand', this.get('store').find('brand', parseInt(value, 10)));
    },
    selectType(value) {
      this.set('type', this.get('store').find('type', parseInt(value, 10)));
    },
    filesDidChange(files) {
      this._super(...arguments);
      this.get('uploadPromise').then(({ id: imageID }) => {
        this.get('store').find('image', imageID).then((image) => {
          this.get('images').addObject(image);
        });
      }).catch(console.warn);
    },
    selectedFeaturesUpdated(children) {
      this.get('features').setObjects(children);
    }
  }
});
