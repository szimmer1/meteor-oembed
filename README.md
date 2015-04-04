szimmer1:oembed for Meteor
=============

The fork of the (iframely:ombed repo)[https://github.com/szimmer1/meteor-oembed.git] that adds support for media in Cordova

### Install

    meteor add szimmer1:oembed

### Usage

    {{>oembed}}

Template context should be an object with `url` attribute.

### Configuration

Configure oembed rendering widget and oEmbed api endpoint:

    Meteor.startup(function() {

        // Optional client-side template. If not specified - default widget used.
        UsportOembed.setTemplate('customWidget');

        // Please configure your oEmbed proxy address.
        // Default: `'http://open.iframe.ly/api/oembed'` powered by oembedapi.com
        // Query string parameters are fine too
        UsportOembed.setEndpoint('http://iframe.ly/api/oembed?api_key=<key>');

        // Optionally cache oEmbeds using mongo collection. Defaults:
        UsportOembed.setCacheOptions({
            cacheTTL: 1000 * 60 * 60, // Hour.
            cacheErrorTTL: 1000 * 60, // Minute.
            cacheEnabled: true
        });
    });

MIT, (c) 2014 Itteco Software Corp.
