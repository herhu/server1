const { getAllItemsFromDB } = require('./app/controllers/bookings/helpers')
const {
  getAllEstablishmentsFromDB
} = require('./app/controllers/establishments/helpers/getAllItemsFromDB')
module.exports = (io) => {
  const connections = []

  const getAllBookings = async () => {
    try {
      const data = await getAllItemsFromDB()
      io.emit('currentsBeds', data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllEstablishments = async () => {
    try {
      const data = await getAllEstablishmentsFromDB()
      io.emit('currentsEstablishments', data)
    } catch (error) {
      console.log(error)
    }
  }

  io.on('connection', (socket) => {
    // Connected
    console.log('new socket connected ', socket.id)
    connections.push(socket)

    socket.on('disconnect', () => console.log('Disconnected - ', socket.id))

    getAllBookings()
    // Sync time with the client
    io.emit('syncTime', Date.now())

    // Get the latency
    socket.on('ping', () => socket.emit('pong'))

    socket.on('checkIn', () => {
      console.log('is Checking')
      getAllBookings()
    })

    socket.on('bedUpdated', () => {
      console.log('bed updated')
      getAllEstablishments()
    })
  })
}
