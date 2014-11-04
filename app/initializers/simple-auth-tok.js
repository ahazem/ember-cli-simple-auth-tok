import Configuration from '/simple-auth-tok/configuration';
import Authenticator from '/simple-auth-tok/authenticators/tok';
import Authorizer from '/simple-auth-tok/authorizers/tok';
import ENV from '../config/environment';

export default {
  name: 'simple-auth-tok',
  before: 'simple-auth',
  initialize: function(container, application) {
    Configuration.load(container, ENV['simple-auth-tok'] || {});

    container.register('simple-auth-authorizer:tok', Authorizer);
    container.register('simple-auth-authenticator:tok', Authenticator);
  }
};
