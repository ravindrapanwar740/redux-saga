import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, deleteUser } from '../../redux/reducers/index';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Spinner from 'react-bootstrap/Spinner';


const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  const DeleteUserData = (id) => {
    dispatch(deleteUser({ id: id }))
  }

  return (
    <>
      {users?.userData ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {users?.userData.map((item, i) => (
                <tr>
                  <td>
                    <b>{item.id}</b>
                  </td>
                  <td>
                    <b>{item.firstName}</b>
                  </td>
                  <td>
                    <b>{item.lastName}</b>
                  </td>
                  <td>
                    <b>{item.email}</b>
                  </td>
                  <td>
                   
                    <Link to={`/update` + `?id=${item.id}`}>
                      <FontAwesomeIcon icon={faEdit} color="orange" />
                    </Link>
                    <span onClick={() => DeleteUserData(item.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} color="red" />
                    </span>


                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <Spinner animation="border" variant="primary" />

      )}
    </>

  )
}

export default UserList;