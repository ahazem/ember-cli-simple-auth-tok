module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-simple-auth-tok', '0.0.1');
  }
};
