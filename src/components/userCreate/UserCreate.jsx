import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/reducers/index";
import { useNavigate } from "react-router-dom";
import '../userCreate/userCreate.css'

function UserCreate(params) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');

  const create = () => {
    dispatch(createUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
    }))
    navigate('/list');
  }
  return (
    <div className="updateForm">
      <form>
        
        <div class="mb-3">
          <label class="form-label">FirstName</label>
          <input type="text" class="form-control" onChange={(event) => {
            setFirstName(event.target.value)
          }}
            placeholder="Enter name"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">LastName</label>
          <input type="text" class="form-control" onChange={(event) => {
            setlastName(event.target.value)


          }} placeholder="Enter lastname" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp"
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            placeholder="Enter email"
          />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <button type="submit" class="btn btn-primary" onClick={() => { create() }}>Submit</button>
      </form>
    </div>
  );
}


export default UserCreate;
