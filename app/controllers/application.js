import Ember from 'ember';
import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { Uploader } from 'ember-uploader';
import ImageUploader from 'ember-template/mixins/image-uploader';

export default Controller.extend(ImageUploader, {
  session: inject(),
  actions: {
    filesDidChange(files) {
      if (!Ember.isEmpty(files)) {
        const { railsURL: url, ajaxHeaders: ajaxSettings } = this.getProperties('railsURL', 'ajaxHeaders');
        Uploader.create({
          url,
          ajaxSettings
        }).upload(files[0]);
      }
    }
  }
});
