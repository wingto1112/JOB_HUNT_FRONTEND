import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

const Notifi = () => {
  const notiMessage = useSelector(state => state.notice)
  /*const addStyle = {
    color: 'green',
    fontSize: 20,
    background: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }*/
  /*const errorStyle = {
    ...addStyle, color: 'red'
  }*/
  if (notiMessage === null) { 
    return null 
  } else if (notiMessage.includes('Wrong') || notiMessage.includes('valid') || notiMessage.includes('who')){
  return (
    
    <Alert severity="error">{notiMessage}</Alert>
    //{<div style={notiMessage.includes('Wrong')? errorStyle: addStyle}>{notiMessage}</div>}
  )}
  return (
    <Alert severity="success">{notiMessage}</Alert>
  )
}
export default Notifi