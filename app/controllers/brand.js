import Controller from '@ember/controller';
import ImageUploader from 'ember-template/mixins/image-uploader';
import SimpleModal from 'ember-template/mixins/simple-modal';

export default Controller.extend(SimpleModal, ImageUploader, {
  actions: {
    addBrand() {
      const brand = this.get('store').createRecord(
          'brand',
          this.getProperties('name', 'nickname')
        );
      this.get('uploadPromise').then(({ id: imageID }) => {
        this.get('store').find('image', imageID).then((image) => {
          brand.set('image', image);
          brand.save().catch(console.warn);
        });
      }).catch(console.warn);
    }
  }
});
