if(Meteor.isClient) {
    Handlebars.registerHelper('facebook-like', function(faces) {
      return new Handlebars.SafeString('<div class="fb-like" data-send="true" data-width="450" data-show-faces="'+ faces  +'"></div>');
    });

    Handlebars.registerHelper('facebook-share', function(href) {
      return new Handlebars.SafeString('<div class="fb-share-button" data-href="'+ href  +'" data-type="button_count"></div>');
    });

    Handlebars.registerHelper('facebook-post', function(href) {
      return new Handlebars.SafeString('<div class="fb-post" data-href="'+ href  +'" data-width="500"></div>');
    });

    Handlebars.registerHelper('facebook-comments', function(href, count) {
      return new Handlebars.SafeString('<div class="fb-comments" data-href="'+ href  +'" data-numposts="'+ count  +'" data-colorscheme="light"></div>');
    });

    Handlebars.registerHelper('facebook-send', function(href) {
      return new Handlebars.SafeString('<div class="fb-send" data-href="'+ href  +'" data-colorscheme="light"></div>');
    });

    Handlebars.registerHelper('facebook-follow', function(href) {
      return new Handlebars.SafeString('<div class="fb-follow" data-href="'+ href  +'" data-colorscheme="light" data-layout="standard" data-show-faces="true"></div>');
    });

    Handlebars.registerHelper('facebook-activity', function(href) {
      return new Handlebars.SafeString('<div class="fb-activity" data-site="'+ href  +'" data-action="likes, recommends" data-colorscheme="light" data-header="true"></div>');
    });

    Handlebars.registerHelper('facebook-recommendations', function(href) {
      return new Handlebars.SafeString('<div class="fb-recommendations" data-site="'+ href  +'" data-action="likes, recommends" data-colorscheme="light" data-header="true"></div>');
    });

    Handlebars.registerHelper('facebook-facepile', function(href) {
      return new Handlebars.SafeString('<div class="fb-facepile" data-href="'+ href  +'" data-max-rows="5" data-colorscheme="light" data-size="medium" data-show-count="true"></div>');
    });
}
