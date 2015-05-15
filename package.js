Package.describe({
    name: 'szimmer1:oembed',
    summary: 'Easy insert oEmbed widget in template',
    version: '0.0.2',
    git: 'https://github.com/szimmer1/meteor-oembed.git'
});

Package.onUse(function(api) {

    api.versionsFrom('METEOR@0.9.2');

    api.use('templating');
    api.use('http');
    api.use('mongo');
    api.use('jquery');

    api.addFiles('lib/client/base-widget.html', 'client');
    api.addFiles('lib/client/base-widget.js', 'client');
    api.addFiles('lib/client/base-widget.css', 'client');

    api.addFiles('lib/client/oembed.html', 'client');
    api.addFiles('lib/client/oembed.js', 'client');

    api.addFiles('lib/server/oembed.js', 'server');

    api.addFiles('lib/settings.js');

    api.export('UsportOembed');
});