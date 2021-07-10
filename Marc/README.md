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