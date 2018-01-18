import Component from '@ember/component';

export default Component.extend({
  tagName: 'select',
  didInsertElement() {
    this._super(...arguments);
    this.$().on('change.single-select', ({ target }) => {
      this.sendAction('onChange', target.value);
    });
  },
  willDestroyElement() {
    this._super(...arguments);
    this.$().off('change.single-select');
  }
});
