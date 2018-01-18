import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange(files) {
    this.sendAction('filesDidChangeAction', files);
  }
});
