import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../slice/UserReducer';


function Home() {

    const users = useSelector((state) => state.users)
    // console.log("User data ::", users);
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }

    return (
        <>
            <div className="container">
                <h2>CRUD app using redux toolkit!</h2>
                <Link to={"/create"} className='btn btn-success my-3' >Create</Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`} className='btn btn-sm btn-secondary'>Update</Link>
                                    <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home