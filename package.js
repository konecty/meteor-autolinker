Package.describe({
    name: "copleykj:autolinker",

    summary: "Autolinker.js packaged for Meteor with some slight additions and modifications",

    version: "1.0.0",

    git: "https://github.com/copleykj/meteor-autolinker.git"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.1');

    api.addFiles('autolinker.js');
    api.addFiles('helpers.js', "client");

    api.export("Autolinker");
});
