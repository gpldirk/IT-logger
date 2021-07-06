import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../redux/actions/userActions'
import PropTypes from 'prop-types'
import UserItem from './UserItem'

const UsersModal = ({ getUsers, user: { users, loading } }) => {

  useEffect(() => {
    getUsers()

    // eslint-disable-next-line
  }, [])

  return (
    <div id='user-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Users List</h4>
        <ul className='collection'>
          { !loading && users !== null && users.map(user => (
            <UserItem user={user} key={user.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

UsersModal.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  { getUsers },
)(UsersModal)
