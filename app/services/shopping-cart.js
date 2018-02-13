import Service from '@ember/service';

export default Service.extend({
  contents: [],
  addToCart(item) {
    this.get('contents').addObject(item);
  }
});
