module.exports = {
  name: 'ember-cli-simple-auth-tok',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-simple-auth-tok/simple-auth-tok.amd.js', {
      exports: {
        '/simple-auth-tok/authenticators/tok': ['default'],
        '/simple-auth-tok/authorizers/tok': ['default'],
        '/simple-auth-tok/configuration': ['default']
      }
    });
  }
};
