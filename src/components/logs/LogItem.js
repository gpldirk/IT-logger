

import React from 'react'
import { connect } from 'react-redux'  // 1
import { deleteLog, setCurrentLog } from '../../redux/actions/logActions' // 2
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import M from 'materialize-css/dist/js/materialize.min.js'


const LogItem = ({ log, deleteLog, setCurrentLog }) => { // 5
  const onDelete = () => {
    deleteLog(log.id) // 6
    M.toast({ html: 'Log Deleted'})
  }

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          
          onClick={() => {
            setCurrentLog(log)
          }}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.user}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete} >
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired, // 4
  setCurrentLog: PropTypes.func.isRequired,
}

// only action is needed
export default connect(
  null, 
  { deleteLog, setCurrentLog }
)(LogItem)  // 3
