import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    this.$().on('focusin.multi-select-text, focusout.multi-select-text', '[data-role="multi-select-text--dropdown"]', () => {
      this.toggleProperty('showOptions');
    });
  },
  _children: computed('children.[]', function() {
    return this.get('children').map(
      (child) => Ember.ObjectProxy.create({
        content: child,
        checked: false
      })
    );
  }),
  filteredChildren: computed('_children.[]', 'value', function() {
    const value = this.getWithDefault('value', '').toLowerCase();
    return value === '' ?
      this.get('_children') :
      this.get('_children').filter((child) => child.get('content.name').toLowerCase().includes(value));
  }),
  selectedChildren: computed.filterBy('_children', 'checked'),
  willDestroyElement() {
    this._super(...arguments);
    this.$().off('focus.multi-select-text');
  },
  click() {
    this._super(...arguments);
    Ember.run.next(() => {
      this.sendAction('selectedChildrenUpdated', this.getWithDefault('selectedChildren', []).mapBy('content'));
    });
  },
  actions: {
    removeChild(child) {
      child.toggleProperty('checked');
    }
  }
});
