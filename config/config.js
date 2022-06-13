require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5001,
    API_BASE_URL: process.env.API_BASE_URL,
    SERVER_URL: (process.env.DEBUG).toLowerCase() === "true" ? (process.env.LOCAL_SERVER_URL).toLowerCase() : (process.env.PRODUCTION_SERVER_URL),
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    VERIFY_TOKEN: process.env.VERIFY_TOKEN,


}