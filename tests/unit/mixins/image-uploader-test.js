import EmberObject from '@ember/object';
import ImageUploaderMixin from 'ember-template/mixins/image-uploader';
import { module, test } from 'qunit';

module('Unit | Mixin | image uploader');

// Replace this with your real tests.
test('it works', function(assert) {
  let ImageUploaderObject = EmberObject.extend(ImageUploaderMixin);
  let subject = ImageUploaderObject.create();
  assert.ok(subject);
});
