import Controller from '@ember/controller';
import ImageUploader from 'ember-template/mixins/image-uploader';

export default Controller.extend(ImageUploader, {
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
