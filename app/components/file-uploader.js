import Ember from 'ember';
import { inject } from '@ember/service';
import EmberUploader from 'ember-uploader';

import ENV from 'ember-template/config/environment';

export default EmberUploader.FileField.extend({
  session: inject(),
  ajaxHeaders: Ember.computed(function() {
    const headers = {};
    this.get('session').authorize('authorizer:devise', (name, value) => {
      headers[name] = value;
    });
    return { headers };
  }).volatile(),

  railsURL: Ember.computed('url', function() {
    return `${
      window.location.protocol
    }//${
      window.location.hostname
    }:${
      ENV.APP.railsPort
    }${
      this.get('url')
    }`;
  }),

  filesDidChange(files) {
    if (!Ember.isEmpty(files)) {
      const { railsURL: url, ajaxHeaders: ajaxSettings } = this.getProperties('railsURL', 'ajaxHeaders')
      EmberUploader.Uploader.create({
        url,
        ajaxSettings
      }).upload(files[0]);
    }
  }
});
