import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'ember-template/config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise',
  host: `${
      window.location.protocol
    }//${
      window.location.hostname
    }:${
      ENV.APP.railsPort
    }`,
});
