

import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../../redux/actions/userActions' 
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'


const UserItem = ({ user, deleteUser }) => {

  const { firstName, lastName, id } = user
  const onDelete = () => {
    deleteUser(id)
    M.toast({ html: 'User Deleted'})
  }

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href="#!" className='secondary-content' onClick={onDelete}>

          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
      
    </li>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
}

export default connect(null, { deleteUser })(UserItem)
