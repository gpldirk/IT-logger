

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUsers } from '../../redux/actions/userActions'

const UserSelectOptions = ({ getUsers, user: {users, loading} }) => {

  useEffect(() => {
    getUsers()

    // eslint-disable-next-line
  }, [])

  return (
     !loading && users !== null && users.map(user => (
      <option key={user.id} value={`${user.firstName} ${user.lastName}`}>
        {user.firstName + ' ' + user.lastName}
      </option>
    ))
  )
}

UserSelectOptions.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(
  mapStateToProps, {
  getUsers
})(UserSelectOptions)
