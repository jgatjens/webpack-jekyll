# Webpack Jekyll

## About

> Starter files you can use to bootstrap new projects.

### Requirements
- Node    >= 8.5.0
- NPM     >= 5.1.0
- Ruby    >= 2.2.2
- Jekyll  >= 3.4.3
- Bundler >= 1.16.1

### Instructions:

Install Ruby Gems:

    $ gem install bundler
    $ cd ./jekyll && bundler install 
        
Install node dependencies

    $ npm install 

...and you're done. 
    
### How to run it

To see your project running run:

    $ npm start


### Production builds
    
    $ npm run prod # check build on litle-server
    $ zip -r dist.zip dist && rm -Rf dist
