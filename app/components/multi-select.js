import Ember from 'ember';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  value: '',
  selectedChildren: [],
  classNames: ['multi-select'],
  proxiedChildren: computed('children.[]', function() {
    return this.get('children').map(
      (content) => Ember.ObjectProxy.create({ checked: false, content })
    );
  }),
  filteredChildren: computed('value', 'proxiedChildren.[]', function() {
    const value = this.getWithDefault('value').toLowerCase();
    return value !== '' ?
      this.get('proxiedChildren').
        filter(
          (child) => child.get('content.name').toLowerCase().includes(value)
        ) :
      this.get('proxiedChildren');
  }),
  actions: {
    checkboxClicked(child, { target }) {
      Ember.run.schedule('afterRender', this, () => {
      });
    },
    clickChild(child, { target }) {
      const selectedChild = this.get('proxiedChildren').findBy('content.id', child.get('id'));
      selectedChild.toggleProperty('checked');
      selectedChild.get('checked') ?
        this.get('selectedChildren').addObject(this.get('children').findBy('id', child.get('id'))) :
        this.get('selectedChildren').removeObject(this.get('children').findBy('id', child.get('id')));
    }
  }
});
