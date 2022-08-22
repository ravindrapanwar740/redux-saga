import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCreate from './components/userCreate/UserCreate';
import UserList from './components/userList/UsersList'
import UserUpdate from './components/userUpdate/UserUpdate';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserCreate />} />
          <Route path="list" element={<UserList />} />
          <Route path="update" element={<UserUpdate />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

