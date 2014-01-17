facebook-sdk
============

The Facebook Javascript SDK packaged for Meteor.js. Be sure to review the full [documentation](https://developers.facebook.com/docs/javascript) for a full description of the Facebook SDK and how to use it.

How to Install
------------------

mrt add facebook-sdk

How to Initialize
------------------

Be sure to include the FB.init() method somewhere in your client directory to initialize the SDK, replace {your-app-id} with your actual application id.

if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      status     : true,
      xfbml      : true
    });
  };
}

Usage
---------------

Once you have initialized the SDK, you can use FB methods anywhere in client facing script files. To quickly test if the SDK has been initialized correctly try to trigger a basic feed dialog like so.

FB.ui(
 {
  method: 'feed'
 }
);

Along with calling FB methods directly from Javascript, you can also embed [Social Plugins](https://developers.facebook.com/docs/plugins) by using standard HTML5. For example, to add a Like button to your page use the following snippit where {your-url} is replaced with the url you want to like:

'<div class="fb-like" data-href="{your-url}" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>'

Handlebars Helpers
------------------

While the social plugins are great, "ain't nobody got time for all that" copy and pasting. Also included in this package are a set of handlebars helpers for social plugins. Use these helpers to quickly add standard facebook functionality to your application.

* [Like Button](https://developers.facebook.com/docs/plugins/like-button/)

{{facebook-like <faces>}}
 
@param <faces> (Bool): True to show faces, false to remove them.

* [Share Button](https://developers.facebook.com/docs/plugins/share-button/)

{{facebook-share <url>}}
@param <url> (String): The URL to share.

* [Embedded Posts](https://developers.facebook.com/docs/plugins/embedded-posts/)

{{facebook-post <url>}}

@param <url> (String) : The URL of the facebook post, for example: https://www.facebook.com/FacebookDevelopers/posts/10151471074398553.

* [Comments](https://developers.facebook.com/docs/plugins/comments/)

{{facebook-comments <url>}}

@param <url> (String): The URL of the page to comment on.

* [Send button](https://developers.facebook.com/docs/plugins/send-button/)

{{facebook-send <url>}}

@param <url> (String): The URL of the page to share

* [Follow button](https://developers.facebook.com/docs/plugins/follow-button/)

{{facebook-follow <url>}}

@param <url> (String): The URL of the facebook page to follow, for example: http://www.facebook.com/zuck

* [Activity Feed](https://developers.facebook.com/docs/plugins/activity/)

{{facebook-activity <domain>}}

@param <domain> (String): The domain to display

* [Recommendations Feed](https://developers.facebook.com/docs/plugins/recommendations/)

{{facebook-recommendations <domain>}}

@param <domain> (String): The domain to display

* [Facepile](https://developers.facebook.com/docs/plugins/facepile)

{{facebook-facepile <url>}}

@param <url> (String): The URL of the page to display


Facebook-SDK with Iron-Router
-------------

If you're not using [Iron-Router](https://github.com/EventedMind/iron-router) in your Meteor project, you probably should. One of the things you'll notice is that with Iron Router when you navigate away from a page with a Social Widget, then return to that page your social widget will vanish to the abyss. Obviously, this is not good. To insure that your social widgets are always displayed (for both HTML5 embed and handlebars helpers) use the following snipit of Javascript (note that this requires jQuery, but you should have it installed already for obvious reasons).

Template.<template-name>.rendered = function() {
    try {
        FB.XFBML.parse();
    }catch(e) {}   
};

Remember to replace <template-name> with actual name of your template, and to repeat the process for every template that contains a social widget.

Customizing Social Widgets
-----------------------------

If you would like to use custom parameters for your social widgets, in order to change things like the color scheme or dimensions, just use the HTML5 snippets provided by Facebook and style to your hearts content.

License
-----------------

MIT 



