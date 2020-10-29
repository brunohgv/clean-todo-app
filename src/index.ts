import http from 'http'
import { App } from './app'

const app = new App()
const httpServer = http.createServer(app.getAppInstance())
const PORT = 3000

httpServer.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
})