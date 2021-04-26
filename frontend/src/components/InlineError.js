import React from 'react'
import { Label } from 'semantic-ui-react'

function InlineError(props) {
  return (
    <div>
      <Label as='a' basic color='red' pointing>
        {props.message}
      </Label>

    </div>
  )
}

export default InlineError