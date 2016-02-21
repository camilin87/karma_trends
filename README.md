# Karma Trends
Our hack summit hackathon project

## Deployment

### Dependencies
    sudo apt-get install -y node
    sudo apt-get install -y nodejs-legacy
    sudo apt-get install -y npm

### Secrets
Make sure the file `secrets\twitter.json` exists. The file contents should be  
```
{
    "consumerKey": "XXX",
    "consumerSecret": "XXX",
    "accessToken": "XXX",
    "accessTokenSecret": "XXX",
    "callBackUrl": "XXX"
}
```

Make sure the file `secrets\monkey_learn.json` exists. The file contents should be  

```
{
    "apiKey": "XXX"
}
```

### Execution
    cd <repo_path>
    git pull && npm run setup
    sudo PORT=80 node app.js

### Production Url
    http://169.45.90.169/twitter-api.html

## Development
    npm run startdev

## Acknowledgements
 - Favicon artwork: https://openclipart.org/detail/228014/colorful-concentric-circles-vortex
