if(Meteor.isClient) {
    UI.registerHelper('facebook_like', function(faces) {
      return new Spacebars.SafeString('<div class="fb-like" data-send="true" data-width="450" data-show-faces="'+ faces  +'"></div>');
    });

    UI.registerHelper('facebook_share', function(href) {
      return new Spacebars.SafeString('<div class="fb-share-button" data-href="'+ href  +'" data-type="button_count"></div>');
    });

    UI.registerHelper('facebook_post', function(href) {
      return new Spacebars.SafeString('<div class="fb-post" data-href="'+ href  +'" data-width="500"></div>');
    });

    UI.registerHelper('facebook_comments', function(href, count) {
      return new Spacebars.SafeString('<div class="fb-comments" data-href="'+ href  +'" data-numposts="'+ count  +'" data-colorscheme="light"></div>');
    });

    UI.registerHelper('facebook_send', function(href) {
      return new Spacebars.SafeString('<div class="fb-send" data-href="'+ href  +'" data-colorscheme="light"></div>');
    });

    UI.registerHelper('facebook_follow', function(href) {
      return new Spacebars.SafeString('<div class="fb-follow" data-href="'+ href  +'" data-colorscheme="light" data-layout="standard" data-show-faces="true"></div>');
    });

    UI.registerHelper('facebook_activity', function(href) {
      return new Spacebars.SafeString('<div class="fb-activity" data-site="'+ href  +'" data-action="likes, recommends" data-colorscheme="light" data-header="true"></div>');
    });

    UI.registerHelper('facebook_recommendations', function(href) {
      return new Spacebars.SafeString('<div class="fb-recommendations" data-site="'+ href  +'" data-action="likes, recommends" data-colorscheme="light" data-header="true"></div>');
    });

    UI.registerHelper('facebook_facepile', function(href) {
      return new Spacebars.SafeString('<div class="fb-facepile" data-href="'+ href  +'" data-max-rows="5" data-colorscheme="light" data-size="medium" data-show-count="true"></div>');
    });
}
