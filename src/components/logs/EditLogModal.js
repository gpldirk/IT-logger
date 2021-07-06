

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateLog } from '../../redux/actions/logActions'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import UserSelectOptions from '../users/UserSelectOptions'

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [user, setUser] = useState('')

  useEffect(() => {
    if (current) {
      setMessage(current.message)
      setAttention(current.attention)
      setUser(current.user)
    }

  }, [current])

  const modalStyle = {
    width: "75%",
    height: "75%",

  }

  const onSubmit = () => {
    if (message === '' || user === '') {
      M.toast({ html: 'Please enter message and user'})
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        user,
        date: new Date(),
      }

      updateLog(updatedLog)
      M.toast({ html: `Log Updated by ${user}`})
      
      
      // clear fields
      setMessage('')
      setUser('')
      setAttention(false)
    }
  }

  return (
    <div id="edit-log-modal" className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input type="text" name="message" value={message} onChange={(e) => {
              setMessage(e.target.value)
            }} />
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  current: state.log.current,
})

export default connect(
  mapStateToProps, 
  { updateLog }
)(EditLogModal)
