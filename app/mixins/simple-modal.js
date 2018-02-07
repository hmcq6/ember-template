import Mixin from '@ember/object/mixin';

export default Mixin.create({
  isModalOpen: false,
  actions: {
    openModal() {
      this.set('isModalOpen', true);
    },
    modalClosed() {
      this.set('isModalOpen', false);
    }
  }
});
