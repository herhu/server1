// const Booking = require('./app/models/booking')
const { getAllItemsFromDB } = require('./app/controllers/bookings/helpers')
// const { updateItem } = require('./app/middleware/db')
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
      getAllBookings()
    })
  })
}
