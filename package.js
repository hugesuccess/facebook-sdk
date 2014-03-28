Package.describe({
    summary: "Facebook SDK packaged for Meteor"
});

Package.on_use(function(api) {
    api.use(['jquery', 'ui', 'spacebars']);
    api.add_files(['sdk.js', 'helpers.js'], 'client');
});
