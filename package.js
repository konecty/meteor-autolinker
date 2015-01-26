Package.describe({
    summary: "Autolinker.js packaged for Meteor. Forked from copleykj:meteor-autolinker.",

    version: "1.0.2",

    git: "https://github.com/Konecty/meteor-autolinker.git"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.1');

    api.addFiles('autolinker.js');
    api.addFiles('helpers.js', "client");

    api.export("Autolinker");
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('konecty:autolinker');
	api.addFiles('autolinker-test.js', ['client']);
});