import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('brand');
  this.route('type');
  this.route('feature');
  this.route('tag');
  this.route('color');
  this.route('item');
  this.route('contact');
  this.route('checkout');
});

export default Router;
