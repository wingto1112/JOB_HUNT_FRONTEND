import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

// eslint-disable-next-line react/display-name
const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenvisible = { display: visible ? '' : 'none' }


  const toggleVisible = () => {
    setVisible(!visible)
  }
  useImperativeHandle(ref, () => {
    return {
      toggleVisible
    }
  })
  return (
    <div>
      <div style={hideWhenVisible}>
        <Button variant="contained" onClick={toggleVisible}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenvisible}>
        {props.children}
        <Button variant="contained" color="disabled" onClick={toggleVisible}>cancel</Button>
      </div>
    </div>
  )
})
Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable