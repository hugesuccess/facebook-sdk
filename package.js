Package.describe({
    summary: "Facebook SDK packaged for Meteor"
});

Package.on_use(function(api) {
    api.use(['jquery', 'spacebars', 'ui', 'templating', 'meteor', 'mongo-livedata', 'livedata', 'webapp']);
    api.add_files(['sdk.js', 'templates.html'], 'client');
});
