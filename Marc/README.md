## Environment variables:
To setup the environment variables a `next.config.js` file is needed.
The file should have the following structure

```javascript
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                API_URL: 'YOUR_DEVELOPMENT_URL'
            }
        }
    }

    return {
        env: {
            API_URL: 'YOUR_PRODUCTION_URL'
        }
    }
}
```

## Running Locally
To get the application to run and communicate with the backend while running locally either the host file needs to be changed or a reverse proxy has to been used to allow for cookies to be shared with front and backend. This won't be a problem when hosting the front end on example.com and the api on api.example.com.

### Setting upp reverse proxy
This can be done in many ways, one easy way is to use http-proxy-middleware.

```
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
 
const app = express();
 
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', pathRewrite: {'^/api': '/'} }));
app.use('/', createProxyMiddleware({ target: 'http://localhost:3000'}));
app.listen(3001);
```

Accessing the website on localhost:3001 will now set the cookies correctly.