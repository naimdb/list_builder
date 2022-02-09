const fastify = require('fastify')
const { PrismaClient } = require('@prisma/client')

const app = fastify({ logger: true })
const prisma = new PrismaClient()

app.register(require('./routes/first'))
app.register(require('./db-connector'))

const start = async () => {
    try {
        await app.listen(3000)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()