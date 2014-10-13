Package.describe({
    summary: "Autolinker.js packaged for Meteor. Forked from copleykj:meteor-autolinker.",

    version: "1.0.0",

    git: "https://github.com/Konecty/meteor-autolinker.git"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.1');

    api.addFiles('autolinker.js');
    api.addFiles('helpers.js', "client");

    api.export("Autolinker");
});
