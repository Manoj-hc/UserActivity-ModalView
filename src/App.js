import React, { Fragment } from 'react';
import './css/App.css';
import UserTable from './components/UserTable';

function App() {

  return (
    <main className="page">
      <div className="container">
    <Fragment>
      <UserTable/>
    </Fragment>
    </div>
    </main>
  )
}

export default App;
