async function routes (app, options) {
    app.get('/', async (request, reply) => {
        return { hello: 'world' }
    })
}

module.exports = routes