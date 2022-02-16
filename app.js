const fastify = require('fastify')({ logger: true })
    , dotenv = require('dotenv')

dotenv.config()

fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: process.env.DATABASE_URL,
})

fastify.get('/', function (req, reply) {
    reply.send('Hello World !')
})

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})