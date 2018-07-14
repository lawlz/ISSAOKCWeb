var fs = require('fs');
var jade = require('jade');
var html = fs.readFileSync('./rss.jade').toString();
var options = {
    feed: {
        title: 'Reddit Netsec',
        description: 'Reddit Netsec',
        link: 'https://www.reddit.com/r/netsec/.rss',
        language: 'en'
    },
    posts: [{
        title: 'post1 title',
        description: 'post1 summary',
        canonicalUrl: 'http://example.org/post1',
        pubDate: (new Date()).toGMTString()
    }]
};
jade.render(html, options, function(err, html) {
    if (err) {
        throw err;
    }
    console.info(html);
});