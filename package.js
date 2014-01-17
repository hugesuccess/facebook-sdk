Package.describe({
    summary: "Facebook SDK packaged for Meteor"
});

Package.on_use(function(api) {
    api.use(['jquery', 'handlebars']);
    api.add_files(['sdk.js', 'helpers.js'], 'client');
});
