Package.describe({
    name: "copleykj:autolinker",

    summary: "Autolinker.js packaged for Meteor with some slight additions and modifications",

    version: "1.0.0",

    git: "https://github.com/copleykj/meteor-autolinker.git"
});

Package.on_use(function(api) {
    if(api.versionsFrom){
        api.versionsFrom('METEOR@0.9.1');
    }
    api.add_files('autolinker.js');
    api.add_files('helpers.js', "client");

    api.export("Autolinker");
});
