const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                API_URL: 'http://localhost:8080'
            }
        }
    }

    return {
        env: {
            API_URL: 'http://localhost:8080'
        }
    }
}
