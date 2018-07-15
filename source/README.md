#How to deploy the site using Hexo

First you need to make sure you have npm and hexo installed and in your path.

Run these commands:

hexo clean 
hexo generate
hexo server


In order to deploy to production, make sure you modify the _config.yml file

Pay attention to the url setting and the deploy settings.  Make sure you have this repo there and that 
the DNS can updated for the url.  You can use SSH instead of HTTPS on the deploy settings.

Once you have tested locally using hexo server, then you can run this command:

hexo deploy

That will deploy your site to the configured deploy location.  