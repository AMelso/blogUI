import React from 'react'
import { Message } from 'semantic-ui-react'

export default ({ message, info, postive, warning, negative }) => (
  <Message info postive warning negative>
    {message}
  </Message>
)