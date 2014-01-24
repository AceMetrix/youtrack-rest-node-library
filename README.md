youtrack-rest-node-library
==========================

Node library for accessing the Youtrack 4.0 REST API.  Partially designed/ported from the [python version](https://github.com/JetBrains/youtrack-rest-python-library/) from YouTrack

All of the API is exposed through promises and/or callbacks.


Full YouTrack RESTful API [here](http://confluence.jetbrains.com/display/YTD4/YouTrack+REST+API+Reference)

##Installation

```
npm install youtrack-rest-node-library
```

##Usage
```
var Connection = require('youtrack-rest-node-library');

var youtrack = new Connection('http://your-youtrack-instance:8080');

youtrack.login('username, password', function(err){
    youtrack.getProject('Your-ID', function(err, project){
    })
})
```

##License
Apache 2.0
