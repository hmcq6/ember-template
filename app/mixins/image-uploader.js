import Ember from 'ember';
import RSVP from 'rsvp';
import Mixin from '@ember/object/mixin';
import { inject } from '@ember/service';
import FileUploader from 'ember-uploader';

import ENV from 'ember-template/config/environment';

export default Mixin.create({
  session: inject(),
  ajaxHeaders: Ember.computed(function() {
    const headers = {};
    this.get('session').authorize('authorizer:devise', (name, value) => {
      headers[name] = value;
    });
    return { headers };
  }).volatile(),

  railsURL: Ember.computed(function() {
    return `${
      window.location.protocol
    }//${
      window.location.hostname
    }:${
      ENV.APP.railsPort
    }/images`;
  }).volatile(),

  uploadPromise: Ember.computed('file.[]', function() {
    if (this.get('file')) {
      const { railsURL: url, ajaxHeaders: ajaxSettings } = this.getProperties('railsURL', 'ajaxHeaders');
      return FileUploader.Uploader.create({
        url,
        ajaxSettings
      }).upload(this.get('file'));
    }
    return new RSVP.Promise((resolve) => {});
  }),

  actions: {
    filesDidChange(files) {
      if (!Ember.isEmpty(files)) {
        this.set('file', files[0]);
      }
    }
  }
});
