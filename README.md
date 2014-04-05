##facebook-sdk


The Facebook Javascript SDK packaged for Meteor.js. Be sure to review the full [documentation](https://developers.facebook.com/docs/javascript) for a full description of the Facebook SDK and how to use it.

How to Install
------------------

mrt add facebook-sdk

How to Initialize
------------------

Be sure to include the FB.init() method somewhere in your client directory to initialize the SDK, replace {your-app-id} with your actual application id.

```javascript
if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      status     : true,
      xfbml      : true
    });
  };
}
```

Usage
---------------

Once you have initialized the SDK, you can use FB methods anywhere in client facing script files. To quickly test if the SDK has been initialized correctly try to trigger a basic feed dialog like so.

```javascript
FB.ui(
 {
  method: 'feed'
 }
);
```

Along with calling FB methods directly from Javascript, you can also embed [Social Plugins](https://developers.facebook.com/docs/plugins) by using standard HTML5. For example, to add a Like button to your page use the following snippit where {your-url} is replaced with the url you want to like:

```html
<div class="fb-like" data-href="{your-url}" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>'
```

Template Helpers
------------------

While the Social Plugins are great, "ain't nobody got time for all that" copy and pasting. Also included in this package are a set of template helpers for social plugins. Use these helpers to quickly add standard facebook functionality to your application. Add a configuration object which maps to the configurable settings for each individual plugin. For example, if you would like to set the colorscheme attribute to "dark" be sure to pass a configuration object to the helper with the parameter colorscheme set to the string "dark". Be sure to visit the facebook [Social Plugin documentation](https://developers.facebook.com/docs/plugins/) for a full list of settings.

Example Configuration Object
```javascript
{colorscheme: "dark"}
```


* [Like Button](https://developers.facebook.com/docs/plugins/like-button/)

{{> facebookLike config}}
 

* [Share Button](https://developers.facebook.com/docs/plugins/share-button/)

{{> facebookShare config}}

* [Embedded Posts](https://developers.facebook.com/docs/plugins/embedded-posts/)

{{> facebookPost config}}


* [Comments](https://developers.facebook.com/docs/plugins/comments/)

{{> facebookComments config}}


* [Send button](https://developers.facebook.com/docs/plugins/send-button/)

{{> facebookSend config}}


* [Follow button](https://developers.facebook.com/docs/plugins/follow-button/)

{{> facebookFollow config}}


* [Activity Feed](https://developers.facebook.com/docs/plugins/activity/)

{{> facebookActivity config}}


* [Recommendations Feed](https://developers.facebook.com/docs/plugins/recommendations/)

{{> facebookRecommendations config}}



Facebook-SDK with Iron-Router
-------------

If you're not using [Iron-Router](https://github.com/EventedMind/iron-router) in your Meteor project, you probably should. One of the things you'll notice is that with Iron Router when you navigate away from a page with a Social Plugin, then return to that page your social widget will vanish to the abyss. Obviously, this is not good. To insure that your Social Plugins are always displayed (for both HTML5 embed and handlebars helpers) use the following snipit of Javascript (note that this requires jQuery, but you should have it installed already for obvious reasons).

```javascript
Template.<template-name>.rendered = function() {
    try {
        FB.XFBML.parse();
    }catch(e) {}   
};
```

Remember to replace <template-name> with actual name of your template, and to repeat the process for every template that contains a social widget.

Customizing Social Plugins
-----------------------------

If you would like to use custom parameters for your Social Plugins, in order to change things like the color scheme or dimensions, just use the HTML5 snippets provided by Facebook and style to your hearts content.

License
-----------------

MIT 



