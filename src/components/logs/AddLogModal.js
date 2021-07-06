

import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLog } from '../../redux/actions/logActions'  // 1
import M from 'materialize-css/dist/js/materialize.min.js'
import UserSelectOptions from '../users/UserSelectOptions'

const AddLogModal = ({ addLog }) => {  // 3
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [user, setUser] = useState('')

  const modalStyle = {
    width: "75%",
    height: "75%",
  }

  const onSubmit = () => {
    if (message === '' || user === '') {
      M.toast({ html: 'Please enter message and user'})
    } else {
      const newLog = {
        message,
        attention,
        user,
        date: new Date(),
      }

      addLog(newLog)  // 4

      M.toast({ html: `Log added by ${user}`})

      // clear fields
      setMessage('')
      setUser('')
      setAttention(false)
    }
  }

  return (
    <div id="add-log-modal" className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input type="text" name="message" value={message} onChange={(e) => {
              setMessage(e.target.value)
            }} />
            <label htmlFor="message" className='active'>Log Message</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select name='user' value={user} className='browser-default' onChange={(e) => {
              setUser(e.target.value)
            }} >
              <option value="" disabled>Select User</option>
              <UserSelectOptions />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input type="checkbox" name="attention" 
                  value={attention} className='filled-in' checked={attention} 
                  onChange={(e) => {
                    setAttention(!attention)
                  }}
                />

                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>

      </div>

      <div className='modal-footer'>
        <a href="#!" onClick={onSubmit} className='modal-close waves-effect waves-light blue btn'>
          Enter
        </a>
      </div>
    </div>
  )
}

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}



export default connect( // 2
  null, 
  { addLog }
)(AddLogModal)
