const appendMessage = message => {
  $( '.messages' ).append( message )
  $( 'time.timeago' ).timeago()
}

const messageElement = ({ timestamp, user, message }) =>
  $( '<div>', { class: 'message' })
    .text( message )
    .prepend( timestampElement( timestamp ), userElement( user ))

const timestampElement = time => {
  const element = $( '<time>', {
    class: 'timeago',
    datetime: moment( time ).format()
  }).text( moment( time ).format( 'hh:mm:ss' ))

  return element[ 0 ]
}

const userElement = userName =>
  $( '<span>', { class: 'user' }).text( userName )[ 0 ]

const userJoined = data =>
  appendMessage( messageElement(
    Object.assign( data, { message: ' joined' }))
  )

const messageReceived = data =>
  appendMessage( messageElement(
    Object.assign( data, { user: `${data.user} said` })
  ))

export { userJoined, messageReceived }
