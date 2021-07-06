import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddUserModal from './components/users/AddUserModal'
import UsersModal from './components/users/UsersModal'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  useEffect(() => {
    M.AutoInit() // init materialize js

  }, [])

  return (
    <Provider store={store}>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddUserModal />
        <UsersModal />
        <Logs />
      </div>
    </Provider>
  );
}

export default App;
