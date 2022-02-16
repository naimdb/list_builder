const fastifyPlugin = require('fastify-plugin')
const fastifyMongo = require('fastify-mongodb')
const dotenv = require('dotenv')

dotenv.config()

async function dbConnector (app, options) {
    app.register(fastifyMongo, {
        url: env('URL_MONGODB')
    })
}