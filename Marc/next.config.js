const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                API_URL: 'http://192.168.1.233:3001/api'
            }
        }
    }

    return {
        env: {
            API_URL: 'http://127.0.0.1:8080'
        }
    }
}
