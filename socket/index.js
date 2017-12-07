const socketIo = require( 'socket.io' )
const { USER_JOINED, MESSAGE_SEND } = require( '../src/constants/events' )

const init = ( app, server ) => {
  const io = socketIo( server )

  app.set( 'io', io )

  io.on( 'connection', socket => {
    console.log( 'client connected' )

    socket.on( 'disconnect', data => {
      console.log( 'client disconnected' )
    })

    socket.on( USER_JOINED, data => io.emit( USER_JOINED, data ))
    socket.on( MESSAGE_SEND, data => io.emit( MESSAGE_SEND, data ))
  })
}

module.exports = { init }
