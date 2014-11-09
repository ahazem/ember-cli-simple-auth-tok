# Ember Simple Auth Tok

This is an extension to the [Ember Simple Auth](https://github.com/simplabs/ember-simple-auth) library that provides an authenticator and authorizer that are compatible with Ruby on Rails token-based authentication plugin [Tok](https://github.com/ahazem/tok), packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli) Addon.

For the actual Ember Simple Auth extension for [Tok](https://github.com/ahazem/tok) repository, see [https://github.com/ahazem/ember-simple-auth-tok](https://github.com/ahazem/ember-simple-auth-tok).

## Installation

In your Ember CLI project's root, run the following command:

```
npm install -D ember-cli-simple-auth-tok
```

This will add the package to your project's node_modules folder, you will then have to run the generator as follows:

```
ember generate ember-cli-simple-auth-tok
```

which adds the extension's bower package to your bower_components folder.

## Configuration

The extension uses the Ember CLI project configuration as defined in `config/environment.js`, to configure options use `ENV['simple-auth-tok']` as follows:

```
ENV['simple-auth-tok'] = {
  serverAuthenticateEndpoint: 'http://localhost:3000/login',
  serverInvalidateEndpoint: 'http://localhost:3000/logout'
}
```

## License

See [LICENSE](https://github.com/ahazem/ember-cli-simple-auth-tok/blob/master/LICENSE).
