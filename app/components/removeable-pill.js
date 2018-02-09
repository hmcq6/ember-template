import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  classNames: ['badge badge-pill'],
  classNameBindings: ['danger:badge-danger:badge-primary'],
  didInsertElement() {
    this._super(...arguments);
    this.$().on('mouseover.removeable-pill, mouseout.removeable-pill', () => {
      this.toggleProperty('danger');
    });
  },

  danger: false,

  willDestroyElement() {
    this._super(...arguments);
    this.$().off('.removeable-pill');
  }
});
