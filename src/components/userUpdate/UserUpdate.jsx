import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/reducers/index";
import { useNavigate, useLocation } from "react-router-dom";

function UserUpdate() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation();
    const users = useSelector(state => state.user);

    let id = new URLSearchParams(location.search).get('id');
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        let res = users?.userData?.find((dt) => dt.id === parseInt(id))

        setFirstName(res.firstName)
        setlastName(res.lastName)
        setEmail(res.email)
    }, [id, users])
    const update = () => {
        dispatch(updateUser({
            id: parseInt(id),
            firstName: firstName,
            lastName: lastName,
            email: email,
        }))
        navigate('/list')
    }
    return (
        <div className="createForm">
            <form>

                <div class="mb-3">
                    <label class="form-label">FirstName</label>
                    <input type="text" class="form-control" onChange={(event) => {
                        setFirstName(event.target.value)
                    }}
                        placeholder="Enter name"
                        value={firstName}
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">LastName</label>
                    <input type="text" class="form-control" onChange={(event) => {
                        setlastName(event.target.value)

                    }}
                        placeholder="Enter lastname"
                        value={lastName} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp"
                        onChange={(event) => {
                            setEmail(event.target.value)

                        }}
                        placeholder="Enter email"
                        value={email}
                    />
                </div>
                <button type="submit" class="btn btn-primary" onClick={() => { update() }}>Submit</button>
            </form>
        </div>
    );
}


export default UserUpdate;
