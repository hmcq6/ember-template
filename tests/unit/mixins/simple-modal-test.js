import EmberObject from '@ember/object';
import SimpleModalMixin from 'ember-template/mixins/simple-modal';
import { module, test } from 'qunit';

module('Unit | Mixin | simple modal');

// Replace this with your real tests.
test('it works', function(assert) {
  let SimpleModalObject = EmberObject.extend(SimpleModalMixin);
  let subject = SimpleModalObject.create();
  assert.ok(subject);
});
