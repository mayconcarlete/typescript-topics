import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()
const io = new Server(httpServer)

io.on('connection', (socket) => {
    console.log('connectado')
})

httpServer.listen(3000, () =>{
    console.log('On fire')
})
